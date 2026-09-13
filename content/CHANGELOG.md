# Changelog

## 0.9.9.130 – 2026-09-13

- Panel zostáva pri presúvaní celý v pracovnej ploche monitora, takže sa už nedá nechtiac odtiahnuť mimo obrazovky.
- Magnetické prichytenie panela k okrajom má užšiu a presnejšiu zónu; panel sa neprichytáva priskoro.
- Vylepšené je presúvanie malého panela aj rozbaľovanie nastavení vzhľadu, vrátane správneho zachytenia myši počas ťahania.

## 0.9.9.127 – 2026-09-12

- Malý panel možno presúvať potiahnutím za logo alebo názov; kliknutie naďalej spúšťa kreslenie. Pridaný úchyt, zatváranie zostáva samostatné.
- Licenčný štítok sa v malom paneli nezobrazuje. Rozbalený panel používa krátke označenie Personal alebo Trial.
- Úvodný výber režimu je stručnejší; plné licenčné podmienky sa dajú rozbaliť.

## 0.9.9.126 – 2026-09-12

- Jedna aplikácia s režimami Personal (bez expirácie, osobné nekomerčné použitie) a Commercial Trial (30 dní od prvého začatia).
- Výber a potvrdenie licencie pri prvom spustení; klikateľné označenie v paneli, bez watermarkov v exporte.
- Po vypršaní trialu zostáva otvorenie, uloženie a export existujúcej práce. Prepnutie na Personal nemení pôvodný začiatok trialu.
- Lokálny stav licencie je oddelený od priečinka s portable EXE; aktualizácia ho neresetuje.

## 0.9.9.116 – 2026-09-11

**ScreenMark sa mení na Edivect.**

- Aplikácia, EXE, projekt, assembly, namespace, okná, preklady, dokumentácia a buildy teraz
  používajú značku **Edivect**.
- Neportable nastavenia sa pri prvom spustení automaticky prevezmú zo starého profilu;
  portable nastavenia a existujúce projekty `*.smpj` zostávajú kompatibilné.
- Stará a nová verzia zdieľajú ochranu jednej inštancie, aby sa dve prekrytia nemohli
  spustiť naraz počas prechodu.

## 0.9.9.61 – 2026-08-10

**Kóta sa dá odtiahnuť nabok ako v Catii, oblasť exportu má vlastné tlačidlá a pečiatky si
pamätajú veľkosť.**

- **Kóta má odsadenie a voľne pohyblivú hodnotu.** Merané body zostávajú tam, kde sú – hýbe sa
  kótovacia čiara: **štvorček v jej strede** ju ťahá kolmo preč (Shift = po 10 px) a k obom
  meraným bodom vedú **čiarkované vynášacie čiary**. **Žltá bodka** posunie samotné číslo
  kamkoľvek. Bez toho sa hustý screenshot okótovať nedal – kóta ležala na tom, čo merala.
- **Kóta sa kladie v troch krokoch, ako v Catii V5.** Klik, klik, potom ju odtiahneš a tretí klik
  ju položí. Ťah jedným pohybom funguje ďalej, len namiesto potvrdenia odovzdá do kroku
  odsadenia.
- **Merané body sa chytajú magnetom** na konce, rohy a stredy nakreslených objektov – rovnakým,
  aký má čiara aj kalibrácia, aj so zelenou CAD značkou už pri prechode myšou. (Magnet pozná len
  **anotácie**; appka obraz pod sebou neanalyzuje, takže na holej snímke bod pristane tam, kde
  klikneš.)
- Pravý klik na kótu ponúka **Zrušiť odsadenie** a **Hodnotu na stred** – cestu späť z ťahu, ktorý
  sa nevydaril, bez odvolávania celej kóty. Staré projekty sa načítajú presne ako predtým: bez
  odsadenia, s hodnotou na strede.
- **Oblasť exportu má pri pravom dolnom rohu dve ikonky: schránka a uloženie PNG.** Doteraz sa
  hotový výrez dal použiť len cez menu Export ▾ na paneli – teda na opačnom konci obrazovky, než
  kde bola ruka. Ikonky sú vidieť **len s aktívnym nástrojom Q**, takže pri kreslení nezavadzajú
  ani nezhltnú klik; pri nabehnutí myšou sa rozsvietia a povedia, čo urobia. Kreslia sa do plátna,
  nie do obrázka, takže sa do exportu nikdy nedostanú.
- **Pečiatky (✓ ✗ OK NOK) po položení vracajú plátno do Výberu** – pečiatka sa kladie od oka na
  niečo, čo už na obrazovke je, a opravný klik doteraz položil druhú namiesto toho, aby chytil
  prvú. **Sériu urobíš dvojklikom na tlačidlo**, ako pri každom inom nástroji.
- **Veľkosť pečiatky sa pamätá.** Raz ju vytiahneš ťahom a ďalšie idú rovnako veľké – všetky
  štyri typy zdieľajú jednu veľkosť. Platí **do vypnutia appky**: po reštarte je za veľkosť opäť
  zodpovedný číselník hrúbky (a jeho otočenie ju prevezme aj počas behu, inak by vyzeral mŕtvo).
- **Freeze a Zmazať všetko sú v skupine AKCIE vedľa seba**, v druhom riadku. Používajú sa
  striedavo – zmraz obrazovku, okomentuj, zmaž, zmraz ďalšiu – a boli od seba cez celý riadok.
  Poradie je zvolené tak, aby dvojica držala spolu aj keď sa panel na nízkej obrazovke preskladá
  na štyri stĺpce.
- **Toast „Snímka uložená" žije 6,5 s namiesto 3,2 a nad kurzorom sa zastaví.** Je to cieľ, na
  ktorý sa kliká (otvorí Prieskumníka na súbore), nielen oznam – a nedalo sa naň stihnúť dôjsť.
  Obyčajné potvrdenia („Skopírované do schránky") majú kratší čas ďalej.
- Testy: 470 (+29).

## 0.9.9.57 – 2026-08-05

**Rádius sa dá zaobliť aj proti už nakreslenému oblúku, nielen medzi dvoma čiarami.**

- **Fillet berie čiaru aj oblúk – v ľubovoľnej kombinácii.** Doteraz vedel len dve rovné čiary,
  čo je presne o jeden krok menej, než treba: hneď ako zaoblíš prvý roh, ďalší roh je **čiara
  proti rádiusu** a nástroj stíchol. Po novom sa dá klikať čiara+oblúk, oblúk+čiara aj
  **oblúk+oblúk**.
- **Skrátenie funguje aj na oblúku.** Orezaný oblúk zostáva na svojej vlastnej kružnici – posunie
  sa len jeho koniec. Rádius, ktorý si nakreslil, je tvoj; zaoblenie ho nemá prečo meniť.
- **Napojenie je hladké, nielen dotýkajúce sa.** Oblúk odchádza z čiary kolmo na svoj polomer a
  z oblúka po spojnici stredov – to je definícia dotyku dvoch kružníc. Bez toho by z toho bol
  zub, nie zaoblený roh.
- **Ťahanie rádiusu má po novom aj spodnú hranicu.** Medzi dvoma čiarami je legálny každý polomer
  až po nulu; s oblúkom v hre to prestáva platiť – malá kružnica sa dvoch vzdialených prvkov
  jednoducho nedotkne. Tak sa ťahanie obmedzuje na **pásmo, ktoré naozaj sedí**, a nie na
  `[1, max]`, kde by väčšina dráhy nekreslila nič.
- **Ktorý roh a ktorá strana:** rozhoduje to, kam si klikol. Pri oblúku má zmysel obojstranne –
  prekrížená čiara a oblúk majú rohy na oboch stranách priesečníka a klik hovorí, ktorý z nich
  chceš a čo z oboch prvkov má zostať.
- **Náhľad ukazuje aj oblúkové odrezky** červenou prerušovanou – to, čo *zmizne*, je pri zaoblení
  vždy prekvapivejšie než to, čo pribudne.
- Dve rovné čiary idú ďalej starým, odladeným kódom (`Fillet`); nová matematika (`FilletCurve`)
  sa zapína až vtedy, keď je v hre kružnica. Testy to strážia porovnaním oboch ciest.
- **Opravený `Edivect.csproj`** – bol commitnutý s konfliktnými značkami `<<<<<<< / >>>>>>>`
  a projekt sa nedal zostaviť.
- Testy: 441 (+17).

## 0.9.9.56 – 2026-08-04

**Esc už appku nezbalí v žiadnom stave.**

- **Esc pri Výbere s prázdnym výberom nerobí nič.** Doteraz práve tam spadol do režimu Kurzor –
  a to je jediné miesto, odkiaľ sa tam dalo spadnúť. Čiže Esc appku nezbalí už nikdy.
- Prečo práve tam: je to priečka, na ktorú sa ruka dostane **hneď po tom**, ako Esc zhodil
  nechcený výber. Jedno stlačenie zo zvyku navyše – a zmiznú anotácie aj panel. Cena za omyl
  bola celý pohľad na výkres, zisk bol jeden ušetrený klik.
- **Rebríček je teda: rozkreslené → nástroj → výber → nič.**
- Von z kreslenia vedie tá istá cesta ako predtým: **tlačidlo « na paneli**, ktoré je vidieť,
  je popísané a nedá sa trafiť omylom. (`Ctrl+Alt+C` funguje ďalej, ale odpoveď je tlačidlo.)
  Prepnutie na inú appku vypadne z kreslenia samo, ako doteraz.
- Celý rebríček je vytiahnutý do `EscapeLadder` a doložený testami vrátane preletu cez **všetky**
  kombinácie nástroja, rozkresleného ťahu, písania textu a výberu – aby sa priečka „odíď
  z kreslenia" nedala vrátiť späť nepozorovane.
- Testy: 424 (+8).

## 0.9.9.54 – 2026-08-03

**Esc vracia Výber, nie malé okno. A snímky prežijú novú verziu.**

- **`Esc` po novom položí nástroj a vráti Výber** – tak, ako to robí CAD tridsať rokov. Doteraz
  padol rovno do režimu Kurzor: appka sa zbalila do pilulky a anotácie zmizli. To je ťažká
  odpoveď na „tento nástroj nie, ďakujem" a stáli ju dva ďalšie úkony späť.
- **Poradie krokov je od najlacnejšieho po najdrahší**: zruš rozkreslené a polož nástroj →
  odvyber → Kurzor. Položiť nástroj je to, po čom ruka siaha naslepo a často, takže dostáva prvý
  stlač; odísť z kreslenia je zriedkavejšie a druhý stlač si dovolí. Cesta VON z kreslenia nesmie
  viesť cez akord, ktorý si nikto nepamätá – a `Ctrl+Alt+C` presne taký akord je.
- **Rozkreslená čiara odchádza spolu s nástrojom.** Jedno `Esc` = koniec príkazu, nie „zruš ťah,
  ale ostaň nabitý". Zamknutý nástroj (dvojklik) sa tým istým stlačením odomkne – zámok znamená
  „kresli ďalej, kým nepoviem inak", a toto je to *inak*.
- **Výnimka, ktorá zostáva:** `Esc` počas písania textu ruší editor a nič viac. Písanie je vlastný
  režim a rozpísaný popis sa nesmie stratiť pri pokuse zavrieť nástroj.

- **Všetky výstupy idú do `Dokumenty\Edivect\Captures\`** – snímky, GIF, MP4 aj CSV
  s pripomienkami. Doteraz to bol priečinok `Captures` **vedľa EXE**, a to je pre prenositeľnú
  appku presne opačne, než treba: EXE sa sťahuje, kopíruje a maže. Každá nová verzia sa rozbalila
  inam, galéria začala prázdna a predošlé snímky ostali v priečinku, ktorý sa vzápätí zmazal –
  appka ticho zahodila cudziu prácu ako cenu za aktualizáciu.
- **Dokumenty sa navyše zálohujú samy** (OneDrive Known Folder Move), takže médiá prežijú nielen
  novú verziu, ale aj počítač. Nikto to nemusí nastaviť.
- **Ak sa do Dokumentov zapísať nedá** (presmerovaný profil mimo siete), použije sa `Captures\`
  vedľa EXE ako predtým. Stratiť export kvôli nedostupnému zálohovaciemu priečinku by bola horšia
  porucha než tá, ktorú tento priečinok rieši.
- **„Uložiť ako…" otvára ten istý priečinok** (kým si používateľ nevyberie iný), nie Obrázky –
  dialóg má začínať medzi výstupmi tejto relácie, nie v priečinku, ktorý Edivect nikdy nepoužil.
- Nastavenia a šablóny zostávajú vedľa EXE. Prenositeľnosť znamená „zmaž jeden priečinok a je po
  ňom" a to platí ďalej – len sa to už netýka vyrobených snímok.
- Testy: 416 (+9).

## 0.9.9.53 – 2026-08-01

**Ctrl+Shift+P: napíš pár písmen a príkaz sa spustí.**

- **Paleta príkazov.** Dvadsaťdva nástrojov a päťdesiat príkazov je za hranicou, kde sa panel dá
  ešte prehliadnuť očami, a delenie kompakt/rozšírený ten problém len presúva. Palety si
  začiatočník nikdy nevšimne – nestlačí ju – a ten, kto vie, čo chce, prestane hľadať tlačidlá.
- **Každý riadok ukazuje vpravo svoju skratku.** To je druhý dôvod, prečo existuje: používaním
  palety sa klávesy učíš. Kto si štyrikrát vyklikne „Zoskupiť", štyrikrát prečíta „Ctrl+G" –
  a piatykrát už paletu nepotrebuje.
- **Diakritika sa ignoruje na oboch stranách**, takže „obdlznik" nájde „Obdĺžnik". Do vyhľadávacieho
  poľa nikto nepíše dĺžne, a paleta, ktorá na nich trvá, je pomalšia než tlačidlo, ktoré nahrádza.
- **Funguje aj anglické id** („rectangle", „layers"). Id sa nikdy nemenia, takže sú cestou dnu aj
  pre toho, kto appku beží v jazyku, v ktorom nerozmýšľa.
- Enter spustí, šípky vyberajú, Esc zavrie. Klik mimo paletu ju tiež zavrie – a pred spustením
  príkazu sa schová, aby nesadla do screenshotu, ktorý si práve vyžiadala.
- **Radenie je čistá funkcia mimo UI** (`CommandSearch`), lebo to je jediná časť palety, ktorá sa
  dá pokaziť ticho: hľadaný príkaz v zozname **je**, len tretí – a to nikto nenahlási ako chybu.
  Deväť testov drží rebríček: celý názov → začiatok názvu → začiatok slova → kdekoľvek v názve →
  id → písmená v poradí, ale rozhádzané.
- Testy: 407 (+15).

## 0.9.9.52 – 2026-08-01

**Space zopakuje posledný príkaz. A ktorúkoľvek skratku si prepíšeš.**

- **Space zopakuje posledný príkaz** – ako v CAD-e tridsať rokov. Sadne to tu obzvlášť dobre,
  lebo kresliaci nástroj sa po jednom objekte vracia do Výberu: nakresli obdĺžnik, Space,
  kresli ďalší. Trikrát Ctrl+Z sa dá rovnako odklepať trikrát Space.
- **Nastavenia ▸ Nastaviť klávesové skratky** – všetkých 49 príkazov, každý s klávesou, ktorú
  si môžeš prepísať. Backspace skratku odoberie, Esc zmenu zruší.
- **Prepísanie klávesu ho ZOBERIE tomu, kto ho mal.** Odmietnuť zmenu a poslať človeka hľadať,
  ktorý zo štyridsiatich príkazov ten kláves drží, je horšie. Ten, čo o skratku prišiel, je
  menovaný v riadku pod zoznamom – nič nestíchne bez slova.
- **Ukladá sa len rozdiel oproti pôvodnému.** Keby sa ukladal aj nezmenený default, zamrzol by:
  kláves, ktorý v budúcej verzii presuniem, by sa nepohol nikomu, kto raz to okno otvoril.
  „Obnoviť pôvodné" hodí všetko späť.
- **Prepísaný príkaz stráca aj svoje tiché aliasy.** Backspace maže preto, že maže Delete – keby
  Delete odišiel inam a Backspace mazal ďalej, je to pozostatok, ktorý nikto nevysvetlí.
- Klávesnica po novom hľadá **najprv skutočné väzby a až potom aliasy**, v dvoch prechodoch.
  Predtým o tom rozhodovalo poradie v zozname.
- Nové okno je v zozname „chrome nad plátnom" (`App.RestoreChromeOnTop`), takže po prvom
  screenshote nezapadne za canvas – presne to sa kedysi stalo lište nahrávania.
- Testy: 392 (+14).

## 0.9.9.51 – 2026-08-01

**Príkazy sú deklarované na jednom mieste. Zvonku sa nič nemení – okrem jedného riadku v F1.**

- **Nový `CommandRegistry`: 47 príkazov, každý s vlastným id, názvom, klávesou a obsluhou.**
  Doteraz bola akcia deklarovaná až na štyroch miestach nezávisle – obsluha tlačidla v paneli,
  `case` v klávesovom `switch`e, položka v kontextovom menu a ručne písaný riadok v F1 – a nič
  nekontrolovalo, že sedia. Driftovali presne tým smerom, aký sa dá čakať: kód fungoval ďalej
  a dokumentácia prestala.
- **Klávesnica číta väzby z registra.** Dva `switch`e v `OverlayWindow` (44 riadkov) sú preč.
- **38 tlačidiel panela volá príkaz cez id**, nie vlastnú kópiu akcie.
- **Príkaz sa spúšťa jedinou cestou** – `CommandRegistry.Invoke`. To je to, na čom stojí ďalší
  krok: „zopakuj posledný príkaz" musí vidieť **každé** spustenie, nie väčšinu.
- **F1 sa negeneruje – a je to zámer.** Väčšina jeho riadkov nie sú príkazy („Shift pri ťahaní",
  „Alt pri otáčaní") a tie, ktoré nimi sú, nesú vysvetlenia, aké názov príkazu nikdy neunesie.
  Generovanie by vymenilo text, ktorý učí, za tabuľku, ktorá vypisuje. Namiesto toho **test
  žiada, aby každá skratka, ktorá funguje, bola v F1 napísaná**.
- Ten test hneď našiel dieru: **F1 bola jediná skratka, ktorú pomocník nespomínal**. Appka teda
  nikde nepovedala, ako pomocníka otvoriť. Riadok pribudol.
- **Ctrl+Shift+&lt;písmeno&gt; už nespúšťa obyčajný Ctrl príkaz.** Starý kód mal jeden `switch` pre
  Ctrl aj Ctrl+Shift a na Shift sa pozeral len pri Z a G – takže Ctrl+Shift+S ticho znamenalo
  Uložiť. Nikde to nebolo zdokumentované a je to skôr pasca než funkcia. Ctrl+Shift+Z (znova)
  a Ctrl+Shift+G (zrušiť zoskupenie) fungujú ďalej.
- Testy: 378 (+51). Medzi nimi **44 prípadov parity klávesnice** – väzby prepísané ručne zo
  starého `switch`u, aby sa dokázalo, že presun nič nestratil ani nepridal.

## 0.9.9.50 – 2026-08-01

**Panel hovorí, čo nástroj ešte vie. A tlačidlo s pravým klikom to už neskrýva.**

- **Pod mriežkou nástrojov je riadok s modifikátormi aktívneho nástroja.** Obdĺžnik povie
  „Shift = štvorec · Ctrl = výplň · koliesko = rohy", čiara povie „Shift = 5° · Alt = bez
  magnetov · číslice = dĺžka". Nič z toho nie je nové – všetko to platilo aj doteraz a stálo
  v F1. Lenže F1 je desať sekcií referencie, ktoré nikto nečíta skôr, než ich potrebuje, a
  bublina sa ukáže len nad tlačidlom, ktoré už človek chce stlačiť. Ani jedno nikdy **nepovie**,
  že Ctrl vyplní obdĺžnik.
- **Pri prepnutí nástroja klávesou to bliskne aj pri kurzore**, na 2,5 sekundy. Len pri klávese:
  keď sa nástroj vyberá myšou, kurzor je nad panelom – nad iným oknom – takže poloha na plátne
  je stará a nápoveda by vyskočila kdesi inde.
- Vypnúť sa dá v Nastaveniach ▸ **Nápoveda k nástroju**.
- **Dve tlačidlá s pravým klikom nemali značku ▾.** Mierka preto, že jej roh už zaberá štítok
  px/mm – teraz sedia vedľa seba. A **Otvoriť ▸ nedávne** preto, že jeho menu sa pripája
  v kóde, takže v XAML nič nenaznačovalo, že ho má.
- **Obe pravidlá odteraz drží test, nie disciplína.** `ToolbarAffordanceTests` číta XAML **aj**
  drôtovanie z kódu a žiada značku od každého tlačidla s pravým klikom – aj naopak, značku bez
  menu zamietne. `ToolHintsTests` každú nápovedu vysádže panelovým fontom a spadne, keď sa
  zalomí na tretí riadok.
- Ten druhý test si hneď odpracoval svoje: napísaný ako počet znakov prechádzal, kým sa
  **štrnásť prekladov** lámalo na tri riadky. „Umschalt" a „5°" sú rovnako štyri znaky a ani
  zďaleka nie rovnako široké. Preklady sú skrátené, pruh ostal dvojriadkový.

## 0.9.9.49 – 2026-08-01

**Šraf sa kreslí farbou čiar objektu. Panel nahrávania drží magnet aj po prepnutí.**

- **Šrafovanie je vzor čiar, tak sa kreslí farbou čiar** – a nepotrebuje výplň, aby bolo vidno.
  Doteraz bralo farbu výplne, čo malo dva následky: zapnutie šrafu na tvare bez výplne nenakreslilo
  **nič**, a keď sa potom zmenila farba obrysu, šraf ostal v starej – farba sa skopírovala raz,
  vo chvíli zapnutia šrafu. Teraz ide s obrysom stále.
- Zapnutie šrafu už **nenastavuje výplň**, lebo nemusí. Výplňová farba naďalej platí, keď je šraf
  vypnutý.
- Striedanie smeru šrafu sa riadi **farbou obrysu** – tou istou, ktorou sa šraf kreslí.
- **Panel nahrávania si dokovanie kontroluje sám, štyrikrát za sekundu.** Prepnutie z nastavení na
  ovládanie počas nahrávania mení veľkosť okna, a pozícia počítaná v tej chvíli vychádzala z
  rozmeru, aký layout práve mal – úzky pruh so sekundami tak vedel sadnúť mimo a už tam ostať.
  Magnet teraz drží bez ohľadu na príčinu: zmena tváre panela, zbalenie panela nástrojov, zmena DPI.

## 0.9.9.48 – 2026-08-01

**Build si dvíha verziu sám. Šrafovanie strieda smer podľa farby.**

- **Každý build dostane vlastné číslo.** `build-portable.ps1` zdvihne verziu ešte pred
  zostavením, takže súbor na cudzom stole sa vždy dá spätne priradiť k tomu, čo ho vyrobilo.
  Hýbe sa **iba štvrtý segment** – 0.9.9 je rozhodnutie, nie vedľajší efekt spusteného skriptu,
  a skript sa k 1.0.0 nedostane. Ak verzia v csproj nie je v tvare `a.b.c.d`, build to povie a
  skončí, namiesto aby hádal. `-NoBump` zostaví to, čo v csproj práve je.
- **Šrafovanie nového tvaru sa otočí, keď má inú farbu.** Presne ako v reze: susedné diely majú
  šraf opačným smerom, aby bolo vidno, kde jeden končí a druhý začína.
- **Rovnaká farba drží rovnaký smer**, nech je kdekoľvek na výkrese. Čiže červená → modrá →
  červená vyjde `/`, `\`, `/` – nie `/`, `\`, `/` náhodou, ale preto, že tretí tvar sa pripojí
  k svojmu dielu, nie k poslednému nakreslenému.
- **Otáčajú sa len tie dva diagonálne vzory.** Kríž, vodorovné, zvislé a bodky znamenajú
  *materiál*, nie suseda – otočiť ich by povedalo niečo, čo kresliaci nemyslel.
- Priehľadnosť diel nemení: tá istá červená na 60 % je stále ten istý diel.

## 0.9.9.47 – 2026-08-01

**Radius naozaj štartuje na zaoblení rohu. A panel nahrávania sadá pod Freeze.**

- **Oprava: čerstvá inštalácia štartovala na oblúku 3 bodmi, nie na zaoblení rohu.** Predvoľba
  v kóde bola správna od 0.9.9.36, ale prepisovalo ju načítanie nastavení: kľúč pre staré
  dvojstavové poradie klikov mal **vlastnú predvolenú hodnotu**, takže „žiadny súbor nastavení"
  vyzeral presne ako „starý súbor, ktorý si pýta oblúk 3 bodmi". Kľúč je teraz **nullable** –
  prázdno znamená, že niet čo ctiť, a platí aktuálna predvoľba.
- **Prečo to bolo vidieť pri každom builde:** `build-portable.ps1` priečinok `dist\Edivect`
  pred každým zostavením zmaže, a keďže appka je prenosná, zmizne s ním aj `settings.json`.
  Každý spustený build bol teda čerstvá inštalácia – a každý začínal na nesprávnom režime.
  To isté by dostal každý kolega z rozbaleného ZIP-u.
- **Panel nahrávania sa prichytáva pod tlačidlo Freeze**, nie k hornej hrane panela nástrojov.
  Nahrávanie patrí k tej istej skupine vecí ako zmrazenie obrazovky, tak začína tam, kde tá
  skupina – a panel tým ostáva mimo radu nástrojov nad ňou.

## 0.9.9.46 – 2026-08-01

**Panel nahrávania sa drží hlavného panela a dá sa ťahať.**

- **Prichytený k panelu nástrojov** – sadne si tesne vedľa neho, hornými hranami zarovno, a
  **ide s ním**, keď ho presuniete. Nesleduje sa časovačom, ale priamo pohybom panela, takže
  nezaostáva. Ak sa vpravo nezmestí, preklopí sa vľavo.
- **Dá sa ťahať za ktorékoľvek miesto panela** (kurzor sa zmení na štvorsmerný). Tlačidlá si
  svoj klik nechávajú, takže ťahanie sa nespustí omylom.
- **Magnet funguje v oboch smeroch:** potiahnutím preč sa odpojí a ostane, kde ho pustíte;
  pustením blízko panela nástrojov sa naň znova prichytí a zarovná.
- **Ťahá sa vo fyzických pixeloch**, nie cez `DragMove`. Okno sa zámerne neaktivuje (aby otvorenie
  rekordéra neukradlo fokus tomu, čo sa ide nahrávať), a `DragMove` ide cez `SC_MOVE`, ktorý
  aktivovateľné okno očakáva. Fyzické pixely sú zároveň jediná verzia, ktorá sedí pri ťahaní na
  druhý monitor s iným škálovaním.
- **Vždy sa dotiahne na obrazovku** toho monitora, na ktorom skončil – cez tú istú cestu, akú
  používajú ostatné panely.

## 0.9.9.45 – 2026-08-01

**Oprava: nahrávanie aplikácie natáčalo to, čo bolo pred ňou.**

- **Príčina.** Nahrávanie okna kopírovalo **plochu na súradniciach toho okna**, nie okno samotné.
  Kým bolo okno vzadu, do súboru išlo všetko, čo ho prekrývalo – a začalo „fungovať" až vo chvíli,
  keď ho používateľ vytiahol dopredu. Čiže presne naopak, než na čo je nahrávanie jednej aplikácie.
- **Okno si teraz vykreslí samo seba** (`PrintWindow` s `PW_RENDERFULLCONTENT`), takže na poradí
  okien vôbec nezáleží. Môžete pri tom pokojne robiť čokoľvek iné.
- **Keď to okno nedovolí** – okná kreslené cez GPU vrátia prázdno – nahrávanie sa vráti ku
  kopírovaniu plochy, vytiahne okno dopredu a **povie to**: *„Toto okno sa nedá snímať na pozadí –
  nechaj ho navrchu."* Nikdy sa to nestane potichu.
- Minimalizované alebo práve zaneprázdnené okno **podrží poslednú snímku** namiesto čierneho bliknutia.
- Orezáva sa na **viditeľné** okraje okna, nie na tie s neviditeľným rámom na zmenu veľkosti.

**Overené naostro:** zelené okno prekryté červeným presne cezto – nahralo sa zelené, tri behy
z troch (stredový pixel G=197, R=41). Pred opravou by tam bola červená.

## 0.9.9.44 – 2026-08-01

**Panel nahrávania je úzky, zvislý a stojí vedľa hlavného panela.**

- **Nahrávanie jedného okna.** Tretia možnosť vedľa Monitor a Výrez: vyberieš si z otvorených
  aplikácií a nahráva sa len tá. **Ide s oknom**, keď ho počas nahrávania presunieš – veľkosť
  ostáva tá pôvodná, lebo video s meniacim sa rozmerom nezapíše žiadny enkodér. Berú sa
  **viditeľné** okraje okna (DWM), nie tie s neviditeľným rámom na zmenu veľkosti, inak by po
  stranách bol pruh plochy.
- **Oblasť sa už nerozkliká** – tri tlačidlá ako všetko ostatné. Opakovaný klik na Monitor
  prepína medzi monitormi, Výrez rovno podá myši nástroj na výrez, Okno otvorí zoznam aplikácií.
- **Formát hovorí, čo to je:** MP4 = *video, pri pohybe niekoľkonásobne menšie*;
  GIF = *animovaný obrázok, prehrá sa v Teams*.
- **„Šírka" sa volá „Najväčšia šírka"** a pod ňou je napísané, čo robí: širší výrez sa zmenší,
  užší ostane. Nikdy nezväčšuje.
- **Snímky za sekundu podľa formátu.** MP4: **15 / 24 / 30**, predvolene 30 – 15 vyzerá ako
  prezentácia. GIF ostáva 5 / 10 / 15, lebo GIF ukladá pauzu v stotinách sekundy, takže 24 ani 30
  sa v ňom nedá zapísať presne a súbor by bol aj tak nepoužiteľný.
- **Panel je zvislý pásik (≈200 px) vedľa hlavného panela**, nie blok cez stred obrazovky. Popisy
  sú nad voľbami, nie v stĺpci vedľa nich – tým zmizla šírka, ktorú si vynucoval najdlhší popis.
  Rekordér býva otvorený celú reláciu, takže v strede zakrýval presne to, čo sa malo nahrávať.

## 0.9.9.43 – 2026-08-01

**Nahrávanie má vlastné okno. Otvorí sa pripravené, nie nahrávajúce.**

- **Export ▾ → Nahrávka obrazovky…** otvorí rovno okno rekordéra. Žiadna podponuka s voľbami:
  ponuka je zlé miesto na výber snímkovej frekvencie – vyberáte naslepo, voľbu potom nevidno a na
  zmenu treba trafiť ten istý podpriečinok.
- **Nahrávanie začne až tlačidlom Nahrávať.** Doteraz sa spustilo v okamihu kliknutia v ponuke,
  takže prvé sekundy každej nahrávky bolo, ako si používateľ chystá to, na čo sa ho ponuka práve
  pýtala.
- **Všetko sa nastavuje v tom okne:** oblasť (ktorýkoľvek monitor, označený výrez, alebo
  *Vybrať výrez myšou…* priamo odtiaľ), formát GIF/MP4, šírka, snímky za sekundu, strop veľkosti
  a kurzor myši. Voľby sú vidieť naraz a aktuálna je fakt na obrazovke, nie niečo, čo treba
  rozkliknúť.
- **Po zastavení sa okno vráti na nastavenia**, nezavrie sa – nahrávky sa robia po viacerých.
- Ovládanie počas nahrávania ostáva rovnaké: čas, počet snímok, veľkosť, formát, Pauza, Zastaviť.

## 0.9.9.42 – 2026-08-01

**Kurzor myši v nahrávke a druhý formát: MP4 / H.264.**

- **Kurzor sa dokresľuje do každej snímky.** `CopyFromScreen` kopíruje obsah obrazovky a Windows
  doň kurzor **nedáva** – dokresľuje ho až navrch. Nahrávka teda doteraz nemala ukazovateľ vôbec,
  čo je pri návode „klikni sem" ten jediný údaj, ktorý divák sleduje. Kreslí sa v správnej veľkosti
  aj s hotspotom a mení tvar spolu so systémovým (šípka / ručička / text). Vypnúť sa dá v tej istej
  ponuke. Hotspot sa kešuje na tvar kurzora, nie na snímku – `GetIconInfo` vracia dva GDI bitmapy,
  ktoré treba uvoľniť, a desaťkrát za sekundu by z toho bol únik na celú reláciu.
- **MP4 / H.264 cez Media Foundation** – enkodér Windows, takže **nula MB navyše a nula licencií**.
  Volí sa v ponuke *Nahrávka obrazovky → Formát*. Nameraných **1,7 Mbit/s** pri 640 px, čiže rádovo
  menej než ten istý pohyb v GIF-e; navyše plné farby a zápis rovno na disk, takže nahrávku
  neobmedzuje pamäť.
- **GIF ostáva predvolený.** Ako jediný sa sám prehrá v Teams, Outlooku aj PowerPointe – a nezávisí
  od toho, či daná edícia Windows má mediálne funkcie (edície **N** enkodér H.264 nemajú).
- **Vnútri:** snímacia slučka a formát sú oddelené (`IFrameSink`). GIF chce len to, čo sa zmenilo;
  H.264 chce každú snímku celú, lebo medzisnímkovú kompresiu urobí lepšie než akékoľvek vlastné
  porovnávanie. Slučka sa pýta, nie predpokladá.

**Tri chyby, ktoré to stálo, všetky nájdené a opravené pri overovaní:**
- COM rozhrania sa **neplochujú** cez dedičnosť – `SetSampleTime` skončil na `GetBlobSize` a vrátil
  „chýbajúci atribút", čo posiela hľadať úplne inam. Deklarované sú teraz naplocho.
- **`ReleaseComObject` rozbil pool.** Media Foundation vracia tie isté natívne objekty, a runtime
  potom našiel svoj už uvoľnený obal.
- **Súbor sa dokončuje na snímacom vlákne.** Zapisovač je COM objekt vytvorený na STA vlákne; keď
  to vlákno skončí, runtime jeho obaly zruší – dokončenie odinakiaľ zlyhalo až po tom, čo sa všetky
  snímky v poriadku zakódovali, takže súbor existoval a nedal sa prehrať.

**Overené naostro:** 3 s nahrávka → 25 snímok, 635 kB, Windows súbor prečíta a hlási správnu dĺžku.
Orientácia overená syntetickým vzorom (hore červená, dole modrá) – dekóduje sa presne tak, ako sa
zakódovala, čiže video nie je hore nohami. Kurzor overený porovnaním snímky s ním a bez neho.

## 0.9.9.41 – 2026-07-31

**Nahrávku obmedzuje už len veľkosť.**

- **Časový limit zrušený.** Nestrážil nič, čo by nestrážila veľkosť, a pritom vypínal nahrávky,
  ktoré nestáli takmer nič: snímky sa ukladajú len keď sa niečo zmení, takže nehybná obrazovka
  beží hodinu za pár desiatok kB. Naopak rušná obrazovka na plnej šírke prekročí strop veľkosti
  dávno pred akýmikoľvek hodinami. V jednom prípade zavadzal, v druhom bol zbytočný.
- **Strop veľkosti je jediný a je voliteľný: 100 / 300 / 600 MB** (predvolene 300).
  Existuje preto, že snímky žijú v pamäti až do konca nahrávky – animácia sa skladá až vtedy,
  lebo dĺžku snímky viete až keď príde ďalšia.

**Overené naostro:** pri strope 5 kB sa nahrávanie zastavilo na 12,2 kB s hlásením o veľkosti;
pri veľkom strope bežalo 3 s ďalej bez toho, aby ho čokoľvek zastavilo.

## 0.9.9.40 – 2026-07-31

**Automatický koniec nahrávky teraz naozaj skončí – a dá sa nastaviť.**

- **Oprava: po dosiahnutí limitu pruh ďalej tvrdil, že sa nahráva.** Snímanie sa síce zastavilo,
  ale pruh počítal čas ďalej a Zastaviť bolo treba stlačiť ručne; až potom sa súbor uložil a
  objavila sa správa o limite. Pruh sledoval nesprávnu vec (`Active`, ktoré ostáva nastavené až do
  zápisu súboru) namiesto toho, či snímacie vlákno ešte beží.
- **Hodiny sa zastavia v okamihu, keď snímanie skončí**, nie až keď si niekto všimne. Posledná
  snímka tak trvá presne po koniec nahrávania a nie po kliknutie na Zastaviť.
- **Limit je voliteľný: 30 s / 1 min / 2 min / 5 min.** Doteraz to bol zašednutý riadok s číslom
  60, s ktorým sa nedalo nič robiť – teda presne ten typ ovládača, ktorý klame.
- Limit sa počíta z **nahraného** času: pauza sa doň neráta.

**Overené naostro:** pri limite 2 s sa snímanie zastavilo na 2,10 s nahraného času, ohlásilo
dôvod, hodiny zamrzli a súbor sa uložil (38,7 kB). Rovnako limit veľkosti – zastavil sa na
12,2 kB pri strope 5 kB.

## 0.9.9.39 – 2026-07-31

**Zameriavací kríž už nezaplavuje nahrávku, a pruh nahrávania vyzerá ako zvyšok appky.**

- **Oprava: pohyb myšou kdekoľvek po obrazovke vyrábal snímky.** Zameriavací kríž pod kurzorom
  je **cez celý monitor** – vodorovná aj zvislá čiara. Každý pohyb myšou ním teda prešiel cez
  nahrávanú oblasť, aj keď bol kurzor ďaleko mimo nej, a vznikla nová snímka. Horšie: „ulož len
  to, čo sa zmenilo" prestalo fungovať, lebo zmenená oblasť bola zakaždým **celý obraz**.
- **Počas nahrávania sa kríž nekreslí.** Je to pomôcka na mierenie pre toho, kto kreslí, nie
  obsah pre toho, kto sa na nahrávku pozerá. Odznak nástroja a stavový text pri kurzore ostávajú –
  tie sú malé a idú s kurzorom, takže mimo nahrávanej oblasti nič nešpinia.
- **Tlačidlá Pauza / Pokračovať / Zastaviť prekreslené na návrhový systém appky.** Predtým to boli
  systémové sivé tlačidlá Windows na tmavom pruhu. Teraz používajú zdieľanú šablónu
  (`SecondaryButton`) so správnym prechodom pri prejdení myšou aj stlačení, Zastaviť je v jemnom
  červenom tóne – má byť odlíšiteľné, nie strašiace.
- **Nové ikony ⏸ ▶ ⏹ ako vektory** v zdieľanej knižnici ikon. Znaky `⏸` a `⏹` sú totiž **emoji**;
  Windows ich kreslil zo Segoe UI Emoji, každý vo vlastnom zaoblenom rámčeku, čo na plochom
  tlačidle vyzeralo ako nalepená nálepka.
- **Prehľadnejší pruh:** čas je teraz hlavný údaj (väčší, tučný), počet snímok a MB ustúpili do
  druhotnej farby. Obe hodnoty majú pevnú šírku, takže pruh pri 0:09 → 0:10 neposkakuje.

## 0.9.9.38 – 2026-07-31

**Pruh nahrávania už nezmizne za plátnom a má pauzu.**

- **Oprava: pruh nahrávania sa schoval, len čo si začal kresliť.** Vstup do režimu kreslenia
  vyzdvihne prekryvné okno v pásme „vždy navrchu", a medzi takými oknami vyhráva to, ktoré sa
  presunulo naposledy – pruh teda ostal *za* plátnom. Tlačidlo Zastaviť sa nedalo trafiť a
  nahrávku šlo ukončiť len vyčkaním limitu.
- **Príčina bola v zozname, nie v okne.** Zoznam „udrž tieto okná navrchu" existoval v aplikácii
  **trikrát** – pri aktivácii prekryvného okna, pri prestavbe monitorov a v `RestoreChromeOnTop`.
  Nové okno bolo treba dopísať do všetkých troch, inak sa potopilo. Teraz je zoznam **jeden**
  a druhé dve miesta ho volajú; ďalšie plávajúce okno sa už zabudnúť nedá.
- **Pauza a pokračovanie.** Tlačidlo ⏸ vedľa ⏹. Počas pauzy sa **zastaví aj hodiny**, takže sa
  pauza do GIF-u nepremietne – bez toho by desaťsekundové prerušenie ostalo vo výsledku ako
  desaťsekundové zamrznutie obrazu a nahrávka by si medzitým vyčerpala časový limit.
- Bodka pri pauze prestane blikať a zhasne, v pruhu pribudne slovo *pozastavené* – „nahráva sa
  ešte?" má byť vidno cez celý stôl.

**Overené naostro:** pauza v 815 ms, po 1,5 s čakania stále 815 ms a rovnaký počet snímok;
výsledný GIF sa prehráva 1,73 s (nahraný čas), nie 3,1 s (čas na hodinách).

## 0.9.9.37 – 2026-07-31

**Nahrávanie obrazovky do animovaného GIF-u.**

- **Export ▾ → GIF – nahrávka.** Nahrá označenú **oblasť exportu** (Q), a keď žiadna nie je, celý
  monitor – na viac monitoroch sa vyberá tou istou farebnou legendou ako pri PNG. Beží proti tomu
  malý pruh hore: čas, počet snímok, veľkosť, **Zastaviť**.
- **Nahrá sa aj to, čo práve kreslíš** – anotácie sú súčasťou obrazu. Pruh nahrávania nie:
  je na úrovni OS vylúčený zo snímania (`WDA_EXCLUDEFROMCAPTURE`), rovnako ako farebné rámiky
  monitorov.
- **Prečo GIF a nie MP4.** H.264 by znamenal buď kodek Windows (dobre, ale patentová otázka pri
  každom odovzdaní appky do inej firmy), alebo pribalený enkodér – desiatky MB a licencia, ktorá
  vie siahnuť na celý projekt. GIF má patenty po expirácii od 2004, enkodér je už vo WPF a výsledok
  sa vloží priamo do Teams, Outlooku aj PowerPointu. **Prírastok k veľkosti EXE: nula.**
- **Ukladá sa len to, čo sa hýbe.** Medzi dvoma snímkami sa nájde obdĺžnik, ktorý sa naozaj zmenil,
  a zapíše sa iba ten. Snímka, na ktorej sa nezmenilo nič, sa neuloží vôbec – predchádzajúca len
  ostane dlhšie na obrazovke. To je rozdiel medzi súborom v stovkách KB a v stovkách MB.
- **Šírka nahrávky (predvolene 1000 px) je hlavná páka na veľkosť**, spolu s počtom snímok
  (5/10/15). Automatický koniec po 60 s a pri 300 MB, aby zabudnutá nahrávka nezaplnila pamäť.
- **Animáciu skladá vlastný zápis GIF-u**, lebo `GifBitmapEncoder` z WPF nevie zapísať ani dĺžku
  snímky, ani opakovanie. Kvantizácia farieb a LZW ostávajú na Windows – von sa berú už zabalené
  bajty. Výsledok sa v testoch **načíta späť skutočným dekodérom**, nie iba skontroluje po bajtoch.
- **Zmrazený obraz sa ohlási** – nahrávka by inak bola „video" jednej nehybnej snímky.
- **Ukončenie appky počas nahrávania súbor dopíše**, nezahodí ho.

**Overené naostro:** 2,3 s nahrávka skutočnej obrazovky → 4 snímky, 116 KB, celková dĺžka
prehrávania 2,29 s, opakovanie donekonečna, súbor otvorí systémový dekodér.

## 0.9.9.36 – 2026-07-31

**Príkaz sa volá Radius a rádius už nezávisí od toho, kde si klikol.**

- **Nájdená skutočná príčina.** Rádius sa čítal ako **vzdialenosť kurzora od rohu** – a kurzor bol
  v tej chvíli tam, kde si práve klikol na druhú čiaru. Klik do polovice 300 px čiary teda okamžite
  nastavil R150 a dotyčnice odskočili na **vzdialené konce oboch čiar**. Voľba strany kríženia
  (0.9.9.35) bola správna oprava iného problému; toto bolo to, čo bolo vidieť.
- **Rádius teraz navrhuje geometria.** Ak ťahy končia pred rohom, predvolený rádius je ten, ktorého
  oblúk sa **dotkne práve tých dvoch koncov, ktoré sú pri sebe** – preklenie medzeru a z čiar
  neuberie nič. Ak sa čiary v rohu už stretajú, začne sa **malým** rádiusom (15 % z toho, čo sa
  zmestí): zaoblenie je detail rohu, nie prekreslenie oboch čiar.
- **Ťahanie je relatívne.** Oblúk začne na navrhnutej veľkosti a mení sa o to, **o koľko sa kurzor
  vzdialil od rohu odvtedy**. Nikdy neskočí. `Shift` po 5 px.
- **Aj hotové rádiusy v pravom kliku začínajú od návrhu**, nie od zlomkov maxima. Maximum je
  rádius, pri ktorom oblúk siaha na vzdialené konce – ako najmenšia ponuka to nedávalo zmysel.
- **Príkaz sa volá Radius** (klávesa **K**, ikona rovnaká). Zaoblenie rohu je **prvá a predvolená**
  z troch možností, oblúk 3 bodmi ostáva ako druhá a tretia v pravom kliku. Kto si už poradie
  klikov nastavil, o svoju voľbu nepríde.

## 0.9.9.35 – 2026-07-31

**Zaoblenie ide na tú stranu kríženia, ktorú naozaj chceš.**

- **Oprava: oblúk pristával v opačnom rohu.** Dve čiary majú medzi sebou **štyri** rohy a doteraz
  sa strana vyberala pravidlom „vždy k najvzdialenejšiemu koncu". Stačí, aby jedna čiara mala za
  rohom dlhší chvost než je druhé rameno – a to má **každý ťah, ktorý roh presiahne** – a oblúk
  skočil do protiľahlého kvadrantu.
- **Nové pravidlo: rozhoduje klik.** V režime zaoblenia sa čiara vyberá klikom, a **to miesto
  určuje rameno**, ktoré má ostať – presne ako výber hrán pre fillet v CAD. Chceš iný roh? Klikni
  na iné rameno tej istej čiary.
- **Bez klikania (výber dvoch čiar → pravý klik) sa berie tá dvojica koncov, ktorá je najbližšie
  pri sebe** – teda spoj, ktorý pri pohľade na obrázok vidno ako spoj. Malé presahy o pár pixelov
  sa ignorujú, aby chvenie na konci ručného ťahu nevedelo prehodiť celé zaoblenie.
- **Skracovanie nechá to rameno, na ktorom oblúk je.** Predtým sa držal koniec najvzdialenejší od
  rohu, čo pri presahujúcej čiare znamenalo, že čiara po orezaní prechádzala **cez vlastný oblúk**.
- **Aj strop rádiusu sa počíta po zvolenom ramene**, nie po najvzdialenejšom konci – takže na
  krátkom ramene sa dotyčnica už nemôže dostať za jeho koniec.

## 0.9.9.34 – 2026-07-30

**Zaoblenie rohu je tretí režim oblúka – a čiary sa naň naozaj napoja.**

- **Nástroj Oblúk má tri režimy, nie dva.** Pravý klik na tlačidlo: dve poradia klikov ako
  doteraz a nové **„Zaobliť roh medzi dvoma čiarami"**. Gesto sú tri kliky ako pri oblúku:
  klik na prvú čiaru, klik na druhú, pohybom myši rádius, tretí klik potvrdí. Čiara pod
  kurzorom sa **rozsvieti** (rovnaké svetlo, aké používa čiara pri zámku osi), takže sa mieri
  na zvýraznený ťah a nie od oka. `Shift` posúva rádius po 5 px, `Esc` gesto zruší.
- **Zaoblenie teraz čiary skracuje.** Obe sa orežú presne po dotyčnicu, takže z rohu vznikne
  jeden súvislý tvar namiesto oblúka položeného na roh, ktorý si stále drží svoj hrot. Ak ťah
  ku rohu nedosahoval, **predĺži sa** – je to to isté pravidlo, „rameno končí tam, kde začína
  oblúk". Predvolene zapnuté; vypína sa v tom istom pravom kliku (**Skrátiť čiary po
  zaoblenie**) a to isté prepínadlo je aj v ponuke *Zaobliť spoj* na ploche.
- **Skrátenie a oblúk sú JEDEN krok histórie.** Jedno Ctrl+Z vráti obe čiary do pôvodnej dĺžky
  a oblúk odstráni. Bez toho by späť nechalo dve čiary skrátené krokom, ktorý v histórii
  nevidno – práve preto bolo doteraz zaoblenie nedeštruktívne.
- **Najväčší rádius už neprehltne celú čiaru.** Pri geometrickom maxime dotyčnica padne presne
  na koncový bod, takže orezanie zožralo celé rameno a ostala čiara nulovej dĺžky: neviditeľná,
  ale stále objekt v dokumente aj riadok v paneli Vrstvy. Pri zapnutom skracovaní je preto strop
  o 2 px nižší a ponuka *Zaobliť spoj* ponúka presne tie rádiusy, ktoré aj použije.
- **Zamknutá čiara sa neskráti** – zámok platí aj na toto. Oblúk sa napriek tomu pridá.
- Voľba režimu prežije reštart. Staršie nastavenia sa načítajú správne: pole bolo dvojstavové,
  teraz je trojstavové, a hodnota zo starého súboru sa použije ako záloha (a stále sa aj zapisuje,
  takže krok späť na staršiu verziu si poradie klikov udrží).

## 0.9.9.33 – 2026-07-28

**Build si sám zastaví bežiaci Edivect.**

- **Nový `build\kill-edivect.ps1`** – natvrdo ukončí bežiaci Edivect, počká, kým Windows
  naozaj uvoľní zámok na súbore, a napíše, čo zastavil. Bežiaca WPF aplikácia drží výhradný
  zámok na vlastnom `.exe`, takže publish inak spadne na `MSB3027 – being used by another
  process`. **Neukladá** – rozkreslené anotácie sa stratia, to je zámer.
- **`build-portable.ps1` aj `build-opm-trial.ps1` ho volajú automaticky**, takže na to netreba
  myslieť. Vypnúť sa to dá prepínačom `-KeepRunning`.
- **Zabíja len procesy spustené z tohto repozitára.** Nainštalovaný Edivect inde na stroji
  ostane bežať; `-Any` to obmedzenie zruší. Meno hľadá ako `Edivect*`, takže chytí aj
  osobné skúšobné buildy, ktoré majú v názve meno a dátum.
- **`build\kill-edivect.cmd`** na dvojklik, prepínače `/all`, `/servers`, `/both`.
  Build skripty ho zámerne nevolajú – volajú `.ps1`, ktorý nepauzuje.
- Voliteľné `-BuildServers` vypne aj MSBuild a Roslyn servery na pozadí, ktoré vedia držať
  zámky v `obj\`. Nie je to predvolené, lebo ďalší build je potom pomalší.

**Overené naostro:** so spustenou appkou prešiel celý `build-portable.ps1` až do ZIP-u
(zastavil PID, dokončil publish, exit 0).

## 0.9.9.32 – 2026-07-28

**Šrafovanie, zaoblenie spoja dvoch čiar a odstránenie farby z obrázka.**

- **Šrafovanie vnútra obdĺžnika a elipsy**, ako v CAD reze: `/`, `\`, krížové, vodorovné,
  zvislé a bodky (sypký materiál). Tlačidlo je **vedľa „bez výplne"** – tie tri sú v skutočnosti
  jedna voľba (žiadna výplň / plná / šrafovaná). Klik prepína na ďalší vzor, pravý klik otvorí
  zoznam. Šraf je **tieňovací štetec, nie geometria**, takže šrafovaný tvar sa kreslí presne
  tak lacno ako plný a v zaoblenom obdĺžniku sa sám oreže do rohov. Štetce sa kešujú, takže
  ťahanie tvaru ich nestavia znova. Šraf prežije uloženie; staršie projekty sa načítajú ako
  plná výplň, čiže vyzerajú presne ako doteraz.
- **Zaoblenie spoja dvoch čiar (fillet).** Označ dve čiary → pravý klik → *Zaobliť spoj*,
  na výber päť polomerov podľa toho, čo sa medzi ne zmestí. **Čiary sa nehýbu ani neskracujú** –
  medzi ne pribudne oblúk, ktorý prevezme ich farbu, hrúbku aj typ čiary. Nedeštruktívne
  zámerne: skrátiť cudziu anotáciu sa nedá vziať späť inak než cez Ctrl+Z, kým zmazať jeden
  oblúk vie každý. Ponuka sa objaví len vtedy, keď sa čiary naozaj stretávajú pod uhlom –
  rovnobežné a súbežné odmieta tá istá matematika, ktorá by inak počítala oblúk.
- **Odstránenie a nahradenie farby v obrázku**, ako „Set Transparent Color" v PowerPointe.
  Pravý klik na obrázok vezme farbu **spod kurzora** a ponúkne ju odstrániť (v troch
  toleranciách) alebo nahradiť inou. Biele pozadie výkresu tak zmeníte na tmavé jedným klikom.
  Vratné cez Ctrl+Z – história nesie celý obrázok. Úpravy sa reťazia, takže sa dá vyhodiť
  jedna farba po druhej.
- **Chyba nájdená vlastným testom:** prevod bodu na pixel používal `(int)`, ktorý orezáva
  **smerom k nule**, takže pravý klik tesne vľavo od obrázka trafil pixel 0 namiesto toho,
  aby bol odmietnutý. Opravené na `Math.Floor`.
- 31 nových testov (264 spolu): geometria zaoblenia (oba dotykové body aj stred oblúka musia
  ležať presne na polomere), šrafovacie štetce vrátane keše, a farebné úpravy obrázka.

## 0.9.9.31 – 2026-07-28

**Uhol vidno aj pri úprave čiary. Text má jemný kontrastný okraj.**

- **Ťahanie konca existujúcej čiary alebo šípky ukazuje dĺžku a uhol** – v tom istom tvare ako
  pri kreslení („127 px · 30°"). Doteraz kreslenie uhol hlásilo a úprava nič, takže šípku
  vyrazenú zo 45° sa nedalo vrátiť inak než zmazať a nakresliť znova. Platí aj pre **kótu** a
  aj **vnútri skupiny**. Obe cesty čítajú z jednej metódy (`MeasureScale.FormatSegment`), takže
  sa už nemôžu rozísť; 8 nových testov to drží.
- **Text má po novom tenký okraj v opačnom tóne** – čierny text dostane biely, biely čierny.
  Čierny text bez výplne položený na tmavé okno bol predtým **úplne neviditeľný** a jediný
  spôsob, ako to zistiť, bolo napísať ho a nevidieť nič. Ostatné značky to riešia už dávno
  (fajka aj číslovaná značka nosia biely halo), text bol jediný bez neho. Okraj preberá
  priehľadnosť textu, takže vyblednutý text nedostane ostrý obrys, a je zámerne tenký (6 %
  veľkosti písma) – ide o čitateľnosť, nie o efekt.
  Obrysy písma sa počítajú **raz a kešujú sa**, takže ťahanie textu nie je pomalšie.

## 0.9.9.30 – 2026-07-28

**50 chýbajúcich prekladov doplnených a build ich odteraz stráži.**

- **40 textov, ktoré sa zobrazovali po slovensky aj v angličtine, nemčine, češtine a poľštine.**
  Preklady sú kľúčované celým slovenským textom, takže každá úprava popisu potichu osirotí kľúč
  vo všetkých štyroch jazykoch a appka spadne späť na slovenčinu **bez akéhokoľvek varovania** –
  v slovenskom UI to nie je vidieť vôbec. Najviac to zasiahlo **okno Porovnanie verzií
  (celé), Pripomienky, Šablóny, Kopírovať formát a Mierku**.
- **11 hlášok, ktoré cez preklad vôbec neprechádzali**, je teraz preložených: „Edivect už
  beží", obnova neuloženej práce, zlyhanie globálnych skratiek, zmrazenia obrazovky, uloženia
  a načítania projektu, exportu monitora aj výrezu, poškodený súbor projektu, „(žiadne nedávne
  projekty)" a „(začiatok)" v histórii.
- **Hláška „Edivect už beží" si po novom načíta jazyk sama.** Zobrazuje sa ešte pred tým, než
  sa nastaví jazyk, takže by po zabalení do prekladu vychádzala všetkým po anglicky – vrátane
  slovenských používateľov, ktorí ju dovtedy mali správne.
- **Tri nové testy to strážia do budúcna** (225 spolu): každý kľúč zo zdrojáku musí mať preklad
  vo všetkých štyroch jazykoch, všetky štyri súbory musia obsahovať tie isté kľúče, a žiadny
  preklad nesmie byť prázdny. Test zlyhá s **konkrétnym zoznamom** chýbajúcich textov vrátane
  súboru, nie len s hláškou „nesedí počet". Overené umelou regresiou – test ju zachytil.
  Klávesové skratky („Ctrl+Alt+D", „F9 / F7") a jednotky („4 px") sú z kontroly vyňaté: tie majú
  podľa návrhu prepadávať nezmenené.

**Neopravené (vedome):** 50 osirotených kľúčov v jazykových súboroch – zvyšky po starších
úpravách textov. Sú neškodné (appka ich nikdy nepožiada) a mazať ich je riskantnejšie než
nechať: 53 ďalších kľúčov sa používa nepriamo cez pole alebo alias `L()`, takže automatickému
„toto sa nikde nepoužíva" sa nedá slepo veriť.

## 0.9.9.29 – 2026-07-28

**Silu rozmazania sa dá zmeniť aj po nakreslení. Audit uzavretý.**

- **Pravý klik na rozmazanie → „Sila rozmazania"**: Slabé (4 px), Stredné (8), Silné (16),
  Veľmi silné (24), Maximálne (40). Doteraz sa sila brala z hrúbky **raz, pri vzniku**, zapiekla
  sa do pixelov a slabo rozmazaný údaj sa dal opraviť jedine zmazaním a nakreslením odznova.
  Zmena ide cez históriu ako každá iná úprava, takže **Ctrl+Z vráti aj pixely**, nielen číslo.
- **Uložený projekt naďalej NEOBSAHUJE ostrý originál.** Aby sa dala sila meniť, musí si objekt
  pamätať, z čoho prekresľovať. Lákavé riešenie – uložiť si nezmenený výrez – by z rozmazania
  spravilo vratnú operáciu: začiernený text by sedel v `.smpj` v plnej kvalite. Preto sa zdroj
  drží **iba v pamäti**. Kým appku nezavrieš, sila ide hore aj dole presne; po znovuotvorení
  projektu je základom už rozmazaný obrázok, takže **sa dá len pridať, nikdy nie ubrať** –
  rozmazané zostáva rozmazané. Stráži to 7 nových testov, medzi nimi jeden priamo na to, že
  uložené pixely sú naozaj rozmazané.
- **Opakovaný výber tej istej sily nič nezhoršuje** – vždy sa prekresľuje zo základu, nie
  z aktuálneho obrázka, takže dvakrát „Silné" vyzerá rovnako ako raz.
- **Ak sa snímka pri kreslení nepodarila**, položka sa v menu vôbec neukáže – nie je z čoho
  prekresľovať a ďalší mŕtvy ovládač bola presne tá vec, ktorú tento audit odstraňoval.
- Popis tlačidla Rozmazanie hovorí, odkiaľ sa sila berie a kde sa mení.

**Audit [docs/AUDIT-ovladace.md](docs/AUDIT-ovladace.md) je tým uzavretý** – N1 až N5 hotové.

## 0.9.9.28 – 2026-07-28

**Koniec ovládačov, ktoré klamú. Podľa auditu [docs/AUDIT-ovladace.md](docs/AUDIT-ovladace.md).**

- **Posuvník PRIEHĽADNOSŤ konečne funguje pri fokuse, rozmazaní, obrázku a skupine.** Doteraz
  pri nich nerobil **nič** – zapisoval do alfy farby, ktorú tieto štyri typy nikdy nečítajú;
  ony nesú priehľadnosť v samostatnom poli. Najviac to bolo cítiť pri **fokuse, kde je to sila
  stmavenia okolia**, teda hlavný parameter toho nástroja – dal sa nastaviť jedine pravým
  klikom. Teraz ide panel cez to isté `SetDisplayOpacity`, ktoré pravý klik používal už predtým.
  Oddelená priehľadnosť obrysu a výplne pri bežných tvaroch zostáva nedotknutá.
- **Typy čiar sa už neodomknú len preto, že si niečo označil.** Podmienka mala „a nič nie je
  vybraté", takže po kliknutí na text, značku, pečiatku, rozmazanie či obrázok sa
  prerušovaná/bodkovaná/osová zase dali stlačiť – a nespravili nič. Je to tá istá diera, akú
  mala VÝPLŇ a ktorá sa opravila v 0.9.9.26; teraz rozhoduje **objekt**, nie len nástroj.
  Pri zmiešanom výbere zostávajú aktívne – jeden čiarkovateľný objekt stačí.
- **Pole HRÚBKA ukazuje pri texte, bubline, značke a pečiatke skutočnú veľkosť.** Tieto typy
  `StrokeWidth` nikdy nenastavia ani nečítajú, takže panel pri 72 px nadpise hlásil **4** a prvé
  cvaknutie šípky písmo skokom zmenšilo. Zápis prepočet robil už dávno – chýbal len v opačnom
  smere.
- **Pri rozmazaní a obrázku zmizli z pravého kliku Farba a Hrúbka.** Obe boli na nich čistá
  dekorácia: vybral si farbu, menu sa zavrelo a nezmenilo sa nič. Priehľadnosť, poradie,
  zamknutie aj zmazanie zostávajú.
- **Navyše (nad rámec auditu): pri rozmazaní a obrázku sú zašedené oba terče – OBRYS aj VÝPLŇ.**
  Doteraz bol OBRYS klikateľný a rovnako mŕtvy; pribudol stav „nemá farbu vôbec".
  Šírka pri nástroji Rozmazanie zostáva funkčná – z nej sa berie polomer rozmazania.
- 9 nových testov (215 spolu) na to, že správne štyri typy nesú priehľadnosť v celom objekte
  a zvyšok v alfe farby.

**Zostáva z auditu:** N5 – silu rozmazania sa po nakreslení stále nedá zmeniť (pixely sú
zapečené pri vzniku). Samostatná úloha na 2–3 h, siaha do modelu.

## 0.9.9.27 – 2026-07-28

**Skúšobné verzie pre kolegov: 60 dní, jedna osoba, jedna firma.**

- **Nový build skript `build\build-opm-trial.ps1`.** Spustenie
  `powershell -ExecutionPolicy Bypass -File build\build-opm-trial.ps1 martin.halus`
  vyrobí prenosný EXE, ktorý sa spustí **len pod kontom `martin.halus`**, **len na firemnom
  počítači OPmobility** a **len 60 dní**. ZIP aj EXE nesú v názve meno a dátum platnosti.
- **Kontrola firmy ide cez Microsoft Entra ID TenantId**, nie cez doménu. Firemné počítače nie
  sú v klasickej AD doméne (`DomainJoined: NO`, `AzureAdJoined: YES`), takže SID domény je
  `null` a nedá sa použiť; TenantId `2696ce3d-…` má naopak každý firemný stroj a nikto iný.
  Číta sa z registry, s `dsregcmd /status` ako záložnou cestou.
- **Hlášky nikde neuvádzajú meno autora.** Cudzie konto dostane „táto skúšobná verzia je určená
  len pre jednu konkrétnu osobu", po uplynutí lehoty každý dostane „časovo obmedzená verzia
  skončila – kontaktujte autora". Preložené do en/de/cs/pl.
- **Posledný týždeň appka raz denne pripomenie**, koľko dní zostáva. Raz denne, nie pri každom
  spustení – otravné upozornenie sa človek naučí odklikať a potom prehliadne to podstatné.
- **Posunutie hodín dozadu build nespustí** (s dennou toleranciou kvôli časovým pásmam a
  synchronizácii času).
- **Bežný build sa nemení.** Bez parametrov skriptu sa do EXE nezapíše žiadna metadáta a celá
  kontrola sa preskočí – `build\build-portable.ps1` funguje presne ako doteraz.

## 0.9.9.26 – 2026-07-28

**Tvary sa vkladajú ako obrys, nie ako plná plocha. Malé okno na dva riadky.**

- **Výplň sa po štarte vždy začína na „bez výplne".** Obdĺžnik alebo elipsa nakreslené hneď po
  spustení sú **len obrys** – vidíš cez ne snímku, čo je celý zmysel anotácie. Doteraz sa
  posledná použitá výplň obnovila zo súboru nastavení, takže jeden vyplnený obdĺžnik v piatok
  spôsobil, že v pondelok ráno vychádzali všetky tvary plné, a na obrazovke nebolo nič, čo by
  to vysvetľovalo. Farba obrysu a hrúbka sa pamätajú ďalej – mení sa iba výplň.
- **OBRYS a VÝPLŇ: vždy je klikateľný práve ten, ktorý niečo robí.** Pri čiare, šípke, pere,
  zvýrazňovači, kóte, oblúku, uhlomere a rozmazaní je aktívny **len OBRYS** – tieto objekty
  výplň nikdy nevykresľujú. Pri fajke, krížiku, OK/NOK a značke je to naopak: aktívna je len
  **VÝPLŇ**, lebo tie majú jedinú farbu. Novinka oproti 0.9.9.25: platí to teraz **aj keď máš
  taký objekt vybratý**, nielen keď máš zapnutý nástroj – dovtedy sa terč po označení čiary
  zase odomkol a klikanie naň nemalo viditeľný účinok.
- **Pri zmiešanom výbere rozhoduje ten najschopnejší objekt.** Ak máš naraz označenú čiaru a
  obdĺžnik, VÝPLŇ zostáva aktívna – inak by sa obdĺžnik nedal vyplniť len preto, že čiara bola
  vo výbere prvá. Rovnako sa pozerá aj dovnútra skupín.
- **Terč sa už „nezasekne" na výplni.** Po pečiatke (kde je VÝPLŇ jediná možnosť) sa pri
  návrate na obdĺžnik vráti späť na OBRYS. Ak si si výplň zvolil ty sám kliknutím, tá ti
  zostane – prepína sa len to, čo predtým prepla appka za teba.
- **Malé okno je na dva riadky: značka Edivect hore, tlačidlo Kresliť pod ňou.** Vedľa seba
  si obe súperili o ten istý pohľad a pilulka bola zbytočne široká na to, že leží na cudzom
  okne. **Logo z tlačidla Kresliť je preč** (vrátilo sa tam kresliace pierko) – identita patrí
  do značky nad ním; dva razy pod sebou hovorila pilulka „Edivect" a ani raz nepovedala, čo
  to tlačidlo urobí.

## 0.9.9.25 – 2026-07-27

**Výplň konečne robí to, čo tlačidlo sľubuje – pri čiare, zvýrazňovači aj pečiatkach.**

- **Terč VÝPLŇ je zašedený tam, kde naozaj nič nerobí:** pri čiare, šípke, pere, zvýrazňovači,
  kóte, oblúku, uhlomere a rozmazaní. Tieto objekty výplň nikdy nekreslia – kliknutie na terč
  doteraz vyzeralo, že niečo prepína, no menilo len farbu, ktorú nič nikdy nezobrazí.
- **Fajka a krížik: Obrys a Výplň boli preho­dené, a Výplň navyše nefungovala vôbec.** Zelená
  fajka/červený krížik majú v skutočnosti len JEDNU farbu – tá doteraz sedela pod terčom
  „Obrys", kým „Výplň" písala do poľa, ktoré sa nikdy nevykreslí. Teraz je to naopak: **Výplň
  je pri fajke/krížku/OK/NOK predvolene aktívna** a mení tú skutočnú farbu; Obrys je pri nich
  zašedený, lebo od neho už niet čo oddeliť. Rovnaký prehodený stav mala aj číslovaná značka –
  opravené zhodne.
- **Prerušovaná/bodkovaná/osová čiara pri fajke a krížku** sú zašedené (nadväzuje na 0.9.9.24,
  kde to isté dostal text, značka a rozmazanie) – tieto tvary obrys nekreslia, takže typ čiary
  nemal čo meniť.
- **Zvýrazňovač má vlastné vyhladenie ťahu**, oddelené od pera, a je **jemnejšie ako doteraz**.
  Zvýrazňovač sa kreslí 3,5× širší než pero, a čím je ťah širší, tým agresívnejšie ho rovnaká
  úroveň vyhladenia zjednoduší – pri perovej predvoľbe 3 to zvýrazňovaču zaobľovalo aj reálne
  rohy. Nová predvoľba je 1. Nastaviteľné pravým klikom na **Zvýrazňovač** (predtým to isté
  tlačidlo menilo iba pero) a teraz aj pravým klikom na už nakreslený zvýrazňovací ťah – to
  bolo doteraz vyhradené len peru.
- **Obdĺžnik a elipsa: nová voľba „Výplň = farba obrysu"** v menu pravého tlačidla na
  nástroji – vyplní budúce (aj vybraté) tvary rovnakou farbou, akú má obrys, jedným klikom.
  (Podržanie **Ctrl** pri kreslení robí to isté len pre jeden práve kreslený tvar – táto
  funkcia už v appke bola, len bez tlačidla, ktoré by na ňu upozornilo.)
- **Malá šípka ▾ v rohu pri KAŽDOM tlačidle, ktoré má na pravý klik ďalšie voľby** – pero,
  zvýrazňovač, šípka, kopírovanie formátu aj rozpoznávanie textu ju predtým nemali, hoci
  pravý klik u nich fungoval; teraz je to vidieť, nielen napísané v popise.
- **Malé okno: značka Edivect je nad nápisom „Kresliť"**, nie vedľa štetca – logo dostalo
  v pilulke druhé, vlastné miesto namiesto všeobecnej ikony štetca.

## Nezaradené

**Jednotné názvy exportov a voliteľná veľkosť ikon.**

- **Každý vyexportovaný súbor má rovnaký názov: iba dátum a čas**, bez predpon a bez
  názvu aplikácie (`2026-07-21_14-05-33.png`). Doteraz mali PNG/JPG jeden formát,
  projekt `.smpj` iný (`Anotacie_20260721_1405`), CSV a šablóny ešte iný – teraz idú
  všetky cez jeden `ExportNaming.Stamp()`. Odpadli aj predpony `annotations_` a
  `monitor2_` – priečinok `Captures` už hovorí, čo v ňom je, a dátum triedi chronologicky.
- **Formát názvu sa dá vybrať** v menu Export → „Formát názvu súboru": ISO
  (`2026-07-21_14-05-33`, predvolený), kompaktný, s medzerou, alebo deň-mesiac-rok.
  Voľba sa pamätá a platí pre všetky výstupy.
- **Veľkosť panela sa dá prepnúť** (ozubené koliesko → „Veľkosť ikon", alebo pravý klik
  na panel): Kompaktné / Štandardné / Pohodlné. Neprelaďuje sa len glyf a odsadenie –
  mierka škáluje **celý panel naraz** (ikony, texty, slider, swatche) a okno sa prispôsobí,
  takže proporcie držia v každom kroku. Štandard = doterajšia veľkosť, prepnutie je živé.
  Malé okno (pilulka) je z toho zámerne vynechané – je to pevný orientačný bod.

## 0.9.9.24 – 2026-07-27

**Každý monitor má svoju farbu, panel neuteká pod podmenu, a typ čiary neklame pri texte.**

- **Monitory sú farebne odlíšené.** Rámik okolo obrazovky v režime kreslenia už nie je vždy modrý:
  monitor 1 je modrý, 2 zelený, 3 oranžový, 4 fialový, 5 červený, 6 žltý. Tú istú farbu nesie aj
  položka v menu **Export → „PNG – jeden monitor"** – vidno tam štvorček s farbou aj jej názov
  („Monitor 2 · Zelená"). Doteraz sa z dvoch riadkov „Monitor 1 / Monitor 2" nedalo zistiť, ktorý
  je ktorý – číslovanie Windowsu nesúvisí s tým, kde obrazovky fyzicky stoja, a dva rovnaké
  monitory majú aj rovnaké rozlíšenie. Teraz stačí zdvihnúť oči a nájsť zelený rámik.
  **Farba drží aj pri zmrazenom pozadí** (rámik iba zjasnie a zhrubne) – zmraziť a exportovať je
  jeden ťah, takže práve tam by bolo najhoršie o identitu monitora prísť. Rámik je naďalej
  vylúčený zo snímania, do exportu sa teda nedostane. Pri jednom monitore sa nemení nič.
- **Panel už nezmizne, keď otvoríš podmenu pravého kliku.** Pravý klik na šípku → „Farba" alebo
  „Hrúbka" zhodil panel za celoobrazovkové plátno a vrátil ho až po výbere – teda presne vtedy,
  keď už netreba. Podmenu je vlastné okno a jeho otvorenie preskladá poradie „vždy navrchu"
  okien; doteraz sa poradie obnovovalo len pri otvorení a zatvorení samotného menu. Teraz aj pri
  otvorení a zatvorení **každého** podmenu, takže stredné aj veľké okno zostanú viditeľné po celý
  čas, čo je menu otvorené.
- **Prerušovaná / bodkovaná / osová čiara sa pri TEXTE zašedí**, rovnako ako to už robí PERO.
  Text kreslí písmená, nie obrys – typ čiary sa naň nikdy nepoužije, takže prepínač len tváril,
  že niečo robí. To isté platí pre **značku, pečiatky (fajka/krížik/OK/NOK) a rozmazanie**, tak sú
  zašedené tiež. Pri vybranom objekte zostávajú tlačidlá živé – tam menia ten objekt.

## 0.9.9.23 – 2026-07-25

**Slabší magnet hore a dole, logo na všetkých troch miestach, a FILL už nehýbe oknom.**

- **Magnet okraja obrazovky je hore a dole slabší** – 6 px namiesto 14. Panel je zvislá lišta a
  posúvanie po jej vlastnej strane je bežný pohyb; rovnako silný magnet ako po bokoch ho pri tom
  stále chytal a nedalo sa ho zaparkovať pár pixelov od horného okraja. **Bočný magnet zostáva
  nezmenený (14 px)** – zaparkovať panel k strane má ostať jedno hodenie.
  Overené ťahaním: hore 12 px medzera = voľné, 3 px = prichytí; nabok 12 px = prichytí, 40 px = voľné.
- **Značka je teraz aj vo veľkom paneli a v malom okne (pilulke).** Vytiahol som ju do jednej
  šablóny, takže je definovaná raz a nosia ju všetky tri chrómy.
  **Slovo „Edivect" som z panela musel odstrániť:** titulkový riadok má 134 px a zatváracie
  + zbaľovacie tlačidlo z neho zoberú ~59, takže na značku zostáva ~52 px – vojde sa buď 26 px
  značka, **alebo** názov, nie oboje. Pri 10 px názov liezol pod tlačidlo („Screer"), pri 9 px
  skončil na „ScreenM". Značka je silnejšia identita a znesie malý rozmer, tak nesie riadok ona;
  názov ostáva v tooltipe, **v pilulke** (tam sa vedľa značky pohodlne zmestí) a na paneli úloh.
- **Mal si pravdu s tým radiusom.** Farebný pruh pod ikonou čiary/výplne mal 1 px zaoblenie, ktoré
  WPF vykreslil so **štyrmi rôznymi krytiami rohov** (namerané 145 / 166 / 170 / 192 oproti výplni
  229) – ľavý koniec preto pôsobil zaoblene a pravý ako odseknutý. Pri 5 px vysokom pruhu to
  zaoblenie nebolo vidieť inak než ako túto chybu, tak je preč: pruh je teraz ostrý obdĺžnik so
  štyrmi identickými rohmi.
- **Počas PEN a zvýrazňovača sú čiarkovaná, bodkovaná a osová neaktívne**, svieti plná. `PenTool`
  totiž každému ťahu natvrdo nastaví plnú čiaru, takže vzor vybratý pri pere ticho nič nerobil.
  Keď je niečo **vybraté**, tlačidlá menia ten objekt (a to funguje), takže tam ostávajú aktívne.
  Po prepnutí späť na tvar sa naposledy zvolený vzor vráti – pero ho len prekryje, nezmaže.
- **Kliknutie na FILL už nezväčší okno.** Ikona „bez výplne" sa predtým pridávala ako `Collapsed`,
  čo slot úplne uvoľní – pri prepnutí na výplň sa stĺpec o celú jej výšku natiahol a okno
  (`SizeToContent`) s ním. Teraz je slot rezervovaný natrvalo (`Hidden`) a samotná ikona je štíhla
  (14 px, pevná veľkosť v každom stave – predtým rástla z 24 na 26 pri výbere, čo bol druhý tichý
  spôsob, ako hýbať panelom). **Namerané: 134×638 pri čiare, 134×638 pri výplni, 134×638 po
  návrate.**
- **Paleta má 3 stĺpce aj vo veľkom paneli** (mala 4 z čias, keď bol široký 168 px). Po zúžení na
  134 px sa štyri 26 px vzorkovníky do ~78 px nezmestili a **stláčalo ich to na obdĺžniky** – rušilo
  to skoršiu požiadavku na štvorcový tvar a posledný bol orezaný okrajom. Teraz sú opäť štvorcové.
  Veľký panel je tým o 20 px vyšší (959 namiesto 939); stále bez scrollbaru.

## 0.9.9.22 – 2026-07-25

**Veľké okno beží na 3 stĺpcoch – všetky sekcie sú teraz bezo zvyšku vyplnené.**

- Na veľkom okne mali AKCIE, MERANIE, PEČIATKY, TABULE & PORADIE aj SÚBOR & NÁSTROJE posledný
  riadok napoly (alebo takmer úplne) prázdny – v AKCIE dokonca trčalo v poslednom riadku
  **jediné** tlačidlo (Export) s tromi prázdnymi políčkami vedľa. Príčina: panel volil **jeden
  spoločný počet stĺpcov pre všetky sekcie** a pre veľké okno vždy štartoval so 4 – čo síce sadlo
  na NÁSTROJE (12), ale s ničím iným sa nedelilo bezo zvyšku.
- **3 je jediný počet stĺpcov, ktorý sedí na všetko naraz** – NÁSTROJE (12), AKCIE (9), MERANIE
  (3), PEČIATKY (6), TABULE & PORADIE (6) aj SÚBOR & NÁSTROJE (6) sú všetko násobky trojky.
  Presne to isté číslo, prečo je stredné okno dlho pôsobilo "ideálne".
- Veľké okno je teraz **užšie** (134 px namiesto 168 – rovnaká šírka ako stredné) a **o jeden
  riadok vyššie** (939 px namiesto 905 – ten jeden riadok navyše ide na vrub NÁSTROJE, ktoré pri
  3 stĺpcoch potrebujú 4 riadky namiesto 3). Overené naživo: žiadny scrollbar, všetkých šesť
  sekcií je teraz čistá 3-stĺpcová mriežka bez jedinej diery.

## 0.9.9.21 – 2026-07-24

**Vyhodené zbytočné tlačidlo DRAW zo sekcie AKCIE.**

- Po včerajšej oprave (0.9.9.20) sa ukázalo, že DRAW robilo **doslova to isté** ako šípka COLLAPSE
  v hlavičke: zbaľovanie panela je natrvalo naviazané na režim (`collapse = Mode == Passthrough`
  v [`UpdateCollapsed`](src/Edivect/UI/ToolbarWindow.xaml.cs)), takže hocičo, čo appku vyradí
  z kreslenia, vždy skončí rovnako – zbalením na pilulku. Navyše, pokiaľ je panel vôbec otvorený,
  `Mode` je vždy `Annotate` – takže DRAW v ňom v skutočnosti **nikdy neukazovalo "vypnuté"**, len ten
  krátkodobý chybný stav z predchádzajúcej verzie.
- Vstup a výstup z kreslenia zostáva plne pokrytý: **COLLAPSE** šípka (vypnutie), **PillDraw**
  v pilulke (zapnutie), **Ctrl+Alt+D** aj **Ctrl+Alt+C** (obe smery). Žiadna funkcia sa nestratila.
- **Bonus:** po odstránení jedného tlačidla si adaptívny layout (ten istý mechanizmus, čo hľadá
  najmenší počet stĺpcov bez sirotej medzery) sám prerátal AKCIE na čistú mriežku **3×3** – predtým
  mala 10 tlačidiel a osirotený posledný riadok. Panel je nižší o **34 px** (672 → 638).

## 0.9.9.20 – 2026-07-24

**Oprava: tlačidlo DRAW v strednom paneli sa dalo vypnúť len naoko.**

- Kliknutie na DRAW, keď už bolo aktívne, vizuálne zhaslo ikonu, ale appka **zostala v režime
  kreslenia** – dalo sa kresliť ďalej, aj keď to tlačidlo neukazovalo. Príčina: handler
  [`OnDraw`](src/Edivect/UI/ToolbarWindow.xaml.cs) volal `AppActions.SetAnnotate()`, ktorá
  režim iba **zapína** a pri opakovanom volaní (keď už kreslenie beží) potichu nič neurobí – takže
  sa nikdy neodpálila udalosť, ktorá by tlačidlo vrátilo do súladu so skutočným stavom appky.
- Klávesová skratka **Ctrl+Alt+D** (rovnaký tooltip ako má tlačidlo) tento problém nemala – tá už
  dlho volala `AppActions.ToggleAnnotate()`, skutočný prepínač. Teraz to isté volá aj tlačidlo,
  takže obe cesty robia presne to isté.
- Overené automatizovaným testom: pred opravou kliknutie na aktívne DRAW nechalo appku kresliť
  ďalej (`Undo enabled AFTER drawing attempt = True`, hoci tlačidlo ukazovalo vypnuté); po oprave
  sa panel správne zbalí do pilulky (Passthrough režim) a klik na plochu **prepadne cez appku bez
  toho, aby čokoľvek nakreslil** (`Undo enabled = False`).

## 0.9.9.19 – 2026-07-24

**Odobratie farby kvapkadlom už panel nezväčší – ani raz, ani po štvrtýkrát.**

- *Naposledy použité* farby sa presunuli **z mriežky do riadku hlavičky FARBA**, vpravo od nadpisu.
  Mriežka je `UniformGrid`, takže každá zapamätaná farba bola celá ďalšia bunka – a prvá z nich
  preklopila 12 buniek do piateho riadku za 26 px. Odobratie farby tak zväčšovalo okno, čo je
  presne to, čo panel nesmie robiť.
- **Hlavička je miesto zadarmo:** má 13 px textu a napravo od „FARBA" ~80 px mŕtveho priestoru.
  Štyri 12 px štvorčeky (spolu 56 px) sa doň zmestia bez toho, aby riadok narástol čo i len o pixel.
- **Mriežka je odteraz natrvalo 12 buniek** (10 predvolieb + kvapkadlo + „…") = 4 riadky, nech
  odoberieš koľkokoľvek farieb.
- Klikanie ostáva rovnaké ako na veľkých vzorkovníkoch: **klik = vybratý cieľ, pravý klik = ten druhý**.
- Overené meraním: **134 × 672 pred aj po** odbere, a rovnako aj so **štyrmi** zapamätanými farbami
  naraz (panel má `SizeToContent`, takže príliš široký riadok by ho rozšíril – nerozšíri).

## 0.9.9.18 – 2026-07-24

**Panel je späť na pôvodnej veľkosti – kvapkadlo si už nepýta ani pixel navyše.**

- **134 × 672**, presne ako pred pridaním kvapkadla (bolo 698). Pridanie funkcie nesmie
  predražiť panel – buď sa rozmer udrží, alebo klesne.
- Príčina rastu bola čistá aritmetika mriežky: paleta má **3 stĺpce**, takže 11 farieb + kvapkadlo
  + „…" = 13 buniek = **5 riadkov**, kde piaty niesol jediné tlačidlo a stál 26 px.
- **Ubratý jeden preset – ružová.** Zostáva 10 farieb, spolu s dvoma tlačidlami **12 buniek =
  presne 4 riadky**. Ružová bola najmenej konvenčný odtieň v inžinierskej anotácii (fialová už
  pokrýva rolu „ďalší odlíšiteľný odtieň") a **nič sa nestalo nedostupným**: kvapkadlo vezme
  ľubovoľnú farbu z obrazovky jedným gestom, „…" otvorí plný dialóg a obe si pamätajú
  *naposledy použité*.
- **Nový test `ColourPalette_FillsWholeRows_InBothPanelWidths`** drží pravidlo do budúcna: počet
  buniek musí byť deliteľný 3 (úzky panel) aj 4 (rozšírený). 12 vyhovuje obom. Ďalší preset teda
  nie je zadarmo a test to povie skôr, než to spraví panel.

## 0.9.9.17 – 2026-07-24

**Kvapkadlo – farba sa dá prevziať priamo z predlohy.**

- **Nové tlačidlo v palete FARBA** (vedľa „…"): klikneš, prejdeš na miesto v podklade a klikom
  prevezmeš jeho farbu. **Esc alebo pravý klik** odber zruší.
- **Lupa pri kurzore**: zväčšuje okolie 11 × 11 px osemnásobne a ukazuje hex hodnotu, takže sa dá
  trafiť aj **jednopixelová CAD čiara**. Stredový pixel má krúžok orámovaný bielou aj čiernou,
  aby bol vidieť na svetlom aj tmavom podklade.
- **Použije sa na to, čo je vybraté vľavo** (čiara / výplň) – rovnako ako „…". Odobraná farba
  ide aj medzi posledné použité a zachová priehľadnosť, ktorú čiara už mala.
- Odber beží nad **snímkou obrazovky** spravenou pri otvorení kvapkadla, nie nad živou plochou.
  Vďaka tomu lupa číta z pamäte (žiadne ťahanie z GDI pri každom pohybe myši), nemôže odobrať
  samu seba a farba pod krížikom je presne tá, ktorú dostaneš.
- Výber pixelu ide vo **fyzických pixeloch** (`GetCursorPos` + snímka), umiestnenie lupy v DIP –
  miešanie týchto dvoch je presne to, čo rozbíja kvapkadlá na monitoroch s rôznym škálovaním.
- Panel povyrástol o **26 px** (paleta má o jednu bunku viac, čo pridalo riadok).

## 0.9.9.16 – 2026-07-23

**Nová brand ikona aplikácie – zladená v celej aplikácii aj v repozitári.**

- **App ikona (`app.ico`)** je nahradená autorskou brand sadou. Doterajšia ikona bola
  generovaná skriptom (červeno-oranžová „fixka na tmavom štvorci") a nemala nič spoločné
  so značkou Edivect. Nová `Edivect.ico` má **9 rozlíšení (16–256 px)**, každé kreslené
  v správnej úrovni detailu (malé veľkosti bez čerchovaných čiar a tenkého kríža, ktoré sa
  pod 64 px rozpadnú) – ostrá na taskbare, v tray aj pri 150 %/200 % škálovaní.
- **Panelové logo (úzky panel)** som prekreslil z novej predlohy `edivect-mark-small.svg`
  (256-jednotková mriežka, paleta `#1167F5`/`#FC8B19`). Pri 26 px je „small" správna úroveň
  detailu, takže panel aj taskbar teraz ukazujú **tú istú značku** – žiadny rozdiel medzi
  starou (`#2D7DF6`) a novou modrou.
- **Sada ikon má poriadny domov:** presunutá z `docs/edivect-icons/` do
  `brand/icons/` (zdrojové vektory, Windows `.ico` + PNG, web favicony/PWA, horizontálny
  lockup, `preview.html`). `brand/` je podľa README jediný zdroj pravdy identity, takže tam
  patrí. `brand/README.md` na ňu ukazuje ako na aktuálnu produkčnú sadu.
- **`build/make-icon.ps1`** už nekreslí starú grafiku – iba **skopíruje** autorskú
  `brand/icons/windows/Edivect.ico` do `src/Edivect/app.ico`. Predtým by jeho spustenie
  prepísalo dobrú ikonu zastaraným artom; teraz je to bezpečný inštalačný krok.

## 0.9.9.15 – 2026-07-22

**Namiesto monogramu „SM" je v úzkom paneli logo Edivect.**

- Značku som preložil z `brand/icon.svg` do XAML (Path/Line/Ellipse v `Viewbox`), takže je
  **vektorová** – ostrá pri každom DPI a **bez vlastného pozadia** (čierny štvorec zo screenshotu
  je preč, glyf sedí priamo na tmavom paneli).
- **Ideálny rozmer: 26 px.** Brand guide (`docs/branding/LOGO_USAGE.md` §4) určuje pre ikonu
  **minimum 24 px**; dal som 2 px navyše pre anti-aliasing, a stále sa zmestí do 30 px riadku
  tlačidiel. Pod 24 px guide predpisuje prepnúť na zjednodušený `favicon.svg` – to som nespravil,
  lebo pri 26 px plný glyf drží (a §6 zakazuje vypustiť kríž či oranžovú rukoväť).
- Jemné detaily (čiarkované vodidlá, druhý uzol) sú pri tejto veľkosti sub-pixelové – to je
  vlastnosť detailného loga v malom, nie chyba; identitu nesie modrý rám + kríž + oranžová
  rukoväť, ktoré sú čitateľné.
- Rozšírený panel ďalej ukazuje plný nápis „Edivect".

## 0.9.9.14 – 2026-07-22

**Nadpis „Edivect" sa v úzkom paneli zmenšil na monogram „SM".**

Odkedy je bežný panel 3 ikony na šírku (~120 px), plný nápis „Edivect" sa vedľa tlačidiel
zbaliť/zavrieť nezmestil a orezal sa. Nadpis je pritom čisto značka – ťahať panel sa dá za
celú plochu, nie len za nadpis – takže:

- **Úzky (bežný) panel:** monogram **„SM"** (tučné), vľavo hore, vždy sa zmestí.
- **Rozšírený panel:** plný nápis **„Edivect"** sa vráti, lebo tam je miesto.
- Plná značka je aj naďalej na pilulke (malom okne), takže o brand sa nepríde.

## 0.9.9.13 – 2026-07-22

**Nižšie náhľady hrúbky a štýlu čiary – ušetrených 30 px.**

Tlačidlá hrúbky a typu čiary ukazujú **vodorovnú čiaru**, nie ikonku, takže nepotrebujú
štvorcovú výšku ako ostatné. Znížil som ich z 26 na **16 px**. Sekcia ČIARA má tri riadky
týchto tlačidiel (1 × hrúbky + 2 × štýly), takže úspora je **3 × 10 = 30 px na výšku**
(panel 702 → 672 px v bežnom režime, rovnako v rozšírenom).

Výška je odvodená **zlatým rezom**: 26 ÷ φ = 16,07 → 16. Kontrola: 26 ÷ 16 = 1,625, čo je od
φ (1,618) vzdialené 0,4 %. A toto je práve to správne miesto pre zlatý rez – **proporcia
medzi dvoma druhmi prvku** (glyfové tlačidlo vs. náhľad čiary), nie nasilu vnútené na mriežku
rovnakých cieľov, kde nič neznamená (v UX audite som ho tam odmietal – a tu ho beriem).

Náhľady zostávajú čitateľné: aj najhrubšia predvoľba (14 px → pruh 11 px) sa do 16 px zmestí.

## 0.9.9.12 – 2026-07-22

**Bežný panel je úzky zvislý prúžok, nie široký blok.**

Nástroj, ktorý sedí vedľa práce celý deň, má míňať výšku monitora (obvykle voľnú), nie šírku
(kde je dokument) – ako nástrojové lišty vo Photoshope či Figme. Preto sa úrovne rozišli:

- **Bežný panel (compact) je teraz 3 ikony na šírku** – 12 nástrojov v 4 riadkoch, paleta tiež
  3 stĺpce. Šírka **168 → 134 px** (−34), výška +88. Presne tá výmena, o ktorú ide: menej
  šírky, viac výšky.
- **Rozšírený panel (expanded) ostáva 4 na šírku** – „daj mi všetky nástroje" je moment, nie
  trvalý stav, tak si šírku dovolí (168 px, bez zmeny).
- Kľúčové bolo posunúť aj **paletu** na 3 stĺpce v compacte – inak by ju držala na 4 a panel
  by sa nezúžil vôbec (nástroje aj paleta spolu určujú šírku).
- Overené: všetky štyri kombinácie veľkosti a úrovne sa zmestia bez scrollbaru.

## 0.9.9.11 – 2026-07-22

**Opravený zmiznutý rám a nadpis ZMRAZENÉ.**

Po zapnutí Freeze sa občas nezobrazil modrý rám monitora ani štítok „ZMRAZENÉ" – a pomohlo
vypnúť a znova zapnúť režim Kresliť. Príčina bola v poradí okien: medzi topmost oknami vyhráva
ten, kto zavolal `SetWindowPos` naposledy, a overlay sa na `ModeChanged`/`BackgroundChanged`
prihlasuje **skôr** než rámy (`BuildOverlays()` beží pred nimi). Keď teda overlay presadil
svoj topmost ako posledný, prekryl rám – a pri zmrazení je overlay **nepriehľadný**, takže
rám aj štítok jednoducho zmizli.

- `EnsureOnTop()` už nekontroluje `IsVisible`. Práve pri prechode medzi režimami je okno tesne
  po `Show()`, ale WPF ho ešte nestihlo označiť za viditeľné – a vynechanie práve v tej chvíli
  bolo to, čo rám nechalo pod overlayom. `SetWindowPos` na skryté okno nič nepokazí.
- Rámy sa navyše presadia **ešte raz, keď sa dokončí spracovanie udalostí**. Namiesto
  spoliehania sa na poradie registrácie obsluh si vrch nárokujú vtedy, keď už nikto iný
  nič nemení.

Poznámka: chybu sa mi nepodarilo priamo zreprodukovať (moje meranie poradia okien vychádzalo
správne), takže oprava mieri na mechanizmus, nie na pozorovaný prípad – potvrď mi prosím, či
je to preč.

## 0.9.9.10 – 2026-07-22

- **Pravý klik na panel už neotvára veľkosť ikon.** Bola to druhá, skrytá cesta k jedinému
  nastaveniu, ktoré je v Nastaveniach – niečo, čo objavíš náhodou a potom už nenájdeš.
- **Export má ikonu diskety**, Uložiť projekt prevzalo disketu so šípkou. Zapísať obrázok
  na disk je práve tá akcia, pri ktorej ľudia hľadajú disketu.
- **Easter egg konečne povie, čo je zač.** Predtým sa cieľ hry oznámil status hintom, ktorý
  po štyroch sekundách zmizol – kto žmurkol, ostal na čiernej ploche s perom a bez vysvetlenia.
  Teraz je na tabuli **trvalý nadpis „SÚŤAŽ V KRESLENÍ KRUHU"** s inštrukciou, aktuálnym
  rekordom a cestou von.
- **Farebné políčka sú štvorcové.** Bunky palety boli 25 × 30 px – desať pixelov výšky na
  riadok, kde farba nebola. Vinníci boli dvaja: tlačidlo „vlastná farba" malo vonkajších 30 px
  a **vybraté políčko sa zväčšovalo**, a keďže riadok `UniformGrid`-u je vysoký ako jeho
  najvyššie dieťa, naťahovali celú paletu – navyše ktorý riadok narástol, záviselo od toho,
  kde práve ležala vybratá farba. Výber sa teraz značí len modrým prstencom, veľkosť sa nemení.
  Rozstup 30 → **26 px**. (Farba zámerne nevypĺňa celé tlačidlo: susedné políčka by splynuli
  do jedného pásu a prstenec „vybraté" by nemal kam ísť inam než dovnútra, kde by zožral práve
  tú farbu, ktorú posudzuješ.)
- **Šesťkrát viac hlášok.** Na každé pásmo skóre je päť hodnotení namiesto jedného a nikdy
  nepríde tá istá dvakrát po sebe – jedna veta na pásmo znamenala, že „zemiak" chodil skoro
  pri každom pokuse, čo je najrýchlejší spôsob, ako z vtipu spraviť nevtip. Vrátane hlášok
  pre nezavretý ťah. Všetko preložené do EN/DE/CS/PL (523 reťazcov).

## 0.9.9.9 – 2026-07-22

**Sekcia ČIARA preskladaná – nič sa nestratilo a vzorky štýlov sú dlhšie.**

- **Hrúbky sú v jednom riadku po štyroch** namiesto štyroch pod sebou. Náhľad hrúbky zostáva –
  to bola tá časť, ktorú by zrušenie predvolieb naozaj stálo, lebo číslo `8` ti neukáže, ako
  8 px vyzerá. Pruhy sú užšie (26 px namiesto 38), čo na prečítanie hrúbky bohato stačí,
  keďže hrúbku nesie zvislý rozmer.
- **Štýly čiar sú 2×2** namiesto štyroch riadkov. Bunka tým narástla na **71 px** (bola 68),
  takže vzorky sa dali predĺžiť zo 46 na **52 px** – reflow ich spravil čitateľnejšími,
  nie menšími.
- Panel **650 → 620 px**. Žiadny ovládací prvok nezmizol: predvoľby, číselník, koliesko myši,
  klávesy `+`/`−` aj hrúbky v kontextovom menu fungujú ďalej.
- Pribudol token `PadNarrowButton` – test adopcie tokenov si všimol, že som pri preskladaní
  nahradil štyri tokeny natvrdo napísanou hodnotou, a zlyhal. Presne na to je.

Kumulatívne od 0.9.9.4: **172 × 833 → 168 × 620 px**, výška **−26 %**, plocha **−27 %**.

## 0.9.9.8 – 2026-07-22

**Undo je konečne pri nástrojoch a medzery majú prvýkrát pravidlo.**

- **AKCIE sa presunuli hneď za NÁSTROJE.** Undo bolo od nástrojov 445 px – najďalej v celom
  paneli, hoci je to po výbere nástroja druhá najčastejšia akcia. Po presune je vzdialenosť
  **122 px (−73 %)** a je to čisté preusporiadanie: **výška sa nezmenila ani o pixel**.
  (Pôvodný nápad dať Undo do titulkového riadku som zahodil – skončilo by hneď vedľa ✕
  Ukončiť, a vysokofrekvenčný ovládač pri deštruktívnom je porušenie prevencie chýb.)
- **Medzery používajú zdieľané tokeny.** `Resources/Spacing.xaml` mal 4-bodovú škálu od
  začiatku a v komentári sľuboval, že „no view hand-writes '8,8' again" – pritom mal naprieč
  celým projektom **85 hardkódovaných hodnôt a nula odkazov**. Doplnené sémantické tokeny
  (`PadPanel`, `GapSection`, `GapUnderHeader`, `GutterLeft/Right`, `PadWideButton`) a toolbar
  ich teraz reálne používa (30 miest).
- **Všetky nepárne hodnoty zrovnané na mriežku** v piatich súboroch – 7, 9, 3, 5, 1 px zmizli
  z `Buttons`, `Controls`, `Feedback`, `Inputs` aj z toolbaru. Vedľajší efekt: ďalších −14 px.
- **`SpacingGridTests` to drží.** Test číta XAML a zlyhá na akejkoľvek nepárnej medzere, plus
  kontroluje, že toolbar naozaj siaha po tokenoch. Bez neho by sa to o tri funkcie rozsypalo
  naspäť – presne ako doteraz, napriek existujúcemu `Spacing.xaml`. Hneď pri prvom spustení
  našiel 9 hodnôt mimo mriežku, o ktorých som nevedel.

Kumulatívne od 0.9.9.4: **172 × 833 → 168 × 650 px**, výška **−22 %**, plocha **−24 %**,
nadpisov 7 → 4, žiadny scrollbar v žiadnej kombinácii, a ani jeden cieľ pod 30 px.

## 0.9.9.7 – 2026-07-22

**Sedem sekcií na štyri. Panel 833 → 664 px a scrollbar zmizol úplne.**

- **KRESLENIE + ANOTÁCIE → NÁSTROJE.** Oboje je ten istý úkon – vyber vec a nakresli ju –
  a rozdelenie stálo celý blok nadpisu za rozlíšenie, ktoré používateľ nikdy nemusí robiť.
- **ÚPRAVY + REŽIM → AKCIE.** Hickov zákon počíta skupiny; sedem bolo nad hranicou 5±2,
  ktorej mala tá istá kategorizácia pomáhať. Teraz sú štyri.
- **Priehľadnosť sa presunula pod ČIARU.** V modeli sedí v `Style` hneď vedľa `StrokeWidth`
  a `StrokeColor`, takže je to vlastnosť ťahu, nie samostatná téma. Vlastný nadpis stál blok
  výšky na informáciu, ktorú údaj „100 %" vedľa posuvníka hovorí aj tak.
- **Posledný scrollbar je preč.** Kombinácia „comfortable + rozšírený panel" ešte v 0.9.9.5
  potrebovala 1208 px na 1032 px obrazovke – fyzicky nemožné. Po zoštíhlení sa zmestí:
  **281 × 977 px, bez scrollbaru.** Všetky štyri kombinácie veľkosti a úrovne sú teraz čisté.

Kumulatívne oproti 0.9.9.4 (merané cez UIA, nie odhad): **172 × 833 → 168 × 664 px**,
výška −20 %, plocha −22 %, nadpisov 7 → 4, a ani jeden klikací cieľ pod 30 px.

## 0.9.9.6 – 2026-07-22

**Panel je o 13 % nižší a ikony sú pritom väčšie.**

Zmerané cez UIA pred aj po, nie odhadnuté: **172 × 833 → 168 × 722 px**, plocha −15 %.

- **Ikona 15 → 18 px, tlačidlo 33 → 30 px.** Glyf vypĺňal tlačidlo len na 45 %, takže ikona
  v ňom plávala a panel platil za prázdny prstenec okolo nej. 18-v-30 je 60 % – pomer, na ktorom
  sa zhodnú Fluent aj Material. Ikony sú **čitateľnejšie** a riadok je o 3 px nižší. Podľa
  Fittsovho zákona stojí zmena 33 → 30 px asi 3 % času mierenia, čo je pod prahom vnímania.
- **Paleta 3 → 4 stĺpce, políčko 24 → 20 px.** Dvanásť farieb kleslo zo štyroch riadkov na tri
  (−42 px). Farba je predpozorný cieľ – oko ju nájde podľa odtieňa bez čítania – takže nepotrebuje
  rovnakú bunku ako monochromatická ikonka.
- **Zjednotený vertikálny rytmus.** Medzery boli 4/6/7/8/17/19 px bez pravidla. Separátor mal
  5 px nad aj pod 1 px linkou (11 px na nakreslenie vlásočnice), nadpis mal rovnakú medzeru nad
  aj pod sebou, hoci patrí k tomu, čo nasleduje (Gestalt: blízkosť). Teraz 3/4 px.
- **Pás „viac nástrojov" 33 → 22 px.** Pri šírke 116 px je cieľ podľa Fittsa aj tak obrovský,
  výška bola čistá réžia.
- **Okraj panela 8,6 → 6,5 px.**
- Vedľajší efekt: **rozšírený panel spadol z 1008 na 908 px**, takže sa na Full HD zmestí
  s väčšou rezervou.

## 0.9.9.5 – 2026-07-22

**Preložený pomocník, koniec scrollovania a čitateľné štýly čiar.**

- **Okno Pomocníka je konečne preložené.** Bolo celé obalené v `Loc.T`, ale osem reťazcov
  v slovníku chýbalo – a chýbajúci kľúč sa nehlási chybou, len ticho vypíše slovenský originál.
  Navyše nadpis okna a pätička boli natvrdo po slovensky (riadok s verziou dokonca prepisoval
  lokalizovaný text nastavený o riadok vyššie). Doplnené do EN/DE/CS/PL a poistené testom.
- **Panel už nescrolluje.** Voľba šírky bola pokazená v troch nezávislých veciach naraz:
  výška „chrome" nad scrollerom sa merala z `DesiredSize`, ktorý je pred prvým vykreslením
  nula; `Measure` na paneli s mierkou vracia veľkosť **už zoškálovanú**, takže sa porovnávala
  s limitom v iných jednotkách; a hľadanie najlepšej šírky sa zastavovalo pri prvom nezlepšení,
  hoci výška nie je monotónna – **širší panel býva vyšší**, lebo paleta farieb má pevné tri
  stĺpce a v širšom paneli jej narastú políčka. Panel sa preto rozťahoval na 693 px bez toho,
  aby si tým čo i len o pixel pomohol. Teraz sa premeria každá šírka a vyhrá tá najužšia,
  ktorá sa naozaj zmestí.
- **Štýly čiar sú jednoznačné.** Plná / čiarkovaná / bodkovaná / os sa kreslili 15 px ikonkou
  stratenou v štyrikrát širšom tlačidle. Teraz je to skutočná čiara cez celú šírku tlačidla
  a vzor sa dá čítať aj ladiť (bodkovaná sú naozaj bodky, nie drobné čiarky).
- **„Viac nástrojov" je pás na celú šírku riadku.** Otvára celú druhú úroveň panela, čo je väčšia
  vec než ktorákoľvek jednotlivá ikona – široký pás sa číta ako držadlo zásuvky, nie ako ďalšie
  štvorcové tlačidlo v mriežke. Ozubené koliesko ostáva vpravo v normálnej veľkosti.

## 0.9.9.4 – 2026-07-22

**Jazyk sa pri prvom spustení riadi Windowsom.**

- Po čerstvej inštalácii appka nabehne v jazyku Windowsu, ak ho vieme (EN/DE/SK/CS/PL);
  inak v angličtine. **Vlastná voľba vždy vyhráva** – aj keď sa jazyk Windowsu neskôr zmení.
- Podstatná zmena je v nastaveniach: `Language` už nemá default `"en"`, ale prázdny reťazec.
  S `"en"` sa nedalo odlíšiť „zvolil som angličtinu" od „nikdy som nevoľil", takže appka
  nemala ako vedieť, či sa vôbec smie riadiť Windowsom.
- Odvodený jazyk sa **neukladá** – kým si používateľ vedome nevyberie, appka Windows ďalej
  sleduje. Kto má jazyk uložený z predošlej verzie, nepocíti žiadnu zmenu.
- Overené testom, ktorý naozaj prepína kultúru vlákna (de-AT → de, cs-CZ → cs, ja-JP → en);
  na anglickom Windowse by inak „funguje to" vyzeralo správne z nesprávneho dôvodu.

## 0.9.9.3 – 2026-07-20

**Čiara: prichytávanie na os a jemnejší Shift.**

- **Čiara sa vždy prichytí na vodorovnú/zvislú os**, keď sa priblíži na pár stupňov –
  nielen náhodou pri objekte. Vtedy sa **rozsvieti kontrastným prstencom** a v popise pri
  kurzore svieti uhol **0° / 90° / 180° / 270°**, takže „je táto čiara rovná?" prestáva
  byť odhad. Vypnúť sa dá držaním **Alt** (bez magnetov) a magnet objektu má prednosť.
- Prstenec je **azúrový** pre takmer všetky farby (jeden naučiteľný snap signál); prepne sa
  na **jantárový** len keď je samotná čiara modro-azúrová, kde by azúrové halo s čiarou splynulo.
- **Shift = krok po 5°** (nie 15°) – zjednotené: platí pri kreslení aj pri úprave
  koncového bodu existujúcej čiary. (Kreslenie už 5° malo; úprava bodu bežala na
  starom 15° defaulte.)
- Kardinálna matematika je v `GeometryUtil` a pokrytá 9 testami (negácia osi Y je presne
  to, čo sa ľahko pomýli) – smer aj uhol readoutu overené.
- **Čeština a poľština.** Preklady sa presťahovali z jedného natvrdo písaného C# slovníka do
  samostatných JSON súborov (`Resources/Lang/*.json`, embedované v exe). Starý tvar `(en, de)`
  sa nedal rozšíriť bez prepísania všetkých ~500 riadkov; teraz je nový jazyk **jeden súbor
  plus jeden riadok** v katalógu a UI kód sa nemení vôbec. Test kontroluje, že každý ponúkaný
  jazyk naozaj prekladá, takže sa nedá vydať jazyk, čo by ticho ukazoval slovenčinu.
- **Nastavenia pod jednu ikonu.** Tlačidlá „?" a jazykový kód zmizli z panela – Pomocník, Jazyk
  a Veľkosť panela sú v menu pod ozubeným kolieskom (o dve trvalé ikony menej). Aktuálny jazyk
  sa ukazuje na riadku Jazyk, takže sa informácia nestratila.
- **Export má ikonu diskety so šípkou** – šípka z tácky vyzerala ako „zdieľať", nie „zapísať
  súbor". Šípka je to, čo ho pri 15 px odlíši od Uložiť projekt (tiež disketa).
- **Opravená výnimka pri každom štarte.** Rozsvietenie pilulky animovalo štetec, ale po 1250 ms
  sa animácia rušila na tom štetci, ktorý bol práve nasadený – a ten už býval zamrznutý zo
  slovníka zdrojov, čo hodilo `InvalidOperationException` do `error.log`. Animácia sa teraz ruší
  na tom istom štetci, na ktorom bola spustená.
- **Fialová vodiaca čiara aj kolmo na objekt.** Doteraz vedela držať len vodorovnú a zvislú os
  sveta, takže pri šikmej čiare sa kolmica cez jej stredový bod nedala vôbec vyjadriť. Objekty
  teraz nesú svoj **hlavný smer** (čiara ten svoj, obdĺžnik/elipsa smer svojho rámu vrátane
  otočenia) a každý získaný bod ponúka štyri vodiace osi: vodorovnú, zvislú, **smer objektu a
  kolmicu naň**. Pri neotočenom obdĺžniku sa smer objektu zhoduje s vodorovnou a zlúči sa, takže
  doterajšie správanie zostáva nedotknuté.
- **Magnet vodiacej čiary ťahá jemne silnejšie** – tolerancia z 10 na 14 px. Držať os počas
  dlhého ťahu potrebuje viac vôle než trafiť samotný bod.
- Matematika koľajníc je v `GeometryUtil` a pokrytá 9 testami (kolmica cez šikmú čiaru,
  priesečník dvoch osí, zlúčenie rovnobežných, degenerovaná čiara).
- **Trackovanie (fialová vodiaca čiara) drží viac bodov naraz.** Doteraz si pamätalo len
  jeden referenčný bod, takže keď na pridanie ďalšej čiary „zavadil" iný bod, os pôvodného
  bodu sa stratila a vodiaca čiara zmizla. Teraz sa získané body pridávajú (nie prepisujú),
  takže zarovnanie prežije aj s viacerými objektmi – a keď si na X jedného bodu a Y druhého,
  koniec sadne presne na ich priesečník (dve vodiace čiary).

## 0.9.9.2 – 2026-07-20

- **Farebné swatche 3 na riadok** (bolo 5) a väčšie (18 → 24 px), vzdušnejšia paleta,
  ľahšie sa trafí; „…" (vlastná farba) narástla s nimi.
- **Zámknutý nástroj (dvojklik) už nezväčšuje okno.** Žltý prstenec „na viac použití"
  zostáva rovnaký, ale kreslí sa ako overlay – doteraz zhrubol okraj tlačidla z 1 na 2 px,
  čo cez mriežku a `SizeToContent` natiahlo celé okno o pár pixelov a ešte ho posunulo.

## 0.9.9.1 – 2026-07-20

**Panel ďalej rozdelený a doladený z reálneho používania.**

- **COLOR & STROKE rozdelené na tri skupiny** – **COLOR** (farba), **STROKE** (čiara)
  a **OPACITY** (priehľadnosť), každá s vlastným nadpisom, nech nie je všetko v jednej kope.
- **Skupina COLOR vedľa seba, nie nad sebou** – vľavo terče **obrys / výplň / bez výplne**
  ako väčšie ikony v stĺpci, vpravo vedľa nich mriežka farieb.
- **Predvoľby hrúbky sa označia modrou** – aktívna hrúbka je teraz zvýraznená rovnako ako
  aktívny typ čiary (predtým bola aktívna, ale bez vizuálnej značky).
- **Väčšie šípky ▲▼ pri hrúbke** – spinner v poli „px" má väčší terč na klik, ľahšie sa trafí.
- **Skupina „viac / ? / jazyk" zarovnaná doprava** – vizuálne oddelená od funkčných nástrojov.
- **Rozbalené okno spoľahlivo bez posuvníka** – počet stĺpcov sa dopočíta tak, aby sa obsah
  vždy zmestil na výšku pracovnej plochy; okno nikdy nepresiahne obrazovku (predtým sa pri
  štarte vo veľkom režime nestihlo prepnúť na viac stĺpcov a naskočil vertikálny posuvník).

## 0.9.9 – 2026-07-20

**Panel FARBY & ČIARA prestavaný, širšie rozbalené okno, Format Painter.**

- **Hrúbka a typ čiary v dvoch stĺpcoch vedľa seba** – vľavo predvoľby hrúbky
  (2/4/8/**14** px, pribudol štvrtý, nech oba stĺpce lícujú), vpravo typ čiary
  (plná/čiarkovaná/bodkovaná/os), a **presné číslo v px cez celú šírku pod nimi**.
  „Aká hrubá / aký vzor / presná hodnota" sa číta lepšie než pôvodné poskladané riadky.
- **„Bez výplne" sa presunulo k terču Výplň** – už nie je prvý štvorček v palete, ale
  sedí vedľa terča Výplň (a zobrazí sa len keď je Výplň aktívny terč, nech sa šírka
  nemení). Terče obrys/výplň sú o kúsok väčšie ako farebné štvorčeky.
- **Rozbalené okno je o ikonu širšie a má 5 stĺpcov namiesto 4** – menej riadkov,
  takže stĺpec je nižší a **vertikálny posuvník už nevyskočí** na bežných rozlíšeniach
  (a keď aj, ikony si držia veľkosť, nezúžia sa). Kompaktné okno ostáva 150 px / 4 stĺpce.
- **Format Painter (kopírovanie formátu ako v PowerPointe)** – nové tlačidlo valčeka v
  sekcii ÚPRAVY. Vyber objekt → klik prenesie jeho štýl na ďalší kliknutý objekt;
  **dvojklik** = na viac objektov (Esc = koniec), **pravý klik** = zaškrtávače, čo sa
  kopíruje (farba, výplň, hrúbka, typ čiary, zaoblenie, šípky). Každé prenesenie je krok
  histórie; voľba masky sa pamätá.
- **Kratšie názvy exportov** – z `Edivect_region_2026-07-15_12-37-34.png` je
  `2026-07-15_12-37-34.png`. Preč názov programu aj slovo „region" (výrez je stále len
  snímka); prefix ostáva len tam, kde ide o iný druh súboru (`annotations_`, `monitor2_`,
  `comments_`). Dátum s pomlčkami zostáva – triedi sa chronologicky a je filesystem-bezpečný.

## 0.9.8.1.8 – 2026-07-17

- **Predvoľby hrúbky majú rovnako veľký terč.** Najtenšia (2 px) bola ~12 px pásik – tlačidlo
  sa zmenšovalo podľa obsahu, takže čiara vyžadujúca najväčšiu presnosť mala najmenší terč.
  Všetky tri majú pevných 24 px na výšku bez ohľadu na to, čo kreslia vnútri.
- **Číslo hrúbky sa edituje na jeden ťah:** pole berie **len číslice** (IME vypnuté) a klik
  doň **označí celé číslo** – napísanie „6" JE zmena, žiadne mazanie starej hodnoty. Kým je
  pole aktívne, druhý klik už normálne umiestni kurzor.
- **Pravý klik na nakreslenú čiaru/šípku → podmenu Šípky:** na začiatku / na konci / na oboch
  / bez šípok, so zaškrtnutím aktuálneho stavu. Cez históriu (undo funguje) a platí aj na
  čiary vnútri skupiny. Panel nastavuje budúce čiary; toto mení tú pod kurzorom.

## 0.9.8.1.7 – 2026-07-17

**Ďalšie kolo úprav panela z reálneho používania** (kompakt aj rozbalený stav overené screenshotmi):

- **Paleta bez diery + nová farba.** Prázdna bunka pred červenou bol skrytý slot „bez výplne" –
  rezervoval si miesto z čias WrapPanelu, čo v pevnej mriežke 6 stĺpcov nemá zmysel (teraz
  `Collapsed`). Doplnená **sivá** (#8A8F98) – neutrálne značky cez rušné snímky. Mriežka je
  opäť presne 2 × 6.
- **OK/NOK pečiatky už nie sú orezané** – odznaky boli širšie než bunka mriežky; bočné
  odsadenie tých dvoch tlačidiel znížené zo 7 na 2 px.
- **Zvýrazňovač, tretí pokus o ikonu:** skosená fixka v švihu (tvar, ktorý používa každý
  kancelársky balík) – hrubé šikmé telo, klinová pätka, kúsok natretej čiary.
- **Predvoľby hrúbky pod sebou** – tri pásiky rastúcej váhy cez celú šírku čítajú sa ako
  stupnica (tri štvorčeky vedľa seba nie); editovateľné číslo v px zostáva vedľa.
- **Export je v kompaktnom paneli** – sekcia REŽIM: Kresliť · Freeze · Oblasť · **Export**
  (presne 4 bunky). Session končí exportom; nemá čo robiť len v rozšírenej úrovni.
- **Malé okno reaguje na hover aj menovkou** – rámik „Edivect" zmodrie a text sa rozsvieti
  spolu so zmenou priehľadnosti okna.

## 0.9.8.1.6 – 2026-07-17

**Šesť úprav panela z reálneho používania** (všetko overené screenshotom):

- **Priehľadnosť cez celý riadok** – posuvník sa rozťahuje na šírku panela, číslo je ukotvené
  vpravo. Doteraz zaberal len začiatok riadku.
- **Hrúbka čiary bez vyskakovacieho menu** – tri predvoľby (2/4/8 px) ako čiary rôznej hrúbky
  a na konci riadku **editovateľné číslo v px** (písanie, šípky, koliesko; 1–40 px). Prvé
  reálne nasadenie komponentu `NumericInput` z knižnice.
- **Štýly čiar ako ozajstné ikony** – plná, čiarkovaná, bodkovaná a os sú nakreslené ako tá
  čiara samotná, nie typografické znaky (― – – ···), ktoré boli na tlačidle nečitateľné.
- **Paleta v pravidelnej mriežke 6 stĺpcov** – „bez výplne" + 10 farieb + „…" (vlastná farba)
  = presne 12 buniek, dva plné riadky. Vypadol zvislý oddeľovač nedávnych farieb, ktorý
  rozbíjal rytmus; nedávne tečú v rovnakej mriežke. Doteraz bola paleta zarovnaná doľava
  s dierami.
- **Zvýrazňovač má jednoznačnejšiu ikonu** – zvýraznený TEXT (riadky s pásom cez stredný),
  nie fixka, ktorá na 15 px vyzerala ako každé iné pero.
- **Obojsmerná šípka na jeden klik** – pravý klik na Šípku má novú položku „◁▷ Šípka na oboch
  koncoch" (doteraz bolo treba zaškrtnúť dva prepínače).
- **„Viac nástrojov" vyzerá ako ovládanie panela, nie ako nástroj** – prerušovaný (ghost)
  rámik namiesto plného boxu.
- Oprava z auditu: nástrojové tlačidlá mali stále 23 px na výšku (WCAG oprava kedysi trafila
  len obyčajné tlačidlá) – zjednotené na 31 px.

## 0.9.8.1.5 – 2026-07-17

**Tvary zlúčené do Kreslenia + dizajnový audit s opravami.**

- **KRESLENIE a TVARY sú jedna prioritná sekcia** (prvá v paneli): výber, pero, zvýrazňovač,
  čiara, šípka, obdĺžnik, elipsa, oblúk – presne 8 nástrojov, dva plné riadky bez dier.
- **Audit (štýl Microsoft Design Review), nálezy opravené:**
  - *Vysoká:* 21 natvrdo zapísaných hex farieb v paneli porušovalo pravidlo vlastného
    dizajnového systému („žiadny hex v ovládačoch"), vrátane **duplicitnej definície
    `AccentTool`**, ktorá tienila token z Brushes.xaml. Všetko nahradené tokenmi; pribudlo
    9 sémantických (soft warning/danger výplne, `ToolLock` prstenec, `PrimaryLight` okraj,
    `DangerText`). V paneli zostal jediný hex: čierna tieňov (zámer, zhodné s Shadows.xaml).
  - *Vysoká:* panel nikdy nenastavoval písmo, takže Segoe UI Variable z foundation sa
    v skutočnosti nepoužívalo – teraz ho dedí celý panel z koreňa.
  - *Stredná:* stavové farby zjednotené (fajka/krížik/OK/NOK cez BrushSuccess/BrushDanger);
    `OpacityLabel` mal náhodnú one-off farbu → BrushTextSecondary; pilulka na tokenoch.
  - *Overené ako v poriadku:* DPI PerMonitorV2 v manifeste, kontrast nadpisov sekcií
    ~5,5 : 1 (AA), klikacia plocha nad WCAG 24 px. Touch ciele pod 40 px – vedomý kompromis
    nástroja pre myš.

## 0.9.8.1.4 – 2026-07-17

**Leštenie UX + lokalizácia nadpisov.**

- **Nadpisy sekcií sa prekladajú** do EN/DE (DRAWING/SHAPES/…, ZEICHNEN/FORMEN/…). Lokalizácia
  Labelov pridaná k existujúcemu mechanizmu prekladu tooltipov; overené naživo (EN).
- **Mikrointerakcie na tlačidlách – jeden zdieľaný `ButtonBase` štýl** (`BtnBaseFx`), z ktorého
  dedia všetky (žiadna duplicita): plynulý **hover tieň** (nábeh 160 ms), jemný **press-scale**
  (0,94), **kurzor ruka**, **focus prstenec** pre klávesnicu, a **meno pre čítačky** brané
  z tooltipu (`AutomationProperties.Name`). Per-button inštancie cez `x:Shared="False"`, takže
  animácia jedného tlačidla nehýbe ostatnými.
- **Časovanie tooltipov** zjednotené (zobrazenie po 450 ms, medzi 120 ms, výdrž 20 s); tvar,
  tieň a fade dáva komponent z knižnice.
- **Prístupnosť:** mená pre čítačky, klikacia plocha nad WCAG 24 px, tmavý kontrast z tokenov,
  DPI 100–200 % cez ScrollViewer + posun okna.

Klávesnica zámerne ponechaná na **skratkách** (V/P/L/A/R…): tlačidlá panela sú `Focusable=False`,
aby fokus zostal na plátne a jednoklávesové skratky fungovali – dať ich do Tab poradia by ich
rozbilo. Focus prstenec je pripravený pre prvky, ktoré fokus dostanú.

## 0.9.8.1.3 – 2026-07-17

**Redizajn panela – pomenované sekcie.** Len rozloženie; žiadna logika sa nemenila a žiadna
funkcia nezmizla (overené: všetkých 60+ naviazaných prvkov a handlerov zachovaných, build
by inak spadol). Odfotené a odladené naživo.

- **Jasné sekcie s nadpismi**, v poradí podľa frekvencie: KRESLENIE → TVARY → ANOTÁCIE →
  FARBY & ČIARA → ÚPRAVY → REŽIM, potom sekundárne MERANIE → PEČIATKY → TABULE & PORADIE →
  SÚBOR & NÁSTROJE. Nadpisy cez komponent `SectionHeader`.
- **Sekundárne sekcie sú zbaliteľné** cez „Viac ▾▾": v kompaktnom režime sa celé skryjú
  (nie polovičné mriežky ani osirené nadpisy), takže výška klesne (712 px kompakt vs ~1000
  rozbalené). Najčastejšie nástroje sú hore, menej časté nižšie a skryté.
- **Konzistentná mriežka** 4 stĺpce, rovnaká veľkosť/rádius/odsadenie tlačidiel (zachované
  overené štýly s oranžovým akcentom nástroja, modrým akcentom režimu a amber prstencom zámku).
- **Moderný opacity slider** (komponent `ModernSlider` – veľký palec) a **moderný tooltip**
  (zaoblený, tieň, fade) sa aplikovali naživo.
- **Responzívne na DPI 100–200 %:** sekcie sú v `ScrollViewer` s `MaxHeight` podľa pracovnej
  plochy, takže stĺpec nikdy neprerastie obrazovku; po rozbalení sa okno posunie hore, aby
  spodná sekcia neprečnievala (chyba nájdená screenshotom a opravená).

Známe: nadpisy sekcií sú zatiaľ len po slovensky (nelokalizujú sa do EN/DE) – doplní sa.

## 0.9.8.1.2 – 2026-07-17

**Component Library (bez aplikácie na toolbar).** Znovupoužiteľné vlastné ovládače postavené
celé na dizajnovom foundation – každý je `ControlTemplate` riadený tokenmi, žiadny si nedrží
vlastnú farbu, rozmer či rádius. Zaregistrované app-wide, ale **keyed** (opt-in), takže zatiaľ
nič neprekresľujú. Prehľad v [Resources/COMPONENTS.md](src/Edivect/Resources/COMPONENTS.md).

- **Tlačidlá:** `IconButton`, `PrimaryButton`, `SecondaryButton`, `ToggleIconButton`,
  `ColorButton`, `IconLabel`. Jeden zdieľaný `ControlTemplate` pre všetky – varianty sa líšia
  len vlastnosťami, ktoré štýl nastaví (žiadna duplicita). Stavy Normal/Hover/Pressed/Disabled
  cez VisualStateManager (~100 ms), Focused len pri **klávesovom** fokuse (modrý prstenec),
  Checked = akcentová výplň. 10 px rádius, mäkký tieň, presné centrovanie, rovnaké odsadenie.
- **Kontajnery:** `ToolbarSection` (titulkovaná karta), `SectionHeader`, `Separator` (vodorovný/zvislý).
- **Vstupy:** `ModernSlider` (veľký palec rastúci pri hoveri, vyplnená dráha, prístupný z klávesnice),
  `Dropdown` (zaoblený popup s tieňom), `NumericInput` – **skutočný custom control**
  ([Controls/NumericInput.cs](src/Edivect/Controls/NumericInput.cs)): písanie, klik/podrž na
  ▲▼, koliesko, orezáva na rozsah.
- **Tooltip:** moderný – zaoblený, mäkký tieň, jemný fade-in. Jediný **implicitný** (nahrádza
  default Windows tooltip všade), lebo o to pri tooltip komponente ide.
- **Color picker:** `ColorButton` swatche s vybraným stavom (prstenec), hoverom a fokusom.

**Verzia:** produktová (zobrazená) `0.9.8.1.2`, súborová `0.9.8.2`. Päťsegmentová verzia je
autoritatívna a nesie priestor na pomalé pred-1.0 kroky; štvorsegmentová je jej tieň, aby sa
buildy dali rozlíšiť.

## 0.9.8.1.1 – 2026-07-17

**Design Foundation (bez redizajnu ovládačov).** Centralizovaný dizajnový systém v štýle
Fluent – všetky farby, veľkosti, rádiusy, tiene, písmo a animácie na jednom mieste, žiadny
ovládač si nedrží hex ani magické číslo.

- **Nový priečinok `Resources/`** s deviatimi slovníkmi: `Colors`, `Brushes`, `Typography`,
  `Spacing`, `Radius`, `Shadows`, `Animations`, `Icons`, `Controls`. Zlúčené app-wide v
  `App.xaml` v poradí závislostí. Popis a pravidlá v [Resources/README.md](src/Edivect/Resources/README.md).
- **Sémantické tokeny.** Farby žijú ako `Color` v `Colors.xaml` (Primary, Accent, Success,
  Warning, Danger, Background, Surface/Surface2/Hover, Border/BorderLight, Text
  Primary/Secondary/Disabled, Selection, Focus), z nich `SolidColorBrush` v `Brushes.xaml`.
- **Jeden zdroj pravdy.** Ikony (53 geometrií) a tmavý theme kontextového menu presunuté z
  `App.xaml` do `Icons.xaml` / `Controls.xaml`; farby panela (`PanelBg`, `BtnBg`, `Accent`,
  `Fg`…) presunuté z `ToolbarWindow.xaml`. Staré kľúče zostávajú ako **premostenie** na nové
  tokeny, takže ovládače fungujú bez zmeny – retirujú sa postupne pri migrácii.
- **Typografia** Segoe UI Variable → Segoe UI → Inter; šesť rolí Title…Small.
- **Zjednotená značková modrá** na `#2D7DF6` (panel mal lokálne `#3B82F6`).
- Ovládače sa **zámerne neredizajnovali** – toto je len základ.

**Verziovanie:** prechod na jemné pred-1.0 kroky. `AssemblyVersion`/`FileVersion` má strop na
štyroch čísliciach (`0.9.8.1`), preto piaty segment `0.9.8.1.1` nesie `InformationalVersion`
(zobrazí sa ako Product version). Odteraz pribúda pomaly a nikdy sa nepriblíži k 1.0.

## 0.9.8 – 2026-07-17

**Zarovnaný stĺpec – koniec rozhádzanosti.**

- **Skupina Viac / Help / Jazyk je hneď pod « ✕**, v hlavičke okna. Je to skupina *o paneli*
  (koľko z neho vidno, pomoc, jazyk), nie o kreslení, tak patrí k ovládaniu okna, nie medzi
  nástroje.
- **Päť mriežok akcií sa zlialo do dvoch.** Predtým to bolo päť samostatných mriežok (4, 5,
  7, 4 a 3 tlačidlá) – **päť nedoplnených posledných riadkov** pod sebou, presne ten dojem
  neporiadku. Teraz sú akcie jedna súvislá mriežka (5 riadkov po 4) a nástroje druhá, obe
  zarovnané po oboch okrajoch.
- **Menej liniek.** Deväť vodorovných oddeľovačov na 140 px širokom stĺpci samo o sebe robilo
  neporiadok; sú štyri, len medzi hlavnými skupinami.
- **Riadky mriežky dýchajú** – okraj tlačidiel bol len vodorovný (`2,0`), takže riadky sa
  lepili na seba; teraz `2` na všetky strany.

## 0.9.7 – 2026-07-17

- **Ikony sú konečne mriežka.** Rozloženie sa lámalo podľa šírky jednotlivých tlačidiel:
  tie s popiskom („px") alebo so šípkou menu boli širšie, takže každý ďalší riadok sa zlomil
  inde – odtiaľ tá rozhádzanosť. Skupiny sú teraz `UniformGrid` so **4 rovnakými stĺpcami**,
  takže bunka je rovnaká bez ohľadu na obsah. Skryté tlačidlá mriežka preskakuje, takže
  krátka úroveň nemá diery.
- **Popisky idú do rohu ikony,** nie vedľa nej (šípky menu pri Obdĺžniku, Oblúku, Značke,
  Kóte; „px" pri Mierke; ▾ pri Exporte). Informácia zostáva, bunka zostáva štvorcová.
- **Zbaliť « a Ukončiť ✕ sú vpravo hore,** v hlavičke s názvom appky – tam ich Windows dáva
  tridsať rokov, takže sa to netreba učiť. Medzi nástrojmi to boli len ďalšie dve tlačidlá
  v mriežke, a práve tie dve nechceš trafiť omylom. Správanie sa nemenilo.
- **Magnet na okraje obrazovky.** Okno (pilulka aj obe úrovne panela – je to jedno okno) sa
  pri priblížení na 14 px prisaje k okraju pracovnej plochy. Rieši sa cez `WM_MOVING`, takže
  magnet cítiť **počas** ťahania, nie až po pustení. Rohy z toho vypadnú samé (X a Y sa berú
  nezávisle) a panel úloh je z pracovnej plochy vylúčený, takže sa okno nikdy neschová zaň.

## 0.9.6 – 2026-07-17

**Panel je zvislý stĺpec, nie vodorovná lišta.**

- **Stĺpec pri ľavom okraji**, na výšku vycentrovaný (nameraných 158 × 639 px v plnej úrovni).
  Tlačidlá sa zalamujú do skupín oddelených vodorovnými linkami. Šírka je pevná, takže stĺpec
  nikdy nemení tvar podľa toho, koľko tlačidiel je práve vidieť.
- **Zmizol 88 px odstup zhora.** Bol tam len preto, aby sa vodorovná lišta vyhla plávajúcim
  ovládačom hovoru z Teams, ktoré sedia hore v strede. Stĺpec pri boku sa nemá čomu vyhýbať,
  takže horný okraj zostáva úplne voľný.
- **Prepínač úrovní je dvojitá šípka ▼▼ / ▲▲ namiesto nápisu „Viac".** Slovo bolo treba
  prekladať – a **„Viac"/„Menej" nemalo v `Loc.Map` žiadny záznam**, takže do anglickej aj
  nemeckej verzie odchádzalo natvrdo po slovensky. Dvojitá šípka nepotrebuje jazyk a ukazuje
  smer, ktorým stĺpec naozaj rastie.
- **Oprava nájdená meraním: panel sa umiestňoval podľa veľkosti, ktorú ešte nemal.** Pilulka
  a panel sú jedno okno; poloha sa počítala v okamihu, keď sa obsah práve prepol a `SizeToContent`
  ešte nepremeral, takže systém hlásil rozmer pilulky. Mierka monitora sa tým rátala z fyzickej
  šírky pilulky delenej DIP šírkou stĺpca (214/155 = 1,38 namiesto 1,0) a stĺpec skončil
  zarazený o spodný okraj obrazovky. Rieši `UpdateLayout()` pred meraním.

## 0.9.5.1 – 2026-07-17

- **Prepínač úrovní panela hovorí slovom: „Viac ▾" / „Menej ▴".** Bol to holý glyf **⋯**,
  ktorý medzi pätnástimi rovnako vyzerajúcimi ikonami nečítal nikto – prvá otázka po
  vydaní 0.9.5 bola „kde je tlačidlo na rozbalenie?". Práve toto tlačidlo je jediná cesta
  späť ku všetkému, čo krátky panel poskladal, takže je posledné, ktoré si smie pýtať
  vysvetlenie. Šírka je rezervovaná pre dlhší nápis, takže prepnutie úrovne nehýbe radom.

## 0.9.5 – 2026-07-17

Panel sa otvára kratší, vyhladenie pera prestalo byť nezvratné a oblasť exportu sa dá doladiť.

- **Dvojúrovňový panel.** Otvorí sa **krátky** – nástroje, ktorými sa značkovanie začína.
  Tlačidlo **⋯** odkryje zvyšok (tabule, história, vrstvy, šablóny, pripomienky, porovnanie
  verzií, otvorenie projektu, zvýrazňovač, číslované značky, OK/NOK, Focus, poradie výberu)
  a voľba sa pamätá. Nič nezmizlo, len je poskladané. Dôvod: štyridsať podobných ikon vedľa
  seba sa nedá očami skenovať bez ohľadu na to, aké sú veľké.
- **Klikacia plocha tlačidiel spĺňa WCAG 2.2.** Mali 23 px na výšku – o pixel pod prístupnostným
  minimom 24 px. Teraz 31 px; panel sa nezväčšil, je aj tak trojriadkový.
- **Zrušený panel vlastností.** Odkedy panel štýlu ukazuje označený objekt (0.9.4.1), robili
  to isté dvakrát. Odstránený aj s oknom a jeho prepojeniami.
- **Group/Ungroup preč z panela** – zostávajú v pravom kliku a na Ctrl+G / Ctrl+Shift+G, teda
  tam, kde ich robíš: nad niečím označeným.
- **Vyhladenie pera je editovateľné a vratné.** Ťah si drží **surovú stopu**, takže posuvník
  v pravom kliku na ťah ide oboma smermi donekonečna a je v histórii ako každá iná úprava.
  Doteraz vyhladenie pôvodné body prepísalo – jediná deštruktívna operácia v appke, ktorá
  stojí na tom, že značka zostáva editovateľný objekt. Staré súbory bez stopy fungujú:
  uložený ťah sa stane základom.
- **Oblasť exportu sa dá po nakreslení doladiť.** Úchopy aj presun mala odjakživa, ale nástroj
  sa hneď po pustení myši prepol preč, takže boli nedosiahnuteľné. Teraz zostane aktívny,
  kým oblasť existuje; **Q** = hotovo. Zrušenie oblasti vracia nástroj hneď.
- **Hry na celú obrazovku.** Kým exkluzívny fullscreen (hra) alebo prezentačný režim vlastní
  obrazovku, malé okno sa neprepína dopredu ani nepulzuje – to bola príčina preblikávania.
  Zisťuje sa cez `SHQueryUserNotificationState`. Bezokrajové hry nikdy neblikali; sú to bežné
  okná a appka sa nad nimi správa ako predtým.
- **Easter egg:** päť rýchlych ťuknutí na **?** otvorí neutrálnu tabuľu s perom a ohodnotí
  kruh nakreslený od ruky. Hodnotí sa **surová stopa** – hra vyhratá zvýšením vyhladenia by
  nebola hra. Kruh sa preloží Kåsovou metódou (priemer bodov nie je stred, keď ruka spomalí).
- **Zrušená voľba „Zaoblené rohy" pri Obdĺžniku** (z 0.9.4.2).

## 0.9.4.2 – 2026-07-17

- **Oprava: pravý klik na nakreslený objekt zhodil veľké okno.** Panel sa v skutočnosti
  nikdy neschoval – **prepadol pod plátno**. Menu sa ukotvuje na celoobrazovkové plátno
  a tým ho Windows vytiahne nad panel, ktorý je inak navrchu. Vracal som poradie okien
  až pri **zavretí** menu – lenže ty ho máš pred očami práve vtedy, keď je **otvorené**.
  Teraz sa vracia už pri otvorení. (Tá istá príčina ako kedysi pri Texte a pri Rozmazaní.)
- **Malé okno pulzne, aj keď je práve aktívne.** Klik na ikonu v paneli úloh na už
  aktívnom okne je pre Windows pokyn „minimalizuj ma" – žiadna aktivácia teda
  neprebehla a appka mlčala presne vtedy, keď si ju hľadal. Malé okno sa nemá kam
  minimalizovať, takže pokyn odmietne a namiesto toho pulzne rámom.
- **Zrušená voľba „Zaoblené rohy" pri Obdĺžniku.** Bola to len predvoľba, ktorá zaoblenie
  dopočítavala z veľkosti – a rádius aj tak nastavíš priamo kolieskom alebo žltým úchopom,
  na hocijakom obdĺžniku aj spätne. Dve cesty k jednej veci, z toho jedna slabšia. Pravý
  klik na Obdĺžnik už nemá menu; odstránené aj nastavenie `RectRounded` a jeho ukladanie.

## 0.9.4.1 – 2026-07-17

- **Štýl v paneli ukazuje označený objekt, nie „aktuálne pero".** Keď klikneš na
  čiaru, ťah pera či hocičo iné, hrúbka, farba, výplň, priehľadnosť aj štýl čiary sa
  **hneď prepíšu na jeho hodnoty**. Doteraz panel ukazoval pero aj vtedy, keď si tými
  ovládačmi menil označený objekt – čiže klamal a nedalo sa z neho vyčítať, čo klik
  spraví. Bez výberu ukazuje pero, teda to, čím sa chystáš kresliť. Pri viacnásobnom
  výbere ukazuje prvý objekt (obvyklá konvencia).
- **Vyhladenie ťahu je posuvník 0–10**, nie tri pevné stupne. Pravý klik na Pero →
  posuvník so živým popisom (0 = presne ako kreslím … 10 = silné). Číslo **je** počet
  vyhladzovacích prechodov, takže škála nie je len nálepka: dvojnásobok naozaj
  znamená dvojnásobnú prácu. Predvolené 3 (pôvodné „jemné").
- Nové testy: dial je **monotónny** (vyššie číslo nikdy nie je roztrasenejšie – celý
  sľub posuvníka) a **orezáva sa** (ručne upravený `settings.json` s nezmyslom nepadne).

## 0.9.4 – 2026-07-17

**Vyhladenie ťahu pera**

Ťah sa doteraz kreslil ako lomená čiara cez **surové** polohy myši, takže každé
trhnutie ruky v ňom zostalo ako roh. Kreslenie myšou je pritom roztrasené vždy –
myš nie je pero.

- Po pustení tlačidla sa ťah **vyčistí**: tremor sa odfiltruje a čiara sa zaoblí.
  Počas kreslenia ťah verne sleduje kurzor (aby bol odozvový) – upratuje sa až na konci.
- **Pravý klik na Pero** = úroveň: *žiadne (presne ako kreslím)* / **jemné (predvolené)** / *silné*.
  Platí aj pre zvýrazňovač; voľba sa pamätá.
- Ovplyvní **len nové ťahy** – čo je na ploche, zostáva presne ako si to nakreslil.
- Ťah zostáva obyčajný bod-po-bode objekt, takže je naďalej plne editovateľný a
  ukladá sa rovnako.

**Ako to funguje** (a čo ma naučili testy): najprv sa tremor **spriemeruje**
(opakovaný vážený priemer troch bodov), až potom sa ťah zjednoduší a zaoblí
Catmull-Rom krivkou. Poradie je podstatné – samotné zjednodušenie (RDP) je
*zjednodušovač, nie odšumovač* a z roztrasenej čiary odstránilo len ~22 % chvenia.
Koncové body sa nehýbu nikdy.

Pokryté 7 testami na simulovanej roztrasenej ruke: jemné odstráni väčšinu chvenia,
silné je pokojnejšie než jemné, „žiadne" nechá ťah bit-presne, koncové body držia,
skutočný roh (L) prežije a krátke ťahy sa nemrvia.

## 0.9.3.4 – 2026-07-17

- **Šípka je vlastné tlačidlo vedľa Čiary.** Presun do pravého kliku (0.9.3.3) bol
  chybný – šípka nie je nastavenie, ale jedna z najčastejších anotácií, a schoval
  som ju pod dva kliky. Teraz je na jeden. Panel tým hovorí to isté, čo klávesnica
  hovorí odjakživa: `L` = čiara, `A` = šípka.
  - **Čiara** = bez hrotov. Klik na ňu **zo šípky spraví čiaru** – aj z označenej.
  - **Šípka** = čiara s hrotom. Klik na ňu **pridá hrot** – aj označenej čiare.
  - **Pravý klik na Šípku** = ktorý koniec (začiatok / koniec / oba / bez šípok).
  - Vnútri je to naďalej jeden nástroj (`ToolKind.Line` + hroty), takže žiadna
    duplicitná logika; obe tlačidlá robia presne to, čo skratky `L` a `A`.
- **Tlačidlo hrúbky ukazuje aj jednotku** („4 px"). Šírka je rezervovaná pre
  najdlhšiu hodnotu, takže zmena hrúbky panelom nehýbe.

## 0.9.3.3 – 2026-07-17

**Panel je o 5 tlačidiel redší, bez straty schopností**

- **Šípky ◁ ▷ presunuté na pravý klik na nástroj Čiara.** Boli stále na paneli, aj
  keď si kreslil obdĺžnik alebo text, kde nemajú význam – patria k čiare, tak sedia
  na jej tlačidle. V menu sú obe hlavičky ako prepínače + „Bez šípok". Skratka `A`
  (šípka na konci) funguje ďalej.
- **Štyri hrúbky zlúčené do jedného tlačidla.** Ukazuje aktuálnu hrúbku ako čiaru
  aj číslo, klik otvorí výber (2/4/8/14 s náhľadom). Zámerne **ľavý** klik, nie
  pravý – nesmie sa to skryť. `+`/`−` a koliesko myši menia hrúbku ako doteraz.

## 0.9.3.2 – 2026-07-17

- **Odstránené predvoľby pera (tlačidlá 1–4).** Boli to holé čísla, ktorých význam sa
  dal zistiť len prejdením myšou, **nedali sa nijako zmeniť ani uložiť** (štyri
  natvrdo vytvorené kombinácie) a robili to isté, čo nástroj + paleta. Panel je
  o štyri tlačidlá redší. Odstránený aj celý mŕtvy kód za nimi: `PenPresetDto`,
  `AppSettings.Presets`, ukladanie do projektu aj tvorba predvolených hodnôt pri
  prvom spustení. Staré `settings.json` a `.smpj` sa načítajú ďalej – pole sa
  jednoducho ignoruje.

## 0.9.3.1 – 2026-07-17

**Oprava: schránka konečne funguje (CLIPBRD_E_CANT_OPEN)**

Predchádzajúce dve „opravy" mierili vedľa, lebo diagnóza bola nesprávna. Meranie
ukázalo pravdu: **schránku nikto nedržal** – zlyhávala samotná **OLE cesta**, cez
ktorú ide WPF `Clipboard`. Na stroji s bežiacim Teams zlyhal `OleSetClipboard`
zakaždým, kým **priama Win32 postupnosť uspela okamžite** – v tom istom momente, na
tom istom vlákne.

- Zápis do schránky ide teraz **priamo cez Win32** (`OpenClipboard` → `EmptyClipboard`
  → `SetClipboardData` → `CloseClipboard`), nie cez OLE. Text ako `CF_UNICODETEXT`,
  obrázky ako `CF_DIB`.
- Bonus: Win32 zlyháva okamžite (žiadne skryté sekundové čakanie ako vo WPF), takže
  opakovanie je lacné a appka nemá ako zamrznúť.
- Zrušené STA vlákno z 0.9.2.3 – nebolo potrebné a problém neriešilo.
- Testy sa robia **na skutočnej schránke** (mock by tento problém nikdy nechytil):
  text prejde tam aj späť vrátane mäkčeňov, prázdny text nespadne, a zápis musí byť
  hotový do 1,5 s. Pôvodná schránka sa po teste vráti späť.

## 0.9.3 – 2026-07-17

**OCR: skutočné rozpoznávanie jazyka**

„Automaticky" už nie je odhad podľa jazyka aplikácie – appka **prečíta výrez každým
nainštalovaným rozpoznávačom a nechá si ten výsledok, ktorý najviac vyzerá ako jeho
vlastný jazyk.**

- Rozhodujú **diakritické znaky, ktoré engine vôbec dokáže vytvoriť**: slovenský
  rozpoznávač vráti „ČÍSLO ŽLTÉ", anglický z tých istých pixelov „CISLO ZLTE" a
  neboduje. Exkluzívne písmená vážia najviac (`ĺľŕô` slovenčina, `ěřů` čeština,
  `ąćęłńśźż` poľština, `ß` nemčina), zdieľané menej.
- Detekcia **z textu po prečítaní by fungovať nemohla** – prvý engine mäkčene už
  zahodí a „CISLO" sa od skutočnej angličtiny nedá odlíšiť. Preto sa číta viackrát.
- Pri čistom ASCII text vyjde rovnako zo všetkých enginov, skóre je nerozhodné a
  vyhrá prvý kandidát – výsledok je tak či tak identický.
- Kandidáti sú obmedzení na 5 (každý je samostatné čítanie), poradie: jazyk
  aplikácie → en, sk, cs, pl, de → ostatné nainštalované.
- Voľba jazyka natvrdo (pravý klik na nástroj) funguje ďalej a je rýchlejšia –
  číta sa len raz.

> **Limit Windowsu, nie appky:** rozpoznať sa dajú len jazyky, ktoré majú vo Windows
> nainštalovaný OCR balík. Menu preto ukáže, ktoré z en/de/sk/cs/pl chýbajú a kde
> sa pridávajú (Nastavenia → Čas a jazyk → Jazyk a oblasť).

- Nové testy: slovenský text sa **bez pomoci** rozpozná ako slovenský (aj s mäkčeňmi),
  čistá angličtina zostane čitateľná.

## 0.9.2.3 – 2026-07-16

**Oprava: aplikácia zamrzla pri Kopírovať (regresia z 0.9.2.1)**

Oprava schránky z 0.9.2.1 problém zhoršila. WPF `Clipboard.SetDataObject` **už sám
vnútri opakuje** 10× po 100 ms – a robí to cez `Thread.Sleep` na UI vlákne, teda až
sekundu blokovania. Navrstvil som naň **ďalších 10 pokusov**, čo sa vynásobilo na
**~10 sekúnd zamrznutého okna**.

- **Neskladáme opakovania na seba.** Vlastný rozpočet je teraz 3 pokusy navyše nad
  ten, ktorý už robí WPF sám.
- **Zápis do schránky beží mimo UI vlákna**, na vlastnom STA vlákne (schránka to
  vyžaduje), a appka ho iba čaká – okno sa medzitým prekresľuje a reaguje.
- Čaká sa cez `await`, nie `Thread.Sleep`.
- Platí pre všetky cesty: OCR text, „Kopírovať do schránky" pre obrázky aj Ctrl+V.
- Testy strážia aj to, aby rozpočet pokusov **zostal malý** – presne tá vlastnosť,
  ktorej porušenie spôsobilo zamrznutie.

## 0.9.2.2 – 2026-07-16

**Oprava: OCR čítalo po anglicky a mrvilo mäkčene**

`TryCreateFromUserProfileLanguages()` vezme **prvý jazyk profilu Windows**, pre ktorý
existuje rozpoznávač – na stroji s angličtinou na prvom mieste teda `en-US`. Anglický
rozpoznávač nepozná á/č/ď/š/ž, takže ich nahradil podobnými písmenami. Slovenský
balík pritom nainštalovaný **bol**.

- **Jazyk sa už nevyberá podľa poradia profilu.** Poradie je teraz: výslovná voľba →
  jazyk aplikácie → profil Windows → angličtina.
- **Pravý klik na nástroj Kopírovať text = výber jazyka** rozpoznávania. Ponúkne len
  jazyky, pre ktoré Windows naozaj má balík, plus „Automaticky". Voľba sa pamätá.
- Okno s výsledkom naďalej ukazuje použitý jazyk – práve podľa toho sa dá zle
  zvolený jazyk odhaliť.
- Nový test dokazuje, že so slovenským rozpoznávačom **prejdú mäkčene** (Č, Ž).

> Pozn.: „Automaticky" sa riadi **jazykom aplikácie**. Ak máš appku v angličtine, ale
> čítaš slovenské obrazovky, vyber jazyk natvrdo pravým klikom.

## 0.9.2.1 – 2026-07-16

**Oprava: „Could not write to the clipboard" (CLIPBRD_E_CANT_OPEN)**

Windows pustí k schránke naraz **len jeden proces**. Teams, synchronizácia schránky
cez vzdialenú plochu aj správcovia schránky ju berú neustále, takže jediný pokus tú
súťaž prehral a spadol s `0x800401D0`. Nič nebolo pokazené – len bolo treba počkať.

- Všetky prístupy k schránke idú cez nový `ClipboardService`, ktorý **skúša
  opakovane** (10× po 100 ms) namiesto pádu na prvý pokus.
- **Tá istá chyba číhala aj inde**, nielen v OCR okne: „Kopírovať do schránky" pre
  obrázky a vkladanie obrázka cez Ctrl+V. Opravené naraz na jednom mieste. Pri
  vkladaní navyše zamknutá schránka už nevyzerá ako „žiadny obrázok".
- Ak by schránka bola zablokovaná aj tak, okno s textom **zostane otvorené** a hláška
  vysvetlí, čo sa deje – text vieš označiť a dať Ctrl+C ručne.
- Retry politiku pokrývajú 3 testy (prežije výpadky, nakoniec sa vzdá a ohlási to,
  na voľnej schránke nečaká zbytočne).

## 0.9.2 – 2026-07-16

**Nová funkcia: Kopírovať text (OCR)**

Nástroj **Kopírovať text** – potiahneš cez text na obrazovke a appka ho prečíta.
Presne pre situácie, v ktorých Edivect existuje a text sa **nedá označiť**:
CAD viewport, cudzia obrazovka cez Teams/RDP, dialóg, ktorý nedovolí kopírovanie,
screenshot v tikete.

- **Text sa najprv ukáže v malom editovateľnom okne**, až potom ide do schránky
  (Ctrl+Enter alebo *Kopírovať*). OCR nie je nikdy 100 % a ticho vložené zlé
  číslo dielu je horšie než nič.
- Keď je obrazovka zmrazená, číta sa **zo zmrazenej snímky** – teda presne z toho,
  na čo sa pozeráš a cez čo si ťahal.
- Výrez sa pred rozpoznaním **3× zväčší**: Windows OCR je stavané na fotené
  dokumenty a text v UI má ~14 px, ktorý by inak čítalo zle.
- Po prečítaní sa nástroj **vráti na predošlý**, ako pri oblasti exportu.
- Nekreslí do dokumentu – iba číta.

**Technicky**

- Engine je **Windows.Media.Ocr**, zabudovaný vo Windows: žiadne stiahnuté modely,
  žiadne dáta navyše, **bez siete a bez loginu** (na rozdiel od Tesseractu alebo
  cloudového OCR).
- `TargetFramework` posunutý na `net9.0-windows10.0.19041.0`; `SupportedOSPlatformVersion`
  zostáva 10.0.17763, takže appka beží aj na starších Windows 10 – len tam OCR
  ohlási, že nie je dostupné. Tú istú hranicu (Windows 10 2004) už appka mala
  kvôli `SetWindowDisplayAffinity`.
- **Portable balík narástol z 59,9 MB na ~65,7 MB** (+5,8 MB) – WinRT projekcie sa
  balia do self-contained exe. Tesseract by pridal desiatky MB plus natívne DLL.
- Rozpoznávanie pokrývajú 3 testy (vykreslí známy text → prečíta ho späť), vrátane
  malého 14 px textu. Na stroji bez jazykového balíka Windows sa preskočia.

## 0.9.1.9 – 2026-07-16

**Panel úloh už nie je súčasťou Edivectu**

Namiesto záplaty z 0.9.1.8 (ktorá je vrátená) je problém odstránený v koreni:
**plocha aplikácie je pracovná plocha monitora, nie celý monitor.**

- **Panel úloh zostáva živý a klikateľný.** Prekrytie Edivectu už cezeň
  nesiaha, takže klik na inú appku dole funguje normálne – appka prejde do
  priepustného režimu a zbalí sa do malého okna, presne ako pri Alt+Tab.
- **Panel úloh sa nikdy nezmrazí ani nedostane do snímky.** Zmrazenie, blur aj
  exporty pracujú s pracovnou plochou, takže zmrazené pozadie sa už nemôže
  rozísť so skutočným panelom úloh (to bola príčina „poskakujúcich ikon").
- Jedno pravidlo drží celý systém pohromade: prekrytie, modelové súradnice,
  snímanie aj export čítajú tú istú `ScreenInfo.BoundsPx`, ktorá je odteraz
  pracovná plocha. Skutočné rozmery monitora zostávajú v `FullBoundsPx` (menovky
  v ponuke Export). Invariant zamykajú testy.

## 0.9.1.8 – 2026-07-16 (vrátené v 0.9.1.9)

- Pokus riešiť poskakovanie ikon stlmením panela nástrojov namiesto jeho skrytia.
  Nahradené čistejším riešením vyššie.

## 0.9.1.7 – 2026-07-16

- **Malé okno sa ohlási aj po spustení aplikácie** – rovnaké pulznutie rámu ako
  pri kliknutí na ikonu v paneli úloh. Appka štartuje zaparkovaná v malom okne na
  45 % priehľadnosti, čo sa na plnej ploche ľahko prehliadne; teraz na seba samo
  ukáže. Pulz sa spustí až keď je okno umiestnené, takže vedie oko presne tam,
  kde naozaj skončilo.

## 0.9.1.6 – 2026-07-16

- **Vrátený obiehajúci variant efektu „kde som"** (skúšaný v 0.9.1.5) – efekt
  zostáva pulzovanie rámu z 0.9.1.4, ktoré vyzeralo lepšie.

## 0.9.1.4 – 2026-07-16

**Bublina prekopaná**

- **Rotačný úchop obieha bublinu okolo ukotvenia** – vyberáš, na ktorej strane
  cieľa bublina sedí. Bublina sa pritom nikdy nenakláňa, takže **text zostáva
  vodorovný a čitateľný**. Shift = po 15°, bez neho magnet na 8 prirodzených
  polôh (po 45°), Alt = úplne voľne.
- **Chvost sa počíta po obvode bubliny**, nie kolmo na lúč. Základňa preto vždy
  leží na obryse (pri diagonále čisto obtočí roh), takže spoj so bublinou
  nezanechá šev ani výbežok v žiadnom zo 360°. Chvost sa navyše zužuje s
  dĺžkou – ďaleká bublina má štíhly chvost.

**Panel**

- **Rozdelený na tri riadky** (režimy/akcie · nástroje · štýl) – druhý riadok bol
  jeden dlhý neprehľadný pás.
- **Prepnutie obrys ↔ výplň už nemení šírku panela** – „bez výplne" má miesto
  rezervované aj keď nie je vidieť.

**Ikony**

- **Pero** je teraz krivka – jednoznačné „kreslenie voľnou rukou" (hrot bol pri
  15 px len škvrna a rovná čiara už patrí nástroju Čiara).
- **Mierka** – stará geometria bola 18×6, takže ju `Stretch=Uniform` v 15×15
  tlačidle stlačilo na ~5 px prúžok. Nové pravítko je na diagonále (štvorcový
  pomer), takže vyplní ikonu a je čitateľné. Značka „px/mm" zostáva.
- **Rozmazanie** – mozaika (hrubé bloky) namiesto drobných bodiek, ktoré sa pri
  15 px zliali. Zodpovedá aj tomu, čo nástroj robí: prekryje citlivé údaje.

**Malé okno**

- **Klik na ikonu v paneli úloh ukáže, kde okno je** – rozsvieti sa na plnú
  viditeľnosť a pulzne jasným rámom (~1 s). Kreslí sa dovnútra okna zámerne:
  vonkajší glow by potreboval priesvitný lem, ktorý by hltal kliky do aplikácie
  pod ním. Rešpektuje systémové nastavenie animácií.

## 0.9.1.3 – 2026-07-16

- **Bublina: chvost drží dookola (360°)** – body základne chvosta mohli pri
  rohoch vypadnúť mimo bubliny, takže sa tvar pri niektorých smeroch rozbil.
  Základňa je teraz vždy orezaná dovnútra bubliny a posadená hlbšie, takže
  šípka sedí v ľubovoľnom smere vrátane diagonál.
- **Bez výplne sa dá nájsť** – doteraz to bolo skryté pod malým ✕ vedľa chipov.
  Teraz je to **prvý swatch v palete**, kedykoľvek je aktívna Výplň (ako v
  Office). Vybraté „bez výplne" je zvýraznené prstencom.
- **Jasnejšia ikonka výplne** – pruhovaný štvorec nahradil pár, ktorý sa nedá
  zameniť: **prázdny rámik = obrys**, **plný blok = výplň**, pod každým farebný
  pruh s aktuálnou farbou.
- **Malé okno má stále to isté domovské miesto** – pri prvom spustení (alebo keď
  je uložená poloha neplatná) sa postaví **vpravo dole** na hlavnom monitore, nad
  panel úloh. Zámerne nie hore v strede, kde má Teams/Zoom ovládanie hovoru.
  Ak si ho potiahneš inam, appka si to naďalej pamätá.
- **Oprava: ikonka pri kurzore zamŕzala pri nástroji Text** – regresia z 0.9.1.1,
  kde Text nedostával prekreslenie pri pohybe myšou.

## 0.9.1.2 – 2026-07-16

**Oprava priehľadnosti – jeden zdroj pravdy**

Refaktor priehľadnosti z 0.9.1 zaviedol dva súbežné zdroje: nová alfa vo farbe
obrysu/výplne + stará celoobjektová `Opacity`, ktorou renderer stále násobil.
Prejavovalo sa to double-dimom (napr. 50 % × 50 % = 25 %) a klamlivým posuvníkom
(UI 100 %, objekt reálne tmavší) po načítaní starých projektov, z presetu,
kvapkátkom aj z pravého menu.

- **Priehľadnosť kreslených značiek žije výlučne v alfe farby**; celoobjektová
  `Opacity` ostáva len pre kontajnery bez vlastnej farby (skupina, obrázok, blur,
  reflektor). Migrácia sa deje na jednom mieste (`AnnotationFactory.FromDto`),
  takže staré projekty, šablóny aj vloženie zo schránky sa opravia automaticky
  a vizuálne identicky.
- Zosúladené všetky vstupy, ktoré predtým nastavovali `Opacity` popri alfe:
  načítanie nastavení, pen presety, kvapkátko (kopírovanie štýlu) aj pravé menu
  „Priehľadnosť".
- **Zvýšenie priehľadnosti výplne teraz naozaj vyplní vybraný dutý tvar**
  (obdĺžnik/elipsa/text/bublina) – vytiahne farbu z obrysu, nielen upraví štýl
  pre budúce objekty. Reflektoru sa výplň nevymýšľa.
- Pridané testy, ktoré nový invariant zamykajú (fold do alfy pri značke, kontajner
  si drží `Opacity`, `SetDisplayOpacity`).

Vďaka za nález (dva P1 od externého review) – boli presné.

## 0.9.1.1 – 2026-07-15

Séria vyladení z reálneho používania oproti 0.9.1:

**Malé okno (launcher)**
- **Neutrálny vzhľad v pokoji** – červeno-oranžový odznak aj rám nahradené
  sivými, aby pill nerušil nad tvojou prácou. Značka „Kresliť" je neutrálna a
  **rozsvieti sa namodro až pri prejdení myšou**.
- **Okno sa už pri hoveri na „Kresliť" nezväčšuje** – tlačidlo menilo hrúbku
  rámu, čo menilo veľkosť celého (na obsah naviazaného) okna.

**Panel**
- **Prepínanie obrys/výplň už nemení šírku panela** – štítok pri posuvníku
  ukazuje len percento; ktorého cieľa sa týka, vidno na krúžkoch obrys/výplň.
- **Zamknutý nástroj (dvojklik) sa značí priamo na tlačidle** – žltý prstenec
  okolo neho namiesto samostatnej 📌 ikonky bokom. Žiadne prvky navyše.
- **Oblasť exportu je skutočný prepínač** – druhý klik ju vypne a vráti predošlý
  nástroj; tlačidlo je počas aktivity zvýraznené.

**Nástroje**
- **Značky (N) a pečiatky majú vlastný kurzor** – systémový kríž je skrytý, aby
  neprekrýval číslo/písmeno; „duch" značky pod kurzorom je zreteľnejší.
- **3-bodový oblúk** – prehodené poradie; **default je teraz Štart → koniec →
  bod na oblúku** (najprv dva konce, potom vyklenutie).

**Opravy**
- **„Bez výplne" (✕) naozaj vyčistí výplň** – predtým z čiernej priehľadnej
  urobil čiernu nepriehľadnú (dôsledok zachovávania alfa pri zmene farby).
- **Pravý klik na text/objekt už nezhodí panel** – okrem pozastavenia
  sledovača popredia sa po zavretí menu obnoví aj poradie okien (panel ostával
  za priehľadným plátnom).

## 0.9.1 – 2026-07-15

**Nové**

- **Samostatná priehľadnosť obrysu a výplne** – posuvník priehľadnosti teraz mení
  alfa práve toho, čo je vybraté vpredu (obrys / výplň), nie oboje naraz. Farba a
  priehľadnosť sú dve nezávislé osi: zmena farby nechá priehľadnosť tak.
- **Jemný celoobrazovkový krížik** – pri kresliacich nástrojoch vedie cez kurzor
  tenká (1 px) vodorovná a zvislá čiara až po okraje monitora, aby sa dalo
  zarovnať naprieč obrazovkou. Zmizne počas ťahu aj pri nástrojoch Výber/Text.
- **„?" tlačidlo v paneli** – otvorí Pomocníka, ktorý má teraz hore aj **O aplikácii**
  (verzia + autor Martin Haluš). Doteraz sa autor dal nájsť len v ikone v tray.
- **Oblasť exportu je hneď vedľa Export** a po nakreslení (alebo zrušení) sa
  automaticky vráti na nástroj, s ktorým si kreslil.
- **Zvýrazňovač – blokový režim** (z minula) + jasnejšie ikony **obrys/výplň**:
  pred paletou je ikonka rámika (obrys) a vedierka (výplň) s aktuálnou farbou.

**Opravy**

- **Uhlomer bol na svetlom pozadí neviditeľný** – oblúk pri čísle bol natvrdo
  biely. Teraz má farbu objektu a tmavý halo pod sebou, takže ho vidno na
  akomkoľvek pozadí (a farbu vieš meniť paletou).
- **Pravý klik na text (a iné objekty) zbalil veľký panel** – kontextové menu
  po zavretí prepustilo zameranie cudzej appke, čo appka čítala ako „prepol si
  preč". Počas menu je toto prepnutie pozastavené.
- **„❄ ZMRAZENÉ" je na všetkých monitoroch**, nielen na hlavnom.
- **Prichytenie magnetom je zreteľnejšie** – chytený bod má jemný mätový svit
  a tmavé podloženie, takže je jasné, že magnet drží (bez rušivosti).
- **Kurzor sa v screenshotoch nezobrazuje** – potvrdené (GDI CopyFromScreen ho
  nezachytáva), netreba nič riešiť.
- **Tlačidlo Kresliť v malom okne** je teraz plný modrý akcent a pri prejdení
  myšou zjavne zosvetlie.

## 0.9.0 – 2026-07-12

**Kreslenie**

- **Zvýrazňovač vie blok** – s **Ctrl** nekreslí ťah, ale obdĺžnik vyplnený
  priesvitnou farbou (Ctrl+Shift = štvorec). Cez bunku tabuľky, nadpis či odsek
  je to presne to, čo človek chce.
- **Sledovanie osi pri čiare** – keď kurzor prejde cez bod (koniec alebo stred
  inej čiary), jeho zvislá aj vodorovná os ho ďalej **magneticky držia**, takže
  druhý bod ostane presne nad/vedľa toho bodu aj po odchode zo snap okruhu.
  Fialová vodiaca čiara ukáže, ktorý bod drží.
- **Znaky ° ⌀ ± × → bez pamätania Alt-kódov** – v texte napíš `deg`, `uhol`,
  `priemer`, `pm`… a **Tab** slovo nahradí znakom. Ponuka sa ukáže nad editorom;
  bez Tabu sa nič neprepíše.
- **Bublina: Alt = presunúť celú** aj so šípkou. Bez Altu ostáva správanie ako
  doteraz (telo sa hýbe, hrot drží cieľ).

**Panel**

- **Farba čiary vs. výplň je konečne vidieť** – pred paletou sú dva štvorčeky
  (obrys / výplň), vybratý má modrý prstenec a **farby z palety menia práve ten**.
  ✕ vedľa nich = bez výplne. Doteraz sa výplň menila skrytým *pravým* klikom na
  farbu, čo sa nedalo uhádnuť. Pravý klik funguje ďalej ako skratka na druhý cieľ.
- **Zamknutý nástroj je jasne označený** – oranžový rám okolo tlačidla + 📌 v
  paneli (a modrý odznak pri kurzore).
- **Zbaliť a Ukončiť sú farebne odlíšené** – oranžová (skryje prácu) a červená
  (ukončí appku); zvyšok panela ostáva neutrálny.

**Opravy**

- **Fokus (reflektor) kreslil pri ťahaní elipsu, hoci vytvára obdĺžnik** – náhľad
  je teraz ten istý zaoblený obdĺžnik, aký naozaj vznikne.
- **Veľké okno „zmizlo" po rozmazaní (blur)** – blur si robí čistý screenshot, na
  ktorý naše okná skryje. Po vrátení už ale neboli navrchu, takže panel ostal
  *pod* celoobrazovkovým plátnom. Po každom takom zábere sa poradie okien obnoví.
- **„Oblasť exportu zrušená" (a spol.) sa lepilo na kurzor** – hlásenia bez
  majiteľa teraz samy zmiznú.
- **Panel sa otvoril mimo obrazovky** (napr. Vrstvy pri paneli v rohu) – každé
  okno sa po otvorení vtiahne do pracovnej plochy monitora.
- **Esc zatvára otvorený panel** (Vrstvy, Pripomienky, História, Šablóny…).

**Z predchádzajúceho kola (nevydané)**

- **Nástroj sa po nakreslení objektu vráti do Výberu** (ako PowerPoint) a nový
  objekt nechá označený, takže ho hneď vieš posunúť či preštýlovať.
  **Dvojklik na tlačidlo nástroja ho zamkne** – kreslí ďalej, kým neprepneš
  (odznak pri kurzore zmodrie). Zamykanie sa netýka nástrojov, ktoré sú sériové
  už zo svojej podstaty: pero, zvýrazňovač, značky a pečiatky ostávajú aktívne.
- **Tlačidlo Kurzor zrušené** – robilo presne to isté ako « (zbalenie do malého
  okna): oboje prepínalo do priepustného režimu. Skratky Ctrl+Alt+C a Esc platia
  ďalej.
- **Šablóny sa dajú importovať a exportovať** – tlačidlo „Importovať šablónu…"
  v paneli šablón (aj viac súborov naraz), export cez pravý klik na šablónu.
  Formát `*.smpt`, čiže sa dajú posielať kolegom.
- **Oprava: hlásenia sa lepili na kurzor** – oznamy typu „Mierka nastavená: 1 px"
  sa zapisovali do HUD textu pri kurzore, ktorý nemal kto zmazať, takže tam visel
  donekonečna. Oznamy sú teraz rohové toasty; kolieskové readouty (číslo značky,
  zaoblenie) zostali pri kurzore, ale samy zmiznú po ~1,6 s.
- **Magnet aj pri editácii, nielen pri kreslení** – ťahanie koncového bodu čiary
  (a rohového úchopu tvarov) sa prichytí na konce, stredy a rohy ostatných
  objektov. Alt = bez magnetov, Shift = presný pomer/uhol bez magnetov.
- **Vidno, na čo sa prvý bod chytí** – magnet na začiatku čiary fungoval už
  predtým, ale až po kliknutí, takže sa javil ako nefunkčný. Mätový krúžok sa
  teraz ukáže už pri pohybe myšou, pred kliknutím.
- **Veľký panel má vlastné umiestnenie** – po rozbalení z malého okna sa
  postaví vodorovne na stred monitora a s odstupom od hornej hrany (pod
  ovládacie prvky Teams/Zoom hovoru). Ak ho potiahneš inam, pamätá si to
  oddelene od polohy malého okna.
- **Exportované súbory sú po anglicky** – priečinok `Snimky` → `Captures`,
  prípony `_vyrez` → `_region`, `_anotacie` → `_annotations`,
  `Edivect_pripomienky_*.csv` → `Edivect_comments_*.csv` (vrátane hlavičky
  CSV). Staré súbory v pôvodnom priečinku zostávajú, appka len odteraz zapisuje
  do nového.

## 0.6.1 – 2026-07-09

**Oprava buildu 0.6.0** (28 chýb kompilácie nahlásených z `build-portable.ps1`)

- `App.xaml.cs`: chýbal `using Edivect.Serialization;` – predvolené
  presety používajú `PenPresetDto`, ktorý žije v Serialization, nie v Services.
- `UI/PropertiesWindow.xaml.cs`: chýbal `using Edivect.Services;` (Loc)
  a celá metóda `ApplyLanguage()` – automatická úprava sa vložila na zlú kotvu
  a jej absencia sa neodhalila, pretože UI vrstva nebola v kompilačnej bráne.
- **Nová UI kompilačná brána v kontajneri**: `build/container-gate/gate.sh`
  teraz stub-kompiluje aj **všetky okná + App.xaml.cs + AppActions +
  ExportService** proti WPF stubom a partial triedam generovaným z XAML
  (`gen_partials.py` – InitializeComponent + x:Name polia). Presne táto
  kategória chýb (chýbajúci using / chýbajúca metóda v code-behind) už
  neprejde. Adresár je len pre vývoj v kontajneri, Windows build ho ignoruje.
- Poznámka: warning `WFO0003` (high-DPI nastavenie v app.manifest) pochádza
  z .NET 10 SDK a build neblokuje; manifest funguje ďalej. Ak bude chcieť
  niekedy zmiznúť, presunieme DPI voľbu do csproj (`ApplicationHighDpiMode`).


## 0.6.0 – 2026-07-09

**Jazyky, presnosť a vyladenie z praxe (17 bodov spätnej väzby)**

- **Tri jazyky: EN / DE / SK** – nové tlačidlo s glóbusom na paneli prepína
  jazyk celej aplikácie (popisky, menu, panely, Pomocník, hlásenia, lišta).
  Predvolený jazyk je angličtina; voľba sa pamätá v nastaveniach.
- **Tmavé kontextové menu opravené** – podmenu (farby, hrúbky, priehľadnosť…)
  boli na svetlom systémovom pozadí nečitateľné. Celé menu má teraz vlastnú
  tmavú šablónu (App.xaml), platí pre pravé menu na plátne aj všetky menu
  panela – vrátane zvýraznenia pri prejdení myšou a fajky pri zvolenej voľbe.
- **Shift pri čiare = kroky po 5°** (predtým 15°) – jemnejšie zarovnanie.
- **Zaoblenie rohov obdĺžnika naplno**: nový **žltý úchyt** na hornej hrane –
  ťahaním meníš rádius priamo (vzdialenosť úchytu od rohu = rádius, ako
  v PowerPointe); presné číslo zadáš v paneli Vlastnosti (nové pole „R");
  koliesko myši počas kreslenia mení rádius rozkresľovaného obdĺžnika naživo.
  **Nové obdĺžniky sú vždy ostré** – rádius sa už neprenáša na ďalšie tvary.
- **Oblúk: dve poradia klikov** – pravý klik na tlačidlo oblúka prepne medzi
  „štart → bod na oblúku → koniec" a „štart → koniec → bod na oblúku".
- **Uhlomer zjednotený**: funguje ťahaním (stlač–ťahaj–pusti) **aj**
  klikaním (klik vrchol, klik koniec 1. ramena, klik 2. rameno) – krátky klik
  už meranie neruší.
- **Bublina ako v PowerPointe** – ťahanie tela hýbe len telom, špička šípky
  ostáva ukotvená na cieli; špičku presunieš jej úchytom. Pri presune skupiny
  alebo viacnásobného výberu sa hýbe všetko vrátane špičky.
- **OK/NOK náhľad od prvého kliku** – počas ťahania sa zobrazuje skutočný
  odznak (nie čiarová geometria), takže hneď vidíš výsledok. Opravený aj bug,
  kde náhľad pre OK/NOK kreslil nezmysel.
- **Ikonka nástroja pri kurzore** – malý štítok vedľa kurzora ukazuje, čo
  vloží ďalší klik (pero, čiara, oblúk, text… pečiatky vo farbe). Zmizne
  počas gesta; značky majú naďalej vlastný „ghost" náhľad.
- **Značky bez prekrývania** – po položení značky sa ghost ďalšieho čísla
  skryje, kým nepohneš myšou (predtým sa cez čerstvú značku premietalo
  nasledujúce číslo).
- **Vrstvy zobrazujú skupiny** – členovia skupiny sú odsadené riadky pod ňou
  (└), každý s vlastným okom/zámkom (ukladá sa ako jedna vratná zmena
  skupiny); klik na člena ho rovno vyberie na úpravu v skupine.
- **Ikony prekreslené**: oblúk = čistý štvrťoblúk 0→90°, uhlomer = polkruh so
  základňou a ramenom s uhlovou značkou, fokus = hľadáčik s rámikom,
  fajka/krížik/OK/NOK sú **farebné** (zelená/červená) priamo na paneli.
- **„Bez výplne" dáva spätnú väzbu** – po kliknutí sa v HUD zobrazí, že výplň
  je zrušená pre výber aj nové tvary (predtým to bez výberu vyzeralo, že sa
  nič nestalo).
- Predvolené presety sa vytvárajú v jazyku používateľa pri prvom spustení.
- Texty bez zmienok o konkrétnych CAD produktoch.

**Technické poznámky**

- Nový `Services/Loc.cs` – slovník SK→(EN, DE), kľúčom je slovenský originál;
  neznámy kľúč prechádza bez zmeny (bezpečný fallback). Okná si pri prvom
  načítaní odložia pôvodné SK kľúče tooltipov a pri zmene jazyka ich
  prekladajú nanovo (funguje opakovane EN↔DE↔SK bez reštartu).
- `HandleKind.Corner` + kreslenie žltého úchytu v `AnnotationCanvas`;
  `RectangleObject.MoveHandleLocal` mapuje X-vzdialenosť na rádius.
- Ikony presunuté z `ToolbarWindow.xaml` do `App.xaml` (zdieľa ich toolbar aj
  kurzorový štítok cez `TryFindResource`).


## 0.5.0 – 2026-07-09

**Veľký balík z používania v praxi (15 požiadaviek)**

- **Uhlomer opravený a trvalý** – prvé kliknutie už nikdy nepokračuje v starom,
  „duchom" rozrobenom meraní: viacklikové gestá (uhlomer, oblúk) si teraz držia
  zachytenie myši počas celého priebehu, takže pustenie tlačidla medzi krokmi
  meranie nezruší (to bola príčina „základne z náhodného bodu"). Po odmeraní
  nástroj ostáva aktívny na ďalšie meranie a odmeraný uhol ostáva na ploche
  ako objekt (dá sa vybrať, presunúť, zmazať).
- **Čiara a šípka zlúčené do jedného nástroja** – hlavičky sa prepínajú
  tlačidlami ◁ ▷ (fungujú aj na už nakreslených čiarach). Klávesa `L` = čistá
  čiara, `A` = čiara so šípkou na konci; samostatné tlačidlo Šípka zmizlo.
- **Pravý klik na objekt = rýchle menu** – farba, hrúbka, priehľadnosť
  (s viditeľným číslom v %), zaoblenie rohov pri obdĺžniku, poradie
  dopredu/dozadu, zamknúť, zoskupiť/zrušiť, zmazať. Všetko cez históriu (Ctrl+Z).
- **Modrý okraj = režim Kreslenie** – tenký 3 px akcentový rám po obvode
  každého monitora, viditeľný len keď kliky idú do Edivect. Rám je
  vylúčený zo snímania obrazovky (SetWindowDisplayAffinity, Windows 10 2004+),
  takže na screenshotoch, exportoch ani nahrávkach sa nikdy neobjaví –
  vidíš ho len ty.
- **Značky prepracované** – kurzor ukazuje „ducha" nasledujúcej značky,
  koliesko myši mení jej hodnotu (aj hodnotu už vybraných značiek – rýchle
  opravy poradia). Pravý klik na tlačidlo značky prepína **čísla ↔ písmená**
  (a, b, c… z, aa, ab…).
- **Obdĺžnik so zaoblenými rohmi** – koliesko myši pri nástroji Obdĺžnik mení
  rádius nových obdĺžnikov (číslo vidno v HUD), koliesko na vybranom obdĺžniku
  upraví existujúci. Predvoľby aj v pravom menu. Ukladá sa do projektu.
- **Oblúk 3 bodmi (K)** – ako Three Point Arc v Catia V5: klik štart, klik bod
  NA oblúku, klik koniec; živý náhľad s polomerom v HUD. Oblúk má úchyty na
  všetkých troch bodoch.
- **Pečiatky OK a NOK** – vyplnené odznaky (zelený OK, červený NOK) vedľa
  fajky/krížika; klik vloží, ťahaním veľkosť, dajú sa prefarbiť.
- **Reflektor → Fokus** – namiesto elipsovej „šou" je to teraz pracovný
  nástroj na CAD rezy: obdĺžnikové okno so stmaveným okolím a akcentovým
  rámom. Klik dovnútra okna stále prechádza na anotácie v ňom.
- **Priehľadnosť konečne spojito** – posuvník už neskáče medzi krajnými
  hodnotami (klik na dráhu teraz ide presne na miesto kliknutia) a vedľa neho
  je číslo v %. Percento vidno aj v pravom menu objektu.
- **Export bez dialógu** – PNG/JPG/výrez/monitor sa uložia rovno do
  podpriečinka **Snimky** vedľa exe, názov
  `Edivect_2026-07-09_14-05-33.png` (triedi sa chronologicky). V pravom
  dolnom rohu sa objaví nenápadné potvrdenie – klik naň otvorí súbor
  v Prieskumníkovi. Žiadny preblik obrazovky. „Uložiť ako…" s dialógom ostáva
  v menu Export, tam je aj „Otvoriť priečinok Snimky".
- **Panel úloh a Alt+Tab** – Edivect je viditeľný v paneli úloh.
  Prepnutie na inú aplikáciu (Alt+Tab, klik na jej okno) automaticky zapne
  režim Kurzor, takže ju hneď ovládaš; klik na Edivect v paneli úloh
  vráti Kreslenie.
- **Úprava prvkov v skupine (ako PowerPoint)** – klik na už vybranú skupinu
  vyberie prvok pod kurzorom; ten sa dá samostatne presúvať, meniť mu veľkosť,
  otáčať aj zmazať (Delete), pričom skupina drží pokope. Dvojklik vstúpi do
  skupiny rovno. Zmena farby/hrúbky/priehľadnosti na skupine sa teraz
  aplikuje na jej členy.
- Menšie: HUD hlásenia pre koliesko myši, popisky nástrojov a Pomocník (F1)
  aktualizované, typové označenia v paneli Vlastnosti („oblúk", „fokus",
  „pečiatka OK/NOK").

**Technické poznámky**

- `SelectTool` má nové režimy `MemberMove`/`MemberHandle`; úprava člena sa
  ukladá ako jedna zmena celej skupiny (DTO before/after), takže Ctrl+Z vráti
  celý krok naraz.
- Kolieskové úpravy (hodnota značky, rádius) sa v 900 ms okne spájajú do
  jedného kroku histórie (`ModifyObjectsCommand.RefreshAfter`).
- Nové súbory: `Model/ArcObject.cs`, `Tools/ArcTool.cs`, `UI/CanvasMenu.cs`,
  `UI/ModeIndicatorWindow.cs`, `UI/ToastWindow.cs`,
  `Interop/ForegroundWatcher.cs`.


## 0.4.2 – 2026-07-08

**Oprava buildu**

- Opravená chyba kompilácie `CS0246: 'Point' could not be found` v `AppState.cs` –
  pri pridávaní HUD ukazovateľa (v0.4.0) pribudla vlastnosť `CursorModel`
  typu `Point`, ale súbor nemal `using System.Windows;`. Build v0.4.0/0.4.1
  preto zlyhal hneď na začiatku (1 error).
- Odstránené varovanie CS0108: `x:Name="Content"` v okne Pomocníka tienilo
  zdedenú vlastnosť `Window.Content`; premenované na `HelpContent`.
- Interná kontrola kvality rozšírená o sémantickú kompiláciu vrstiev
  Model/Commands/Core/Tools skutočným Roslyn kompilátorom (s WPF stubmi) –
  presne táto trieda chýb už neprejde.


## 0.4.1 – 2026-07-08

**Vrstvy a zoskupovanie**

- **Panel Vrstvy (F8)** – zoznam všetkých objektov na plátne (najnovší/najvrchnejší
  hore, ako v Photoshope). Pri každom riadku sú dve ikony: oko (skryť/zobraziť)
  a zámok (zamknúť/odomknúť) – kliknutím prepneš ktorýkoľvek konkrétny objekt
  bez nutnosti ho najprv vyberať na plátne. Klik na názov riadku objekt vyberie
  (zamknuté riadky sa takto vybrať nedajú – to je zámerné, rovnaké pravidlo ako
  na plátne). Skrytie aj zámok sú krok v histórii (Ctrl+Z ich vráti späť).
- **Zoskupovanie (Ctrl+G / Ctrl+Shift+G)** – vyber 2 a viac objektov a zoskup
  ich do jedného celku, ktorý sa ďalej presúva, škáluje, otáča aj maže ako
  jeden objekt (presne ako zoskupenie v PowerPointe). Zrušenie zoskupenia ich
  vráti späť ako nezávislé objekty na pôvodných miestach. Skupiny sa dajú
  vnárať (skupina v skupine) a ukladajú sa do projektu aj s celým obsahom.
  Tlačidlá pribudli aj na paneli vedľa zámku vrstiev.

**Kvalita**

- Nové unit testy: skupina (zjednotenie hraníc, hit-test cez potomkov vrátane
  skrytých, presun/škálovanie potomkov, vnorené skupiny, round-trip cez JSON,
  regenerácia ID pri kopírovaní), GroupCommand/UngroupCommand vrátane plného
  cyklu cez HistoryManager (Do/Undo/Redo).


## 0.4.0 – 2026-07-08

**Rotácia, uhly a meranie**

- **Rotácia objektov** – nad výberom pribudol modrý otočný úchyt; ťahaním
  otočíš objekt okolo stredu, so `Shift` skáče po 15°. Aktuálny uhol sa
  zobrazuje pri kurzore. Rotácia sa ukladá do projektu aj do histórie
  (Undo/Redo). Otáčať sa dá text, tvary, bublina, pečiatky, obrázok a rozmazanie;
  čiara/šípka sa „otáča" cez koncové body, kruhové značky a reflektor rotáciu nemajú.
- **Uhly pri čiare/šípke** – počas kreslenia sa naživo zobrazuje dĺžka v px
  a uhol; `Shift` prichytáva po 15° pre čisté referenčné uhly.
- **Uhlomer (G)** – zmeria uhol medzi dvoma ramenami priamo na obrazovke
  (CAD náčrty, sketch). Potiahni 1. rameno od vrcholu, pusti a klikni pre
  2. rameno; oblúk aj číslo uhla sa kreslia priebežne a ostávajú na plátne.
- **HUD ukazovateľ** – malý štítok pri kurzore ukazuje živé hodnoty
  (uhol, rozmery, dĺžku) pre kreslenie, rotáciu aj uhlomer.

**Súkromie**

- **Rozmazanie / pixelizácia (B)** – ťahaním označíš oblasť s citlivými
  údajmi; nástroj odchytí pixely pod ňou a natrvalo ich rozmaže (box-blur),
  takže redakcia prežije export aj uloženie projektu. Silu určuje hrúbka
  čiary. Ak sa snímka nepodarí, vykreslí sa mliečny panel ako záloha.

**Autorstvo**

- Tvorca **Martin Haluš** je uvedený v metadátach súboru (`.exe`),
  v pätičke okna Pomocník (F1), v tooltipe ikony v oznamovacej oblasti
  a v jej menu. Zámerne nie na hlavnom paneli.

**Kvalita**

- Nové unit testy: rotácia (AABB, hit-test rotovaného objektu, normalizácia
  a round-trip uhla, prítomnosť otočného úchytu), uhlomer (meranie 45/90/180°,
  reflexný uhol, round-trip), rozmazanie (round-trip vrátane zapečených pixelov).


## 0.3.1 – 2026-07-07

**Pečiatky a reflektor**

- **Fajka ✓ (F) a krížik ✗ (X)** – recenzné pečiatky: klik položí symbol
  v predvolenej veľkosti, ťahaním od bodu stlačenia sa veľkosť mení naživo.
  Fajka je zelená, krížik červený (sémantické farby); po položení sa dajú
  prefarbiť, škálovať aj presúvať ako každý iný objekt. Biele „halo" pod
  symbolom drží čitateľnosť na ľubovoľnom pozadí.
- **Reflektor (S)** – potiahnutím elipsy sa stmaví všetko okrem nej.
  Po pustení sa nástroj prepne na Výber a diera ostáva vybratá, takže sa dá
  hneď posúvať a meniť. Priehľadnosť ovláda silu stmavenia, pravý klik na
  farbu zmení farbu závoja; kliky vnútri diery prechádzajú na objekty pod ňou.
- Šírkové tlačidlá menia veľkosť vybratých pečiatok; panel Vlastnosti ich
  pozná ako „fajka / krížik / reflektor".
- Nové unit testy: hit-testy a DTO round-trip pre pečiatku aj reflektor.


## 0.3.0 – 2026-07-07

Veľká dávka funkcií nad rámec MVP:

**Nové nástroje a objekty**
- **Bublina s textom (C)** – stlačte na cieli, potiahnite kam má bublina ísť; text sa hneď edituje inline, chvost sa dá kedykoľvek presunúť za úchyt.
- **Číslované značky (N)** – každý klik položí disk s ďalším číslom (1, 2, 3…); číslovanie sa odvodzuje z dokumentu, takže po Undo pokračuje správne.
- **Vloženie obrázka** – Ctrl+V s obrázkom v schránke Windows ho vloží ako objekt (posúvateľný, škálovateľný, ukladá sa do projektu ako PNG/base64).

**Vrstvy, zámok, výplň**
- Tlačidlá **Do popredia / Do pozadia**; klávesy PgUp/PgDn (o krok) a Ctrl+PgUp/PgDn (úplne).
- **Zámok (Ctrl+L)** – zamknuté objekty ignorujú klikanie; bez výberu ten istý príkaz všetko odomkne a vyberie.
- **Výplň tvarov a bublín** – pravý klik na farebnú vzorku alebo na „…“; tlačidlo ⧄ = bez výplne.

**Presnosť a produktivita**
- **Posun šípkami** – 1 px, so Shift 10 px; rýchle stláčanie sa zlučuje do jedného kroku histórie.
- **Panel Vlastnosti** – číselné X / Y / šírka / výška (aj pre viac objektov naraz) a veľkosť písma; Enter potvrdí, každá zmena je undo krok.
- **+ / −** mení hrúbku čiary (pri texte/bubline/značke veľkosť písma).
- Potvrdzovací dialóg pri *Vyčistiť*, ak je na plátne 10+ objektov.

**Projekty, export, pomoc**
- **Nedávne projekty** – pravý klik na tlačidlo Otvoriť.
- **Export jedného monitora** do PNG (podmenu Export ▾ pri viacerých monitoroch).
- **Pomocník (F1)** – prehľad všetkých skratiek priamo v aplikácii; aj v tray menu.

**Kvalita**
- **Unit testy (xUnit)** – história/undo, príkazy vrátane z-orderu a nudge, geometria, hit-testy všetkých typov, DTO round-trip serializácie; spúšťajú sa v CI pred buildom (`dotnet test`).


## 0.2.2 – ikonový panel nástrojov

- Všetky tlačidlá panela (režimy, nástroje, akcie, hrúbky) používajú **vektorové
  ikony** namiesto textu – jazykovo nezávislé UI priamo z obrázka. Ikony sú
  kreslené ako XAML Path geometrie (žiadne obrázkové súbory, ostré pri každom
  DPI, farba sleduje stav tlačidla). Slovenské popisy zostávajú v tooltipoch.
- Hrúbky čiary sú zobrazené ako pruhy rôznej hrúbky namiesto čísel.
- Tlačidlo skrytia anotácií prepína ikonu oka / preškrtnutého oka.

## 0.2.1 – oprava kreslenia + export výrezu

- **Oprava:** ťah (pero/zvýrazňovač/tvar) po pustení tlačidla myši niekedy zmizol
  namiesto uloženia. Príčina: uvoľnenie zachytenia myši (`ReleaseMouseCapture`)
  spúšťalo zrušenie práve dokončovaného gesta skôr, než sa stihlo pridať do
  dokumentu. Poradie volaní je opravené – gesto sa teraz vždy najprv uloží.
- **Nové:** Export ▾ → *Export výrezu (výber oblasti)…* – potiahnutím myšou
  (aj naprieč viacerými monitormi) vyberiete ľubovoľnú oblasť a uloží sa ako
  samostatné PNG, vrátane aktuálneho pozadia (Live/Freeze/tabuľa) aj anotácií
  v danej oblasti.

## 0.2.0 – vektorové objekty a editácia


- **Vektorový dátový model** – každý ťah/tvar je samostatný objekt (pero, zvýrazňovač,
  čiara, šípka, obdĺžnik, elipsa, text) s farbou, hrúbkou, priehľadnosťou a štýlom čiary.
- **Výber a úprava po nakreslení** – nástroj Výber (V): presun, zmena veľkosti cez úchyty,
  ťahanie koncových bodov čiary/šípky, dvojklik = úprava textu, marquee výber, multi-výber.
- **Zmena štýlu vybratých objektov** – farba, hrúbka, priehľadnosť, štýl čiary aj šípky sa
  dajú meniť dodatočne; každá zmena je krok v histórii.
- **História** – min. 100 krokov späť/vpred (predvolene 200), panel histórie so skokom
  na ľubovoľný krok.
- **Projekty** – uloženie/načítanie anotácií do JSON (*.smpj*), vrátane zmrazeného pozadia
  (PNG vedľa projektu), presetov a metadát rozloženia monitorov.
- **Export** – PNG so snímkou, priehľadné PNG (iba anotácie), JPG, kópia do schránky.
- **Režimy pozadia** – Freeze (zmrazená obrazovka), biela tabuľa, čierna tabuľa.
- **Kopírovanie/duplikovanie** – Ctrl+C/V/D v rámci aplikácie, viacnásobné prilepenie
  s posunom.
- **Autosave/obnova** – priebežné zálohovanie neuloženej práce, ponuka obnovy po páde.
- **Presety pier** – 4 rýchle predvoľby (číslované tlačidlá na paneli), uložené v nastaveniach.
- **Prenositeľný build** – `build\build-portable.ps1` → jeden EXE + ZIP; GitHub Actions
  workflow ako náhrada, keď na stroji nie je .NET SDK.

## 0.1.0 – Phase 1 MVP

- Priehľadné overlay okná na všetkých monitoroch (per-monitor DPI, fyzické pixely).
- Kreslenie perom a zvýrazňovačom.
- Globálne skratky F9 (kresliť/kurzor) a F7 (panel) cez RegisterHotKey.
- Plávajúci tmavý panel nástrojov, ikona v oznamovacej oblasti.
- Zdieľaný undo/redo naprieč monitormi (command pattern).
