# Release checklist

Release metadata has one source of truth: `lib/site.ts`. The CTA and SoftwareApplication structured data consume it, while `npm run verify:release` checks it against the committed executable.

For an EXE-only update requested with an already built, versioned executable,
follow the optimized workflow in `AGENTS.md`. In that path, run only
`npm run verify:release` locally and let the GitHub Actions deployment workflow
perform lint, type checking, the production build, link checks and Playwright
tests. Run the broader checks locally only after web source/configuration changes
or to investigate a failed verification or CI run.

1. Build the application from the intended release commit.
2. Obtain the final, signed EXE that will actually be published. Do not hash an intermediate build.
3. Calculate its SHA-256 (PowerShell: `Get-FileHash -Algorithm SHA256 <file>`).
4. Record its exact byte size and the one-decimal MiB display value used by the site.
5. Update the version, file size and SHA-256 in `lib/site.ts`.
6. Copy the final EXE to `public/downloads/` and update the single `publicAssetPath` constant. The filename must contain the version; the trial starts per user, not on a fixed release date.
7. Update `content/CHANGELOG.md` with `npm run sync:changelog -- <application-repository-path>` and verify the latest entry.
8. Update the SHA-256 and display size in `lib/site.ts`, then run `npm run verify:release`.
9. Run `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check:links` and `npm test`.
10. After deployment, download the EXE from the public CTA and confirm the filename, version, size, expiry text and successful launch.
11. Calculate SHA-256 from the downloaded copy and compare it byte-for-byte with the value displayed on the deployed page.

Never publish a new EXE under an old filename or leave a previous SHA-256 visible during deployment.

