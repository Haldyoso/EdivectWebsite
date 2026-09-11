# Custom-domain migration

The current production origin is `https://haldyoso.github.io/EdivectWebsite`. Use this checklist when moving to a root custom domain.

## Code and build configuration

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin without a trailing slash.
2. Set `NEXT_PUBLIC_BASE_PATH` to an empty string for a root-domain deployment. If the new host still uses a subdirectory, set the exact public path instead.
3. Verify `basePath` and `assetPrefix` in the generated build. Do not remove the shared `lib/site.ts` configuration in only one place.
4. Check manifest `start_url` and icon URLs; these are manually prefixed because they are plain JSON strings.
5. Check screenshot, download and Next.js asset URLs in the exported HTML.

## SEO and discovery

1. Rebuild canonical, Open Graph and Twitter URLs from the new `NEXT_PUBLIC_SITE_URL`.
2. Verify every EN/SK/DE hreflang set, including reciprocal links and `x-default`.
3. Rebuild `sitemap.xml`, inspect every URL and submit it to the relevant search engines.
4. Make `robots.txt` available at the custom domain root. The current GitHub project-path copy is not authoritative for `haldyoso.github.io`.
5. Add and verify the new domain property in Google Search Console and any other webmaster tools in use.
6. Keep the old GitHub Pages URL reachable long enough for migration. Configure permanent redirects from old URLs where the chosen host supports them; GitHub Pages project sites cannot provide arbitrary HTTP redirect rules.

The current host also serves one repository-level `404.html` for every missing URL. It cannot select a localized 404 from `/sk` or `/de`, so the branded fallback is intentionally English. A future host with edge routing can choose a locale before serving the error page.

## GitHub Pages and DNS

1. Add the custom domain in the repository's GitHub Pages settings and commit the generated `CNAME` file if GitHub requires it for this publishing flow.
2. Configure the DNS records exactly as shown by GitHub for an apex or subdomain.
3. Wait for DNS validation, then enable and enforce HTTPS.
4. Protect the domain against takeover by keeping repository and DNS ownership aligned.

## Final verification

1. Run lint, typecheck, production build, release verification, link checking, smoke tests and accessibility tests with the custom-domain environment variables.
2. Test all language routes, legal pages, changelog, download, manifest, icons, social cards and the branded 404 on desktop and mobile.
3. Verify the downloaded EXE and SHA-256 from the public domain.
4. Inspect actual HTTP response headers and add the policies listed in `docs/SECURITY-AND-ANALYTICS.md` if the new host supports them.
