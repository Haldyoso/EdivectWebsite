# Vydania Edivect

Tento priečinok uchováva overený zdrojový EXE mimo verejného balíka webu.
Nespúšťajte ho pri aktualizácii stránky a nevytvárajte nový build aplikácie.

Verejné súbory patria do R2 bucketu `edivect-releases`, pod vlastným názvom,
napríklad `Edivect-v1.0.0.exe`. Verejná adresa je
`https://downloads.edivect.com/Edivect-v1.0.0.exe`.

Pri novom vydaní najprv nahrajte súbor do R2, overte binárny Content-Type
(`application/x-msdownload` pri nahratí cez dashboard alebo `application/octet-stream`).
Pri nahrávaní cez API možno navyše nastaviť Content-Disposition na
`attachment; filename="Edivect-v1.0.0.exe"` (s názvom aktuálneho súboru).
Potom aktualizujte verziu, názov, presnú veľkosť, zobrazenú veľkosť, SHA-256 a
odkaz v `lib/site.ts`. Pred publikovaním overte miestny aj verejný súbor:

```sh
npm run verify:release
npm run verify:release -- --remote
```

Do `public/` EXE nevracajte: prekračuje limit statických súborov Cloudflare.
