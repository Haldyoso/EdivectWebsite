import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const host = "127.0.0.1";
const port = Number(process.env.PORT ?? 4173);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/EdivectWebsite";
const outputRoot = resolve("out");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".exe": "application/vnd.microsoft.portable-executable",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function candidateFiles(pathname) {
  if (pathname === `${basePath}.txt`) {
    return [join(outputRoot, "index.txt")];
  }
  if (!pathname.startsWith(basePath)) return [];

  const relative = decodeURIComponent(pathname.slice(basePath.length)).replace(
    /^\/+/, 
    "",
  );
  if (!relative) return [join(outputRoot, "index.html")];

  const clean = normalize(relative);
  if (clean.startsWith("..")) return [];

  const direct = join(outputRoot, clean);
  return extname(clean)
    ? [direct]
    : [`${direct}.html`, join(direct, "index.html")];
}

function sendFile(request, response, file, status = 200) {
  const size = statSync(file).size;
  response.writeHead(status, {
    "Content-Length": size,
    "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream",
  });
  if (request.method === "HEAD") response.end();
  else createReadStream(file).pipe(response);
}

const server = createServer((request, response) => {
  const pathname = new URL(request.url ?? "/", `http://${host}:${port}`).pathname;
  const file = candidateFiles(pathname).find(
    (candidate) =>
      candidate.startsWith(outputRoot) &&
      existsSync(candidate) &&
      statSync(candidate).isFile(),
  );

  if (file) {
    sendFile(request, response, file);
    return;
  }

  const notFound = join(outputRoot, "404.html");
  if (existsSync(notFound)) sendFile(request, response, notFound, 404);
  else {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

export function startStaticServer() {
  return new Promise((resolveServer, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      console.log(`Static export available at http://${host}:${port}${basePath}/`);
      resolveServer(server);
    });
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await startStaticServer();
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      server.closeAllConnections();
      server.close(() => process.exit(0));
    });
  }
}
