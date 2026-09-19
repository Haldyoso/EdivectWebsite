# Edivect Website – pracovné pravidlá

## Efektívna aktualizácia verejného EXE

Tieto pravidlá platia, keď používateľ dodá hotový verzovaný súbor
`Edivect-v0.9.9.x.exe` a požiada o jeho aktualizáciu na webstránke.

1. Pred začiatkom načítaj aktuálne 5-hodinové a týždenné využitie Codexu, aby sa
   dala po dokončení vypočítať spotreba operácie.
2. Over, že dodaný EXE existuje. Zisti jeho presnú veľkosť a SHA-256. Aplikáciu
   nespúšťaj, neovládaj cez PC a nevytváraj vizuálne náhľady.
3. Skontroluj stav repozitára a zachovaj všetky nesúvisiace lokálne zmeny.
4. Nahraď predchádzajúci EXE v `public/downloads/`, aktualizuj názov súboru,
   verziu, veľkosť a SHA-256 v `lib/site.ts` a verziu v `README.md`.
5. Pri čistej výmene release súboru spusti lokálne iba `npm run verify:release`.
   Nespúšťaj lokálne lint, typecheck, produkčný build, kontrolu odkazov ani
   Playwright testy, pretože ich po pushnutí vykonáva workflow GitHub Actions.
6. Širšie lokálne kontroly spusti iba vtedy, keď sa menil aj zdrojový kód alebo
   konfigurácia webu, keď `verify:release` zlyhá, alebo keď zlyhá CI.
7. Commitni iba súbory patriace k aktualizácii a pushni vetvu `main`. Tento web
   používa GitHub Pages; nasadenie sa spúšťa workflowom po pushnutí. Nepoužívaj
   OpenAI Sites ani nevytváraj iný hostingový projekt.
8. Stav nasadenia kontroluj v intervaloch 30 až 60 sekúnd. Nepolluj ho častejšie.
9. Po úspešnom nasadení načítaj verejnú stránku cez HTTP, skontroluj zobrazenú
   verziu a odkaz, stiahni verejný EXE do jednoznačne pomenovaného dočasného
   súboru a porovnaj presnú veľkosť a SHA-256. Dočasný súbor potom odstráň.
10. Na konci znovu načítaj využitie Codexu a oznám používateľovi rozdiel oproti
    počiatočnému stavu spolu s výsledkom nasadenia.

Pri tejto čistej webovej aktualizácii nevytváraj nový build aplikácie Edivect a
nezvyšuj jej verziu. Použi presne EXE dodaný používateľom. Changelog synchronizuj
iba vtedy, keď o to používateľ požiada alebo keď sú pre danú verziu pripravené
nové release notes.
