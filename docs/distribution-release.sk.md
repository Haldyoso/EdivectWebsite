# Návrh distribúcie Edivect – lokálne pripravené, bez publikovania

Overené 1. októbra 2026: `Haldyoso/EdivectWebsite` je existujúci verejný repozitár,
vhodný pre verzované GitHub Release prílohy. Zdrojový repozitár aplikácie sa
nezverejňuje. GitHub connector k nemu pri tejto príprave nemal prístup; to nie je
dôvod meniť jeho viditeľnosť.

Aktuálny spoločný download v `lib/site.ts` je
`https://downloads.edivect.com/Edivect-v1.0.0.exe`. Hero, download sekcia a
štruktúrované dáta ho používajú spoločne. Existujúca verejná verzia aj checksum
zostávajú zachované až do samostatne schváleného publikovania novej verzie.
Lokálne dve možnosti distribúcie jasne uvádzajú, že Store sa ešte pripravuje.

## Konkrétne prílohy a URL návrh

Pre produkt `1.0.0.1`:

- tag a Release: `v1.0.0.1` v `Haldyoso/EdivectWebsite`;
- príloha `C:\Dev\Edivect\dist\Edivect\Edivect-v1.0.0.1.exe`;
- príloha `C:\Dev\Edivect\dist\Edivect\Edivect-v1.0.0.1.exe.sha256`;
- budúca EXE URL:
  `https://github.com/Haldyoso/EdivectWebsite/releases/download/v1.0.0.1/Edivect-v1.0.0.1.exe`;
- budúca checksum URL: rovnaká adresa s `.sha256` za `.exe`.

Tieto URL sú návrh, nie už publikované súbory. MSIX StoreUpload sa nenahráva
ako verejný inštalátor, ide do Partner Center. Používateľom web ponúkne skutočnú
produktovú Store stránku po publikovaní. Privátne podpisové podklady sa neprikladajú.

## Kroky po výslovnom potvrdení vlastníka

1. Znovu overte remote, workflowy a domény; lokálny `.github/workflows/deploy.yml`
   má `push: main` aj `workflow_dispatch` a nasadzuje GitHub Pages. `wrangler.jsonc`
   cieli produkčný Cloudflare Worker `edivect`; downloads.edivect.com je R2 bucket
   `edivect-releases`. Ani tag, draft, upload či push zatiaľ nebol vykonaný.
2. Preverte podpis portable EXE, veľkosť a SHA-256. Nevytvárajte ďalší build iba
   kvôli webu; použite schválený EXE. Nasledujúce príkazy sú návod na neskorší,
   samostatne autorizovaný krok, nie automatická časť prípravy:

   ```powershell
   Get-FileHash C:\Dev\Edivect\dist\Edivect\Edivect-v1.0.0.1.exe -Algorithm SHA256
   gh release create v1.0.0.1 --repo Haldyoso/EdivectWebsite --draft --title "Edivect 1.0.0.1" --notes "Portable Windows x64 release. SHA-256 checksum attached."
   gh release upload v1.0.0.1 C:\Dev\Edivect\dist\Edivect\Edivect-v1.0.0.1.exe C:\Dev\Edivect\dist\Edivect\Edivect-v1.0.0.1.exe.sha256 --repo Haldyoso/EdivectWebsite
   ```

   Bez osobitného dôvodu nepoužívajte `--clobber`; vydané verzie sú nemenné.
   Pred vytvorením tagu preverte všetky aktuálne remote workflowy vrátane triggerov
   `release`/`push.tags`; nahratie príloh nevyžaduje push webového kódu na main.
3. Po kontrole a potvrdení publikujte draft samostatne. Stiahnite publikované
   prílohy do dočasného priečinka a porovnajte veľkosť aj SHA-256.
4. Až potom zmeňte `releaseDownloadUrl` v `lib/site.ts` na verzovanú GitHub URL,
   spolu s produktovou verziou, veľkosťou a checksumom. Overený zdrojový EXE
   uchovajte v `releases/` pre `npm run verify:release`; EXE nepatrí do `public/`
   ani do git commitov webu. Prílohy sa uploadujú cez Release.
5. Pripravte lokálne aj aktualizáciu textov v `lib/legal.ts`, ktoré dnes opisujú
   download z Cloudflare R2. Pri skutočnej zmene hostingu downloadu majú uvádzať
   GitHub Releases a jeho zásady. Zmeny metadát a textov overte pred nasadením.
6. Po Store publikovaní nastavte `NEXT_PUBLIC_MICROSOFT_STORE_URL` na skutočný
   kanonický `https://apps.microsoft.com/detail/<ProductId>` z Partner Center.
   Súčasne nastavte `NEXT_PUBLIC_MICROSOFT_STORE_PRODUCT_VERSION` na produktovú
   verziu publikovanej aplikácie, napríklad `1.0.0.12`, nie MSIX verziu `1.0.12.0`.
   ID ani publikovaná verzia sa nevymýšľajú. Keď sú obe hodnoty prázdne, Store
   karta hlási „Microsoft Store pripravujeme.“ a tlačidlo je deaktivované.
   Neúplné alebo neplatné nastavenie zastaví build.
   Pre lokálne nastavenie skopírujte `.env.example` do ignorovaného `.env.local`;
   pre GitHub Pages použite Settings → Secrets and variables → Actions → Variables
   a dve repository variables s presne uvedenými názvami. Workflow ich odovzdáva
   statickému buildu. Nastavenie premenných samo stránku neprebuduje; neskoršie
   nasadenie musí byť osobitne schválené. Pre Cloudflare statický export musia byť
   obe hodnoty dostupné už pri buildovaní, nie iba pri behu Workera.
7. Všetky zmeny webu najprv skontrolujte lokálne. Produkčné nasadenie schváľte
   samostatne pre konkrétny cieľ: GitHub Pages, edivect.com alebo R2. Push na main
   má vedľajší účinok nasadenia Pages; nepoužívajte ho len na odloženie prípravy.
   `wrangler deploy`/R2 upload teraz nespúšťajte. Potom overte verejné odkazy a
   hash; neaktualizujte existujúce verzované R2 súbory pod tým istým názvom.

Lokálne kontroly zdrojových zmien: `npm run lint`, `npm run typecheck`,
`npm run test:distribution`. Playwright, snímky, náhľady ani vizuálne
overenie sa pri tejto úlohe nevykonávajú. Pri čistej budúcej výmene EXE postupujte
podľa webového AGENTS.md a použite `npm run verify:release`.

## Príprava dvoch možností bez výmeny portable EXE

Sekcia stiahnutia má samostatnú kartu Microsoft Store a samostatnú kartu
portable EXE. Každá má vlastný popis a vlastnú verziu. Store môže byť po budúcom
schválení napríklad `1.0.0.12`, zatiaľ čo portable ostane `1.0.0`; nejde o pokyn
zverejniť tento príklad verzie. SHA-256 a veľkosť sa zobrazujú iba pri portable.
Kým Store nie je publikovaný, jeho verzia sa nezobrazuje.

Pri tejto príprave zostávajú pôvodný portable download, jeho verzia, veľkosť aj
checksum bez zmeny. Nezvyšuje sa verzia aplikácie a nevytvára sa nový EXE ani MSIX.
Na výslovné rozhodnutie vlastníka sú všetky zmeny iba v lokálnom pracovnom
priečinku. Kód sa nepushuje ani do prípravnej GitHub vetvy, main sa nemení a
neprebieha žiadne nasadenie ani upload.
