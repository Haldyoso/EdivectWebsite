# Edivect — stav po opravách vizuálneho a UX auditu

Dátum retestu: 22. 8. 2026  
Rozsah: `/`, `/sk`, `/de`, všetky tri changelog route, tmavý a svetlý motív

## Výsledok

Všetkých 16 nálezov z pôvodného auditu je opravených. Odhad pripravenosti sa po
reteste posunul z **6,9/10 na 9,1/10**. Zostávajú iba voliteľné produktové
experimenty z časti D auditu, nie známe launch-blockery.

## Stav nálezov

| ID | Stav | Implementovaná oprava a overenie |
|---|---|---|
| VUX-01 | Opravené | Primárny download je overený portable ZIP `0.9.9.86` (70 131 075 B / 66,9 MB), SHA-256 `F57D…BFCC3`; lokálny HTTP retest vrátil 200 a `application/zip`. OPM je samostatne označená skúšobná `0.9.9.84` s dátumom platnosti. Neexistujúce docs/licence odkazy boli odstránené, GitHub a Issues smerujú na verejný webový repozitár. Changelog transparentne vysvetľuje rozdiel medzi buildom a poslednými detailnými poznámkami. |
| VUX-02 | Opravené | Lightbox sa renderuje portálom do `document.body`, stránka pod ním je `inert`, modal má `z-index: 400` nad headerom `100`. Close tlačidlo je reálne vrchný prvok v bode kliku; Escape, backdrop, focus trap a návrat focusu fungujú. |
| VUX-03 | Opravené | Oddelené action tokeny `#246FE5 / #1E63D6 / #1A50AE`; dark subtle `#7E8698`; light subtle `#636C7D`; light accent `#1E63D6`. Namerané minimum relevantných kombinácií je 4,67:1, primary CTA 4,69:1 a hover 5,51:1. |
| VUX-04 | Opravené | Drawer používa `max-height: calc(100dvh - 4rem)`, `overflow-y:auto`, `overscroll-behavior:contain` a short-height padding. Pri 812 × 375 končí menu na y=375, CTA na y=371 a obsah sa dá posúvať. |
| VUX-05 | Opravené | Lightbox používa 16:10 a `object-contain`; 1000 × 625 snímka sa neorezáva. Na mobile sú obe 48 px šípky pod obrázkom. |
| VUX-06 | Opravené | Nad 326 px scroll regiónom je lokalizovaný hint s obojsmernou šípkou; tabuľka 780 px zostala fokusovateľná klávesnicou. |
| VUX-07 | Opravené | Všetkých 20 vydaní je v natívnych `<details>`; otvorené je iba najnovšie. Mobilná výška klesla z 25 766 px na 5 059 px, ďalšie karty majú zbalenú výšku približne 68 px. |
| VUX-08 | Opravené | FAQ trigger má vnútorný 2 px focus ring, ktorý `overflow-hidden` neoreže. Browser potvrdil celý inset `box-shadow`. |
| VUX-09 | Opravené | Benefit sekcia má skrytý H2 a `aria-labelledby`; osnova začína H1 → H2 → H3. |
| VUX-10 | Opravené | Theme toggle, menu, ikonové tlačidlá a jazykové voľby majú minimálne 44 × 44 px; footer odkazy majú minimálnu výšku 44 px. |
| VUX-11 | Opravené | Anglické nevysvetlené „Download OPM“ zmizlo z hero. V download paneli je kanál lokalizovaný v EN/SK/DE, pomenovaný ako skúšobná verzia a uvádza verziu aj platnosť. |
| VUX-12 | Opravené | Mobile hero má `pt:118px`, 36 px H1, kratší produktový text, dve CTA a tri prioritné chipy. Pri 375 × 812 začína produktový obrázok na y=699 v SK a y=771 v DE. |
| VUX-13 | Opravené | Header logo má jedno explicitné kontextové meno: „späť nahor“ na landing page a „úvodná stránka“ na changelogu. |
| VUX-14 | Opravené | `Screenshot` má runtime `onError` fallback na existujúci hatch placeholder a lightbox používa `contain`. Aktuálne obrázky majú nulový počet load failures. |
| VUX-15 | Opravené | H1, popis a CTA sa už nerevealujú; ostatné revealy trvajú 350 ms so 40 ms krokom. Reduced-motion podpora zostala zachovaná. |
| VUX-16 | Opravené | `<html>` nesie `data-scroll-behavior="smooth"`; čistý browser run nemá konzolové warningy ani errors. |

## Regresné pokrytie

- Viewporty: 375 × 812, 768 × 1024, 1366 × 768, 1920 × 1080 a landscape 812 × 375.
- EN/SK/DE: bez globálneho horizontálneho overflowu a bez `href="#"`.
- Interakcie: mobilné menu, lightbox close/backdrop/šípky/Escape/focus return,
  comparison scroll, FAQ focus a changelog details.
- Release: ZIP aj OPM odpovedajú HTTP 200; ZIP hash po skopírovaní zhodný so
  zdrojovým reproducible buildom.
- Statické kontroly: `npm run lint`, `npm run typecheck` a `npm run build` prešli.
  OG generátor používa lokálne Noto Sans s Latin Extended a pred zápisom overuje
  polohu loga aj nadpisu priamo v pixeloch. Čistý offline build bez warningov
  exportoval 15 app stránok a skopíroval tri validované lokalizované OG PNG.

## After screenshoty

- [Mobilný hero SK](after/01-sk-mobile-375-hero-after.png)
- [Landscape menu](after/02-sk-landscape-menu-after.png)
- [Mobilný lightbox](after/03-sk-mobile-lightbox-after.png)
- [Mobilné porovnanie](after/04-sk-mobile-comparison-after.png)
- [FAQ focus](after/05-sk-mobile-faq-focus-after.png)
- [Svetlý motív](after/06-sk-mobile-light-after.png)
- [Download panel](after/07-sk-mobile-download-after.png)
- [Mobilný changelog](after/08-sk-mobile-changelog-after.png)
- [Tablet 768](after/09-sk-tablet-768-after.png)
- [Notebook 1366](after/10-sk-laptop-1366-after.png)
- [Mobilný hero DE](after/11-de-mobile-375-after.png)
- [Desktop 1920](after/12-sk-desktop-1920-after.png)
- [OG karty EN/SK/DE](after/25-og-contact-sheet.jpg)
