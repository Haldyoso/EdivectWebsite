# Audit pripravenosti na produkčné spustenie

Dátum auditu: 3. 9. 2026. Tento súbor zachytáva stav repozitára pred úpravami na zvýšenie pripravenosti na spustenie vykonanými v rámci tej istej práce.

## KRITICKÉ

- Neboli nájdené žiadne kritické problémy.

## VYSOKÉ

- V EN, SK ani DE neexistujú stránky Ochrana súkromia a Podmienky používania a päta neobsahuje odkazy na právne informácie.
- Verejná softvérová licencia/EULA a komerčný model nie sú rozhodnuté. Web správne nezverejňuje žiadnu licenciu, ale pred spustením je stále potrebné prijať rozhodnutie.
- GitHub Pages dostáva iba všeobecný exportovaný súbor `404.html` z Next.js; neexistuje značková cesta späť na web.
- Odkazy na stiahnutie v navigácii stránok changelogu sú obyčajné odkazy relatívne ku koreňu (`/#download`, `/sk#download`, `/de#download`). Vynechávajú základnú cestu GitHub Pages `/EdivectWebsite/` a odvádzajú návštevníka mimo nasadeného projektového webu.
- Neexistujú automatické smoke testy, kontroly prístupnosti ani kontroly nefunkčných odkazov.
- `npm audit` hlási šesť závažných nálezov v závislostiach. Priamym nálezom je Next.js 15.5.20; npm označuje verziu 15.5.25 ako neprelomovú opravenú verziu. Väčšina serverových upozornení Next.js nie je v tomto statickom exporte zneužiteľná počas prevádzky, zraniteľné build závislosti je však aj tak vhodné aktualizovať.

## STREDNÉ

- Stránky changelogu definujú Open Graph metadáta, ale nemajú vlastné Twitter metadáta, preto dedia Twitter titulok a popis úvodnej stránky.
- Metadáta stránok obsahujú recipročné EN/SK/DE hreflang odkazy aj `x-default`, ale alternatívy v sitemap vynechávajú `x-default`, hoci komentár v zdrojovom kóde sľubuje úplnú množinu.
- Údaje vydania sú centralizované a momentálne správne, ale neexistuje zdokumentovaný postup vydania, ktorý by zabránil budúcemu nesúladu EXE, kontrolného súčtu, veľkosti alebo verzie.
- Obmedzenia GitHub Pages a prechodu na vlastnú doménu sú v README vysvetlené iba čiastočne; bezpečnostné hlavičky, DNS, presmerovania a kroky pre Search Console potrebujú samostatný kontrolný zoznam.
- Analytika nie je nasadená, čo je dobré predvolené riešenie z pohľadu súkromia, ale vlastník nemá toto rozhodnutie zdokumentované.
- Chýbajú údaje právneho vlastníka alebo spoločnosti aj e-mail podpory. GitHub Issues je jediný funkčný kontaktný kanál.

## NÍZKE

- Súbor `robots.txt` v projektovej ceste nemôže slúžiť ako hostiteľský robots súbor pre `haldyoso.github.io`; ide o obmedzenie GitHub Pages, nie chybu aplikácie.
- Hodnota `lastModified` v sitemap je pre každú trasu časom buildu namiesto dátumu konkrétnej zmeny obsahu.
- HTML úvodnej stránky má približne 205–212 kB a JavaScript pri prvom načítaní približne 179 kB. Interaktívny kód je už izolovaný, snímky sú malé súbory WebP a nič nenaznačuje, že by rizikový refaktor priniesol primeraný úžitok.
- Spustiteľný súbor s veľkosťou 72,7 MiB tvorí zámerne väčšinu prenesených dát; sťahuje sa až po výslovnej akcii používateľa.

## UŽ BOLO V PORIADKU

- Statický export, workflow nasadenia na GitHub Pages, centralizované `basePath`/`assetPrefix`, cesty manifestu a cesty snímok sú správne implementované pre `/EdivectWebsite/`.
- Aktuálny názov EXE, veľkosť (76 230 839 bajtov / 72,7 MiB), verzia, dátum expirácie (9. 10. 2026) a SHA-256 (`7AF778F7B0421AAD21513F9CC3DBA70E2AF3A711EACED6FBC55A744381E80BAD`) zodpovedajú súboru `lib/site.ts`.
- Hlavné CTA na úvodnej stránke smeruje na distribuovaný EXE a používa spoločnú konfiguráciu vydania.
- Existujú EN, SK a DE trasy, prepínanie jazykov, lokalizované `<html lang>`, canonical URL a recipročné hreflang odkazy na úrovni stránok.
- Existujú titulky, popisy, Open Graph, Twitter karty úvodných stránok, favicon, Apple ikona, ikony manifestu a lokalizované obrázky pre sociálne siete.
- SoftwareApplication a FAQPage JSON-LD, ktorého text zodpovedá viditeľnému obsahu, sa generujú zo spoločného typovaného obsahu.
- Obsah FAQ aj správanie akordeónu existujú a vykresľujú sa na serveri.
- Obrázky majú opisné lokalizované alternatívne texty alebo sú zámerne dekoratívne, kontajnery s pevným pomerom strán a responzívne `sizes`; všetky snímky sú kompaktné súbory WebP.
- Existujú sémantické oblasti stránky, jeden nadpis `h1`, správne zoradené nadpisy sekcií, odkaz na preskočenie k obsahu, viditeľné focus stavy, ovládanie klávesnicou, podpora obmedzenia pohybu a prístupné správanie lightboxu.
- Web nemá formuláre, účty, analytiku, skripty tretích strán, sledovacie cookies ani úložisko vyžadujúce súhlas. Voľba témy používa iba localStorage.
- Externé odkazy s `target="_blank"` používajú `rel="noopener"`. Neboli nájdené aplikačné tajomstvá ani nebezpečné miesta, do ktorých by sa vkladal HTML obsah ovládaný používateľom.
- Použitie `dangerouslySetInnerHTML` je obmedzené na konštantný štartovací skript, JSON serializovaný z typovaného obsahu vlastneného repozitárom a Markdown changelogu uložený v tomto repozitári.
- Východiskový lint, kontrola TypeScriptu aj produkčný statický export prechádzajú.

## Rozhodnutia stále potrebné pred spustením

- Meno právneho vlastníka alebo spoločnosti a adresa tam, kde ich vyžaduje zákon.
- Kontaktný e-mail pre podporu a súkromie alebo výslovné rozhodnutie používať iba GitHub Issues.
- Konečná softvérová licencia/EULA a komerčný model.
- Rozhodnutie, či zostať bez sledovania alebo nasadiť analytiku.
- Rozhodnutie, či a kedy prejsť na vlastnú doménu alebo hosting s nastaviteľnými HTTP bezpečnostnými hlavičkami.

## Nápravy dokončené po tomto východiskovom audite

- Pridané lokalizované trasy Ochrany súkromia a Podmienok používania s odkazmi v päte, metadátami, canonical URL a recipročnými hreflang odkazmi.
- Pridaná exportovaná značková globálna stránka 404 vhodná pre viac koreňových jazykových layoutov repozitára.
- Opravená trasa stiahnutia v navigácii podstránok, aby Next použil základnú cestu projektu.
- Do sitemap boli pridané `x-default` a právne trasy; changelog dostal vlastné Twitter metadáta.
- Pridané kontroly integrity vydania, interných a externých odkazov, Playwright smoke testy a axe testy prístupnosti; stabilné kontroly sú zapojené do nasadzovacieho CI.
- Next.js bol aktualizovaný v rámci existujúcej hlavnej a vedľajšej verzie a boli použité bezpečné opravy tranzitívnych závislostí; následný `npm audit` hlási nula zraniteľností.
- Pridaná dokumentácia rozhodnutí o licencovaní, vydávaní, vlastnej doméne, bezpečnostných hlavičkách a analytike.
