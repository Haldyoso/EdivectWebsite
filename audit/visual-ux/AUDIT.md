# Edivect — komplexný vizuálny a UX audit

Audit: 22. 8. 2026  
Testovaný zdroj: lokálny projekt `EdivectWebsite`, bez zmien aplikačného kódu

> **Stav po schválení opráv (22. 8. 2026):** všetkých 16 nálezov bolo
> implementovaných a znovu otestovaných. Pôvodný audit nižšie zostáva zachovaný
> ako before stav; výsledky, presné merania a after screenshoty sú v
> [REMEDIATION.md](REMEDIATION.md).

## A. Stručné celkové hodnotenie

**Celkové skóre pripravenosti: 6,9/10.** Čisto vizuálna kvalita je približne **8,6/10**, ale výsledok výrazne znižuje nefunkčný primárny download, rozpor verzií a chyba vrstvenia lightboxu. Po oprave štyroch najvyšších priorít je realistické skóre nad 8,5/10.

| Oblasť | Skóre |
|---|---:|
| Vizuálna konzistentnosť | 9,0/10 |
| Hierarchia a typografia | 8,5/10 |
| Responzivita | 7,5/10 |
| Prístupnosť | 6,3/10 |
| UX a konverzná pripravenosť | 5,5/10 |

### Tri najsilnejšie stránky dizajnu

1. **Veľmi súdržný dizajnový systém.** Graphite povrchy, Signal Blue, technické screenshoty, Segoe UI, rádiusy a tiene pôsobia ako jeden produkt. Svetlý aj tmavý motív zachovávajú identitu.
2. **Silná produktová komunikácia.** Hero rýchlo vysvetlí cieľovú skupinu, súkromie aj hlavný diferenciátor — editovateľné vektory. Reálne CAD/QA screenshoty budujú dôveryhodnosť lepšie než generické ilustrácie.
3. **Dobré technické základy.** Všetkých šesť route variantov sa vykreslilo bez globálneho horizontálneho overflowu. Obrázky majú správne pomery v hero, feature showcase a galérii; `lang`, landmarky, skip link, alt texty, focus return a reduced-motion podpora sú premyslené.

### Tri najväčšie problémy

1. Primárny download nič nestiahne a web ukazuje tri rozdielne verzie produktu.
2. Navbar je nad lightboxom a blokuje jeho zatváracie tlačidlo.
3. Viaceré textové kombinácie nespĺňajú WCAG AA; najslabšia má iba 2,82:1.

Kompletný označený prehľad je v [23-annotated-findings.png](screenshots/23-annotated-findings.png) a v interaktívnom [annotated-findings.html](annotated-findings.html).

## B. Zoznam nálezov

### VUX-01 — Primárny download a dôveryhodnosť release údajov

- **Závažnosť:** kritická / launch blocker
- **Miesto:** hero, navbar, sekcia `#download`, pätička; EN/SK/DE; všetky breakpointy
- **Dôkaz:** [download sekcia](screenshots/22-sk-download-section.png)
- **Nález:** `Stiahnuť ZIP (v1.0.0)` má `href="#"`. „Staršie verzie“ a GitHub odkazy smerujú iba na `https://github.com`. Dokumentácia, licencia a nahlásenie chyby majú tiež `#`.
- **Rozpor:** karta a structured data uvádzajú `1.0.0`, OPM súbor má `0.9.9.84`, najnovší changelog zobrazuje `0.9.9.61`.
- **Dopad:** používateľ prejde celou konverznou cestou, ale hlavný produkt nestiahne. Rozdielne verzie vyzerajú ako neaktuálny alebo nedôveryhodný release.
- **Odporúčanie:** pred publikovaním nastaviť reálne URL v `lib/site.ts`, odvodiť verziu, veľkosť, SHA a názov súboru z jedného release manifestu a neaktívnu CTA dovtedy skryť alebo označiť „Pripravujeme“. Všetky odkazy v pätičke musia mať reálny cieľ.

### VUX-02 — Lightbox je pod navbarom

- **Závažnosť:** vysoká
- **Miesto:** galéria/lightbox; všetky breakpointy, najviditeľnejšie 375 × 812
- **Dôkaz:** [mobilný lightbox](screenshots/14-sk-mobile-lightbox.png)
- **Nález:** `main` vytvára stacking context cez `relative z-1`; lightbox `fixed z-400` je jeho potomok. Header je súrodenec s `z-100`, preto zostane fyzicky nad celým modalom.
- **Overený prejav:** klik na viditeľnú pozíciu tlačidla „Zavrieť“ otvoril mobilné menu; lightbox zostal otvorený. `Escape` ho zatvoril a focus sa správne vrátil na pôvodnú galériovú kartu.
- **Dopad:** základné dotykové/myšové zatvorenie nefunguje, navbar zostáva interaktívny počas `aria-modal=true` a rozbíja mentálny model modalu.
- **Odporúčanie:** renderovať lightbox cez React portal priamo do `document.body` alebo mimo stacking contextu `main`; backdrop musí byť nad headerom. Pozadie počas otvorenia označiť ako `inert` a následne znovu overiť close, backdrop, šípky, Escape a focus trap.

### VUX-03 — Nedostatočný textový kontrast

- **Závažnosť:** vysoká
- **Miesto:** primárne tlačidlá, hero/download metadáta, footer, window title, svetlé overline labely
- **Breakpoint:** všetky; oba motívy
- **Dôkazy:** [download sekcia](screenshots/22-sk-download-section.png), [svetlý mobil](screenshots/15-sk-mobile-light-theme.png)

| Kombinácia | Kontrast | Požiadavka | Stav |
|---|---:|---:|---|
| `#FFFFFF` na `#2D7DF6` | 3,91:1 | 4,5:1 | fail |
| `#FFFFFF` na hover `#4A93FF` | 3,04:1 | 4,5:1 | fail |
| dark subtle `#6B7387` na tmavých povrchoch | 3,67–4,09:1 | 4,5:1 | fail |
| light subtle `#8A90A0` na `#EEF1F6` | 2,82:1 | 4,5:1 | fail |
| light accent `#2D7DF6` na `#EEF1F6` | 3,45:1 | 4,5:1 | fail |

- **Konkrétna oprava:** oddeliť dekoratívny accent od textu a action backgroundu.

```css
--color-action: #246fe5;         /* biely text 4,69:1 */
--color-action-hover: #1e63d6;   /* biely text 5,51:1 */
--color-action-pressed: #1a50ae; /* biely text 7,49:1 */

/* dark */
--color-fg-subtle: #7e8698;      /* min. 4,77:1 na surface */

/* light */
--color-fg-subtle: #636c7d;      /* min. 4,67:1 na #eef1f6 */
--color-accent-text: #1e63d6;    /* 4,87–5,09:1 */
```

### VUX-04 — Mobilné menu je v landscape odrezané a nedá sa posúvať

- **Závažnosť:** vysoká
- **Miesto:** navbar/mobile menu
- **Breakpoint:** 812 × 375; rovnaké riziko pri 200 % zoome na nízkom notebookovom viewporte
- **Dôkaz:** [landscape menu](screenshots/09-mobile-landscape-812-menu.png)
- **Meranie:** menu začína na y=64, má 360 px a končí na y=424. CTA je y=359–411, viewport končí na y=375. `overflow-y` je `visible`, zatiaľ čo `body` má `overflow:hidden`.
- **Dopad:** spodná časť CTA je odrezaná a používateľ ju nevie odscrollovať.
- **Odporúčanie:** na `#mobile-menu` použiť `max-height: calc(100dvh - 4rem)`, `overflow-y:auto` a `overscroll-behavior:contain`. Pre krátku výšku možno znížiť vertikálny padding navigačných položiek cez height media query.

### VUX-05 — Lightbox orezáva obrázky a šípky prekrývajú obsah

- **Závažnosť:** stredná
- **Miesto:** galériový lightbox
- **Breakpoint:** všetky, najvýraznejšie mobil
- **Dôkaz:** [mobilný lightbox](screenshots/14-sk-mobile-lightbox.png)
- **Nález:** galériové súbory majú pomer 1000 × 625, teda 16:10. Lightbox ich vkladá do 16:9 s `object-cover`, čo oreže približne 10 % výšky. Na mobile sú 48 px šípky položené priamo cez ľavý a pravý okraj screenshotu.
- **Odporúčanie:** zachovať `aspect-[16/10]` alebo použiť `object-contain` a pomer z dát obrázka. Pod 640 px presunúť navigačné šípky pod obrázok vedľa počítadla.

### VUX-06 — Horizontálny scroll porovnania nemá affordance

- **Závažnosť:** stredná
- **Miesto:** `#compare`
- **Breakpoint:** 375 × 812 a 768 × 1024
- **Dôkaz:** [mobilné porovnanie](screenshots/11-sk-mobile-375-comparison.png)
- **Meranie:** scroll región má 326 px, tabuľka 780 px; 454 px obsahu je mimo prvého pohľadu.
- **Pozitívum:** celý dokument nepretečie a región je fokusovateľný pomocou klávesnice.
- **Problém:** bez šípky, okrajového fade alebo textu nie je zrejmé, že tabuľka pokračuje doprava. Na prvý pohľad používateľ vidí najmä názvy schopností a iba úzky kus stĺpca Edivect.
- **Odporúčanie:** pridať krátky hint „Potiahnite doprava“, pravý gradient/fade, ktorý zmizne po posunutí, a zvážiť sticky prvý stĺpec. Na mobile môže byť účinnejšie prepínanie konkurenta namiesto päťstĺpcovej tabuľky.

### VUX-07 — Changelog je na mobile neúmerne dlhý

- **Závažnosť:** stredná
- **Miesto:** `/changelog`, `/sk/changelog`, `/de/changelog`
- **Breakpoint:** najmä 375 × 812
- **Dôkaz:** [mobilný changelog](screenshots/18-sk-changelog-mobile-375.png)
- **Meranie:** slovenská stránka má 25 766 px; prvý release má 2 084 px; zobrazuje sa 20 release kariet bez indexu, filtra či zbalenia.
- **Odporúčanie:** hore pridať vyhľadávanie/verziový index, ukázať prvé 3 vydania, staršie zbaliť pod „Zobraziť ďalšie“ a doplniť sticky „Späť nahor“. Alternatíva: každý release ako akordeón s krátkym súhrnom.

### VUX-08 — Focus outline FAQ je orezaný

- **Závažnosť:** stredná
- **Miesto:** `#faq`
- **Breakpoint:** všetky, vizuálne potvrdené na 375 × 812
- **Dôkaz:** [FAQ focus](screenshots/21-sk-mobile-faq-open.png)
- **Nález:** outer accordion má `overflow-hidden`; 2 px outline s kladným offsetom sa odreže zľava a sprava. Výsledkom sú iba dve modré vodorovné čiary.
- **Odporúčanie:** použiť na trigger vnútorný focus ring, napr. `outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-accent)]`, alebo vytvoriť pri fokusovanom iteme vlastný ring, ktorý sa zmestí do kontajnera.

### VUX-09 — Hierarchia nadpisov preskočí z H1 na H3

- **Závažnosť:** stredná
- **Miesto:** sekcia benefitov „Prečo Edivect“ hneď za hero
- **Breakpoint:** všetky
- **Nález:** po H1 nasledujú štyri H3 bez H2. Sekcia má iba `aria-label`.
- **Dopad:** vizuálne je prechod zrozumiteľný, ale dokumentová osnova pre screen readery a nástroje na rýchlu navigáciu je nekonzistentná.
- **Odporúčanie:** pridať pred zoznam `<h2 className="sr-only">Prečo Edivect</h2>` a región pomenovať pomocou `aria-labelledby`.

### VUX-10 — Niektoré mobilné touch targety sú menšie než odporúčaných 44 px

- **Závažnosť:** nízka
- **Miesto:** theme toggle, menu trigger, jazykové prepínače, footer odkazy
- **Breakpoint:** 375 × 812
- **Meranie:** theme toggle 36 × 36 px, menu 40 × 40 px, jazykové odkazy približne 31–33 × 32 px. WCAG 2.2 minimum 24 px spĺňajú, ale pre pohodlné dotykové ovládanie sú malé.
- **Odporúčanie:** horné ikonové ovládače zväčšiť na 44 × 44 px; jazykom ponechať vizuálnu veľkosť a rozšíriť padding/touch box.

### VUX-11 — „Download OPM“ nie je lokalizované ani vysvetlené

- **Závažnosť:** stredná
- **Miesto:** hero a download sekcia; SK/DE
- **Breakpoint:** všetky
- **Nález:** anglické „Download OPM“ sa zobrazuje vo všetkých jazykoch bez vysvetlenia skratky alebo release kanála.
- **Dopad:** používateľ nevie, či ide o stabilnú verziu, preview, inštalátor alebo firemný build; v kombinácii s rozdielnou verziou to znižuje dôveru.
- **Odporúčanie:** buď CTA odstrániť, alebo ju premenovať podľa významu, napr. „Stiahnuť preview (.exe)“, pridať krátky popis a jasne označiť stable/preview kanál.

### VUX-12 — Mobilný hero neukáže produkt v prvom viewporte

- **Závažnosť:** nízka / optimalizačná príležitosť
- **Miesto:** hero; 375 × 812
- **Dôkaz:** [mobilný hero](screenshots/07-sk-mobile-375-top.png)
- **Meranie:** H1 začína na y=212 a má 208 px; CTA pokračujú takmer po spodný okraj. Screenshot produktu sa objaví až po ďalšom scrollovaní.
- **Odporúčanie:** otestovať `pt-[118px]` na mobile, H1 36–38 px, jeden primárny a jeden textový sekundárny odkaz. Cieľom je ukázať aspoň horný okraj reálneho produktu bez straty čitateľnosti.

### VUX-13 — Accessible name loga je duplicitný a na changelogu nepresný

- **Závažnosť:** nízka
- **Miesto:** header logo
- **Nález:** prístupné meno je „Edivect Edivect — späť nahor“. Na changelogu však odkaz vedie na domovskú stránku, nie späť nahor.
- **Odporúčanie:** nastaviť jedno explicitné `aria-label`; na landing page „Edivect — späť nahor“, na changelogu „Edivect — domov“.

### VUX-14 — Runtime chyba obrázka nemá vizuálny fallback

- **Závažnosť:** nízka
- **Miesto:** komponent `Screenshot`
- **Nález:** pekný hatch placeholder existuje iba vtedy, keď `src` chýba už v dátach. Pri 404 alebo chybe načítania nemá `<Image>` error stav. Všetky aktuálne obrázky sa načítali správne.
- **Odporúčanie:** doplniť client-side error fallback. Hero má zdroj 1200 px a na desktope sa vykresľuje približne 1150 CSS px; pre vysoké DPR zvážiť 2× zdroj alebo responzívny `srcset`, ak ostane vizuálne ostrý a rozumný objem dát.

### VUX-15 — Hero reveal odkladá najdôležitejší obsah

- **Závažnosť:** nízka
- **Miesto:** hero animácie
- **Nález:** reveal trvá 500 ms a hero používa stagger až do 300 ms. Pri skorom zachytení po načítaní boli popis a CTA ešte neviditeľné. Bežné UI prechody 120–200 ms sú inak veľmi dobré.
- **Odporúčanie:** H1 a primárnu CTA nerevealovať alebo skrátiť hero reveal na 250–350 ms. `prefers-reduced-motion` je už správne ošetrené.

### VUX-16 — Vývojová konzola hlási scroll warning

- **Závažnosť:** nízka / technická
- **Miesto:** root document
- **Nález:** jediný warning bol od Next.js k `scroll-behavior:smooth`; odporúča `data-scroll-behavior="smooth"` na `<html>`.
- **Odporúčanie:** doplniť atribút pri najbližšej technickej údržbe. Neboli nájdené runtime errors.

## C. Prioritizovaný akčný plán

### Okamžité opravy

1. Zapojenie skutočného ZIP/release URL, GitHub repozitára, issues, licencie a dokumentácie; zjednotenie verzie.
2. Presunutie lightboxu mimo stacking contextu `main` a retest zatvorenia na mobile aj desktope.
3. Oprava primary/action a subtle kontrastov v oboch motívoch.
4. Scrollovateľné mobilné menu pre nízku výšku/landscape.

### Rýchle zlepšenia s vysokým efektom

1. Zjednotiť pomer lightboxu na 16:10 a presunúť šípky na mobile.
2. Pridať scroll hint ku comparison tabuľke.
3. Opraviť focus ring FAQ a H1 → H2 → H3 osnovu.
4. Lokalizovať a vysvetliť OPM; zväčšiť ikonové touch targety na 44 px.

### Väčšie dizajnové úpravy

1. Changelog s indexom, filtrom a zbalenými staršími vydaniami.
2. Jednotný release manifest pre web, súbory, changelog a structured data.
3. Jemne skrátiť mobilný hero a dostať produktový screenshot bližšie k prvému viewportu.

### Voliteľné experimenty

1. Sticky mini CTA na mobile až po odscrollovaní hero.
2. Mobilné porovnanie ako prepínač jedného konkurenta namiesto horizontálnej tabuľky.
3. Krátka 8–12 sekundová ukážka „vyber → posuň → prefarbi“, spúšťaná používateľom a rešpektujúca reduced motion.

## D. Nové nápady

1. **Before/after slider:** čistý CAD výkres verzus Edivect anotácia; okamžite demonštruje hodnotu produktu.
2. **Use-case prepínač:** CAD kontrola, QA nálezy, technická podpora, školenie — každý s vlastným screenshotom a jednou vetou.
3. **Trust strip pri downloade:** „Open source · MIT · bez telemetrie · SHA-256 overené · podpis vydavateľa“.
4. **Jasné release kanály:** samostatná karta „Stable ZIP“ a menšia „Preview/OPM“, každá s verziou, dátumom a formátom.
5. **Kompaktné porovnanie nad foldom:** tri najdôležitejšie výhody proti Snipping Toolu, plná tabuľka až nižšie.
6. **Mini simulátor skratiek:** stlačenie V/A/R/T v sekcii skratiek zvýrazní príslušný nástroj a ukáže mikroanimáciu.
7. **Changelog badge v hero:** „Nové v 0.9.9.84“ s odkazom na konkrétny release, nie iba všeobecný changelog.
8. **Dôkaz súkromia:** krátky technický blok „0 účtov, 0 requestov, 0 telemetrie“ s odkazom na zdrojový kód.
9. **Kontext pri CTA:** pri sekundárnych download možnostiach uviesť `.zip`/`.exe`, veľkosť a stable/preview stav priamo v texte.

## E. Pokrytie a dokumentácia

### Testované stránky

- `/`, `/sk`, `/de`
- `/changelog`, `/sk/changelog`, `/de/changelog`

### Testované viewporty

- 1920 × 1080
- 1366 × 768
- 768 × 1024
- 375 × 812
- 812 × 375 landscape

### Testované stavy

- tmavý a svetlý motív
- desktop a mobilná navigácia, otvorenie/zatvorenie a body scroll lock
- feature selector
- comparison scroll region
- gallery lightbox, next/previous, close, Escape a focus return
- FAQ single-open state
- hover primary CTA
- download ciele a externé odkazy
- EN/SK/DE dĺžky textov a layout
- konzola, obrázky, heading outline, landmarky a touch targety

Formuláre, validácia, tooltipy a dropdowny sa na webe nenachádzajú. Empty stav changelogu existuje v kóde, ale aktuálne dáta ho nespúšťajú. Presný text-only zoom nebol v dostupnom browser surface emulovateľný; reflow bol overený cez zodpovedajúce úzke a nízke viewporty. Vývojový Next.js ovládač v ľavom dolnom rohu bol z hodnotenia vylúčený, pretože v produkčnom exporte nebude.

### Kľúčové screenshoty

- [Desktop 1920 — hero](screenshots/01-sk-desktop-1920-top.png)
- [Desktop 1920 — celá stránka](screenshots/02-sk-desktop-1920-full.png)
- [Tablet 768 — hero](screenshots/05-sk-tablet-768-top.png)
- [Mobil 375 — hero](screenshots/07-sk-mobile-375-top.png)
- [Mobil 375 — celá stránka](screenshots/10-sk-mobile-375-full.png)
- [Svetlý motív](screenshots/15-sk-mobile-light-theme.png)
- [Changelog desktop](screenshots/16-sk-changelog-1366-top.png)
- [Changelog mobil](screenshots/18-sk-changelog-mobile-375.png)
- [Nemecká lokalizácia mobil](screenshots/19-de-mobile-375-top.png)
