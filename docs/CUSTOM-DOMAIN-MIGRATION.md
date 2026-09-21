# Presun webu na vlastnú doménu

Produkčný web je `https://edivect.com` na Cloudflare Workers. Pôvodná adresa `https://haldyoso.github.io/EdivectWebsite` zostáva počas migrácie dostupná.

## Stav migrácie k 21. septembru 2026

- R2 je aktivované so súhlasom vlastníka účtu.
- Bucket `edivect-releases` je vytvorený; `downloads.edivect.com` je pripojená ako verejná doména.
- Príkaz v Cloudflare je uložený s `--name edivect`.
- Miestny zdrojový EXE je v `releases/Edivect-v1.0.0.exe`, mimo `public/` a `out/`.
- Odkazy na R2, údaje o hostingu, konfigurácia Workera a HTTP hlavičky sú nasadené.
- Zostavenie pre koreň domény, kontrola odkazov, overenie EXE a 14 testov prešli.
- EXE je nahratý do R2. Verejné stiahnutie bolo overené: 76 274 395 bajtov a SHA-256 súhlasia s miestnym súborom.
- Cloudflare nasadenie `ff62f3c` prešlo a hlavná doména `edivect.com` je pripojená k Workeru `edivect`.
- Verejné EN/SK/DE stránky, právne stránky, manifest, ikony, zdieľacie obrázky, robots.txt, sitemap.xml a odpoveď 404 boli overené cez HTTP.
- V Cloudflare je zapnuté `Always Use HTTPS`; požiadavky HTTP sa presmerujú na HTTPS.

Pri ďalšom nasadení kontrolovať stav v intervaloch 30 až 60 sekúnd. GitHub Pages zostáva počas migrácie dostupný. Kontrola sťahovania je `npm run verify:release -- --remote`.

Pre nové vydania platí postup v `releases/README.md`. Kontaktný e-mail nebol dodaný, preto zostáva doterajší kontakt cez GitHub Issues. Overenie Search Console vyžaduje prístup k príslušnému účtu.

## Nastavenie kódu a zostavenia webu

1. Nastavte `NEXT_PUBLIC_SITE_URL` na konečnú HTTPS adresu bez lomky na konci, napríklad `https://edivect.com`.
2. Nastavte `NEXT_PUBLIC_BASE_PATH` na prázdny reťazec, ak web bude priamo na doméne. Ak bude v podadresári, nastavte presnú verejnú cestu.
3. Vo výslednom zostavení overte `basePath` a `assetPrefix`. Spoločnú konfiguráciu v `lib/site.ts` nemeňte iba na jednom mieste.
4. Skontrolujte `start_url` v manifeste a adresy ikon. Predpona sa k nim pridáva ručne, pretože ide o obyčajné textové hodnoty v JSON.
5. V exportovanom HTML skontrolujte odkaz na stiahnutie a adresy súborov Next.js.

## Vyhľadávače a zdieľanie

1. Znovu vygenerujte kanonické adresy a adresy pre Open Graph a Twitter podľa novej hodnoty `NEXT_PUBLIC_SITE_URL`.
2. Overte všetky jazykové prepojenia EN/SK/DE cez `hreflang`, vrátane spätných odkazov a `x-default`.
3. Znovu vygenerujte `sitemap.xml`, skontrolujte každú adresu a odošlite mapu webu používaným vyhľadávačom.
4. Sprístupnite `robots.txt` priamo v koreni vlastnej domény. Súčasný súbor v podadresári projektu neurčuje pravidlá pre doménu `haldyoso.github.io`.
5. Pridajte a overte novú doménu v Google Search Console a ďalších používaných nástrojoch pre správcov webov.
6. Počas migrácie ponechajte pôvodnú adresu GitHub Pages dostupnú. Tam, kde to hosting umožňuje, nastavte trvalé presmerovania zo starých adries. Projektové weby GitHub Pages nepodporujú ľubovoľné pravidlá HTTP presmerovania.

Súčasný hosting používa jeden súbor `404.html` pre všetky neexistujúce adresy. Nedokáže podľa `/sk` alebo `/de` vybrať jazyk chybovej stránky, preto je táto stránka v angličtine. Nový hosting môže podporovať výber jazyka pred jej zobrazením.

## GitHub Pages a DNS

1. V nastaveniach repozitára v časti `GitHub Pages` pridajte vlastnú doménu. Ak použitý spôsob publikovania vyžaduje súbor `CNAME`, zahrňte ho do repozitára.
2. DNS záznamy nastavte presne podľa pokynov GitHubu pre hlavnú doménu alebo subdoménu.
3. Počkajte na overenie DNS a potom zapnite a vynúťte HTTPS.
4. Udržujte vlastníctvo repozitára a DNS pod kontrolou, aby doménu nemohol prevziať niekto iný.

## Záverečné overenie

1. S premennými nastavenými pre vlastnú doménu spustite tieto kontroly:

   ```sh
   npm run lint
   npm run typecheck
   npm run build
   npm run verify:release
   npm run check:links
   npm test
   ```

2. Na počítači aj mobile otestujte všetky jazykové verzie, právne stránky, sťahovanie, manifest, ikony, náhľady pri zdieľaní a chybovú stránku 404.
3. Stiahnite EXE z verejnej domény a overte jeho presnú veľkosť a SHA-256.
4. Skontrolujte skutočné HTTP hlavičky odpovedí. Ak ich nový hosting podporuje, doplňte pravidlá uvedené v `docs/SECURITY-AND-ANALYTICS.md`.

## edivect.com cez Cloudflare — príprava (20. september 2026)

Pôvodné možnosti pred migráciou (realizovaná je druhá možnosť):

- **Ponechať hosting na GitHub Pages a DNS spravovať cez Cloudflare.** Zachová sa súčasný EXE aj postup nasadenia. Najprv nastavte vlastnú doménu v GitHub Pages, až potom na ňu nasmerujte DNS. Overte HTTPS a presmerovania.
- **Presunúť web na Cloudflare a EXE uložiť samostatne do R2.** Statický web môže obsluhovať Cloudflare Pages alebo Workers Static Assets. Obe služby majú limit 25 MiB na jeden statický súbor. Súčasný EXE má 72,7 MB, preto nemožno nahrať priečinok `out/` bez úprav. Súbor EXE musí zostať mimo balíka statického webu. Pre R2 nastavte verejnú doménu na sťahovanie, v `lib/site.ts` upravte odkaz a pri nasadení overte aj veľkosť a SHA-256 verejného súboru.

Pre obe možnosti nastavte pri zostavení:

| Názov premennej | Hodnota |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://edivect.com` |
| `NEXT_PUBLIC_BASE_PATH` | prázdny reťazec |

Premenná `NEXT_PUBLIC_BASE_PATH` musí mať skutočne prázdnu hodnotu. Ak chýba, kód použije predvolenú cestu `/EdivectWebsite`. Súčasné predvolené hodnoty zachovávajú funkčnosť GitHub Pages až do migrácie.

Pred testovaním webu priamo na doméne upravte cesty v testoch prehliadača aj predponu lokálneho testovacieho servera tak, aby vychádzali z konfigurácie namiesto pevnej cesty `/EdivectWebsite`.

Pred spustením doplňte skutočnú kontaktnú e-mailovú adresu pre podporu a otázky o súkromí. GitHub odkazy sú z hlavičky a pätičky odstránené, právne stránky však zatiaľ používajú GitHub Issues. Po výbere hostingu nahraďte kontakt a aktualizujte informácie o hostingu v zásadách ochrany súkromia.

## Zlyhaná kontrola Workers Builds: edivect

Kontrola `Workers Builds: edivect` patrí k samostatnému nasadeniu do Cloudflare Workers. Úspešné kontroly `Deploy to GitHub Pages / build` a `Deploy to GitHub Pages / deploy` znamenajú, že nasadenie na GitHub Pages prešlo nezávisle od nej.

V zázname zostavenia `48a168a7-cd07-4deb-b20e-f10549e4031e` bola overená presná príčina: zostavenie webu prešlo, ale nasadenie zlyhalo s chybou `Asset too large.` Súbor `out/downloads/Edivect-v1.0.0.exe` prekračuje limit 25 MiB pre Workers Static Assets.

Záznam obsahuje aj upozornenie na nesúlad názvov: príkaz používa `--name edivectwebsite`, ale pripojený Worker sa volá `edivect`. Cloudflare názov automaticky prepísal; toto upozornenie nebolo príčinou zlyhania.

Po presunutí EXE do R2 a úprave odkazu na stiahnutie musí nasadzovaný priečinok obsahovať iba súbory webu. Samotné odstránenie EXE z balíka bez zmeny odkazu by pokazilo sťahovanie.

Aktuálny `Build command` je nastavený správne pre vlastnú doménu:

```sh
NEXT_PUBLIC_BASE_PATH="" NEXT_PUBLIC_SITE_URL="https://edivect.com" npm run build
```

Aktuálne uložený `Deploy command` používa názov existujúceho Workera:

```sh
npx wrangler deploy --assets ./out --name edivect --compatibility-date 2026-09-15
```

Chybu veľkosti vyriešil presun EXE do R2. Súbor sa uchováva v `releases/` a neexportuje sa do `out/`.

## Zdroje

- [Limity Cloudflare Pages](https://developers.cloudflare.com/pages/platform/limits/)
- [Limity Cloudflare Workers](https://developers.cloudflare.com/workers/platform/limits/)
- [Vlastné domény v Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Nastavenie Cloudflare DNS](https://developers.cloudflare.com/dns/get-started/)
