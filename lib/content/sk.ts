import type { Copy } from "@/types";

/**
 * Slovak. Tool names follow the application's own Slovak UI rather than a
 * literal translation of the English site — a visitor who downloads the app
 * has to find the button the page just named. So: "kóta" (not "rozmer"),
 * "bublina", "značka", "fajka", "pečiatka", "zmrazená obrazovka".
 */
export const sk: Copy = {
  meta: {
    tagline: "Kreslite priamo po obrazovke. Upravujte kedykoľvek potom.",
    description:
      "Prenosný nástroj na anotáciu obrazovky pre technikov. Každá šípka, bublina aj kóta zostáva plne editovateľným vektorovým objektom — posuňte ju, prefarbite, preskupte, znova vyexportujte. Bez inštalácie, bez prihlasovania, bez internetu.",
    social:
      "Prenosný · Windows 10 a 11 · Bez inštalácie · Vektor, vždy editovateľný",
  },
  ui: {
    skipToContent: "Preskočiť na obsah",
    backToTop: "Edivect — späť nahor",
    home: "Edivect — úvodná stránka",
    githubRepo: "Repozitár webu Edivect na GitHube",
    openMenu: "Menu",
    closeMenu: "Zavrieť menu",
    download: "Stiahnuť",
    downloadForWindows: "Stiahnuť pre Windows",
    language: "Jazyk",
    switchLanguage: "Zmeniť jazyk",
    toLight: "Prepnúť na svetlý motív",
    toDark: "Prepnúť na tmavý motív",
    yes: "Áno",
    no: "Nie",
    primaryNav: "Hlavná navigácia",
    benefitsLabel: "Prečo Edivect",
    galleryLabel: "Galéria snímok",
    enlarge: "Zväčšiť",
    close: "Zavrieť",
    previousScreenshot: "Predchádzajúca snímka",
    nextScreenshot: "Ďalšia snímka",
    screenshotViewer: "Prehliadač snímok",
    imageOfTotal: "snímka",
  },
  nav: {
    features: "Funkcie",
    how: "Ako to funguje",
    compare: "Porovnanie",
    faq: "Otázky",
  },
  hero: {
    badge: "Prenosný · Windows 10 a 11 · Bez inštalácie",
    titleLead: "Kreslite priamo po obrazovke.",
    titleAccent: "Upravujte kedykoľvek potom.",
    description:
      "Prenosná anotácia pre technikov. Každá šípka, bublina aj kóta zostáva editovateľná — bez inštalácie, účtu a internetu.",
    ctaPrimary: "Stiahnuť zadarmo",
    ctaSecondary: "Pozrieť novinky",
    chips: [
      "Offline",
      "Bez telemetrie",
      "Bez admin práv",
      "Viac monitorov",
      "Vektor · vždy editovateľný",
    ],
    frameTitle: "Edivect — zmrazená obrazovka · Monitor 1",
    screenshotAlt:
      "Panel nástrojov Edivectu vedľa zmrazeného technického výkresu so zákresom: číslované značky ①②③ a červená šípka, ktorá je vybratá a stále editovateľná.",
  },
  benefits: {
    speed: {
      title: "Otvoriť → nakresliť → vyexportovať",
      description:
        "Od spustenia po prvý ťah menej než dve sekundy. Hotový zákres skopírujete do schránky jedinou klávesou.",
    },
    editable: {
      title: "Všetko zostáva editovateľné",
      description:
        "Ktorýkoľvek objekt vyberiete, posuniete, otočíte, prefarbíte alebo preskupíte — aj o hodiny neskôr. Nič sa nezaplní do pixelov, kým neexportujete.",
    },
    private: {
      title: "Súkromie od základu",
      description:
        "Beží úplne offline. Žiadny účet, žiadna telemetria, žiadny cloud. Vaše snímky nikdy neopustia počítač.",
    },
    cad: {
      title: "Stavané na prácu s CAD",
      description:
        "Oblúk cez tri body, meranie uhla a zmrazená obrazovka sedia na to, ako uvažujú používatelia CATIA, NX a Creo.",
    },
  },
  showcase: {
    heading: {
      overline: "Interaktívne úpravy",
      title: "Vektorový editor, ktorý sa otvorí rýchlosťou snímky obrazovky",
      subtitle: "Prejdite myšou po funkcii a uvidíte ju v pracovnej ploche.",
    },
    items: {
      "editable-objects": {
        name: "Editovateľné objekty",
        short: "Vyberte, posuňte, otočte a prefarbite čokoľvek, kedykoľvek.",
        description:
          "Nič sa nezapečie natrvalo. Kliknite na ktorúkoľvek šípku, tvar či popis a dostanete osem úchopov na zmenu veľkosti, úchop na otáčanie a pravým klikom ponuku farby, hrúbky a priehľadnosti — aj hodiny po nakreslení.",
        alt: "Červený obdĺžnik nakreslený cez dieru na technickom výkrese, znova vybratý, s ôsmimi úchopmi na zmenu veľkosti a úchopom na otáčanie nad ním.",
      },
      "cad-measurement": {
        name: "Meranie ako v CAD-e",
        short: "Oblúky cez tri body a uhly so živým odčítaním.",
        description:
          "Uhol aj oblúk cez tri body idú po pamäti ruky z CATIA/NX: klik na začiatok, koniec, potom vrchol, so živým odčítaním stupňov či polomeru, ktoré ide za kurzorom. Merania zostávajú editovateľnými objektmi.",
        alt: "Uhol odmeraný medzi dvoma dierami pre skrutky s hodnotou 35,2°, vedľa neho kóta 58 mm na tom istom výkrese.",
      },
      "qa-stamps": {
        name: "Pečiatky a značky pre kvalitu",
        short: "Pečiatky OK / NOK a automaticky číslované značky.",
        description:
          "Klaďte automaticky sa číslujúce značky ①②③, písmenkové značky, fajku či krížik a pečiatky OK / NOK jedným klikom a v jednotnej veľkosti — presne na protokoly z kontroly.",
        alt: "Technický výkres so zákresom: číslované značky ①②③, zelená pečiatka OK a vedľa nej červená pečiatka NOK.",
      },
      "blur-focus": {
        name: "Rozostrenie a zaostrenie",
        short: "Skryte citlivé údaje, vypichnite podstatné.",
        description:
          "Rozostrite výrobné čísla a mená operátorov, alebo položte obdĺžnik zaostrenia, ktorý stlmí všetko okrem preberanej oblasti. Oboje zostáva nastaviteľným objektom.",
        alt: "Výkres stlmený obdĺžnikom zaostrenia tak, že svieti len rohová pečiatka; výrobné číslo a obe mená operátorov sú rozostrené.",
      },
      "freeze-boards": {
        name: "Zmrazenie a tabuľa",
        short: "Zmrazte živú obrazovku alebo kreslite na bielu či čiernu.",
        description:
          "Zmrazte všetky monitory, aby sa živé merače nezmenili uprostred zákresu, alebo prepnite na bielu či čiernu tabuľu na školenie — anotácie sa držia zvlášť pre každý režim.",
        alt: "Obrazovka podržaná ako zmrazená snímka, na ktorú sa kreslia anotácie; prepínač zmrazenia v paneli nástrojov svieti.",
      },
    },
  },
  howItWorks: {
    heading: {
      overline: "Tri kroky",
      title: "Od „toto treba vyznačiť“ po odoslaný obrázok za pár sekúnd",
    },
    steps: {
      open: {
        title: "Otvoriť",
        description:
          "Stlačte globálnu skratku. Prekrytie naskočí na aktuálnom monitore s naposledy použitým nástrojom. Ak je obraz živý, zmrazte ho.",
      },
      draw: {
        title: "Nakresliť",
        description:
          "Šípky, bubliny, rozostrenie, pečiatky, merania — každé je na jednu klávesu. Všetko, čo položíte, zostáva vyberateľným objektom.",
      },
      export: {
        title: "Vyexportovať",
        description:
          "Skopírujte do schránky, uložte PNG/JPG, alebo si nechajte editovateľný projekt v JSON-e na neskoršiu kontrolu. Posledný export zopakujete jednou klávesou.",
      },
    },
  },
  featureGrid: {
    heading: {
      overline: "Všetko v balíku",
      title: "Jeden prenosný nástroj, celá anotačná výbava",
    },
    items: {
      pen: {
        title: "Pero a zvýrazňovač",
        description:
          "Kreslenie voľnou rukou a priesvitné zvýraznenie, voliteľne s automatickým miznutím na prezentácie.",
      },
      lines: {
        title: "Čiary a šípky",
        description:
          "Rovné čiary a šípky so štyrmi typmi hrotov, čiarkované aj bodkované, so zamknutím na 45° cez Shift.",
      },
      shapes: {
        title: "Tvary",
        description:
          "Obdĺžnik, obdĺžnik so zaoblenými rohmi, elipsa a oblúk cez tri body s nastaviteľným polomerom rohu.",
      },
      text: {
        title: "Text a bubliny",
        description:
          "Textové objekty s formátovaním a bubliny s plnou kontrolou nad typografiou.",
      },
      markers: {
        title: "Číselné a písmenkové značky",
        description:
          "Automaticky sa číslujúce značky, ktoré viete prečíslovať, spustiť odznova alebo prepnúť medzi číslicami a písmenami.",
      },
      stamps: {
        title: "Fajka, krížik a pečiatky",
        description:
          "Fajky, krížiky a pečiatky OK / NOK jedným klikom a v jednotnej veľkosti.",
      },
      layers: {
        title: "Vrstvy a skupiny",
        description:
          "Zoskupujte, zamykajte, skrývajte a preusporadúvajte objekty v paneli vrstiev v štýle Figmy.",
      },
      history: {
        title: "História a automatické ukladanie",
        description:
          "Pomenovaná história krokov, na ktorú sa dá klikať, a automatické ukladanie každých 30 sekúnd, ktoré prežije pád aplikácie.",
      },
      export: {
        title: "Pružný export",
        description:
          "PNG, priehľadné PNG, JPG, schránka, jednotlivý monitor, vybraná oblasť — alebo editovateľný projekt v JSON-e.",
      },
    },
  },
  compare: {
    heading: {
      overline: "Ako obstojí",
      title: "Úpravy na úrovni Illustratora rýchlosťou nástroja Výstrižky",
      subtitle:
        "Edivectu je najbližšie Pointofix — to isté prekrytie na kreslenie kdekoľvek, zadarmo, a robí to už roky. Rozdiel je v tom, čo sa stane, keď pustíte myš.",
    },
    regionLabel:
      "Porovnanie funkcií s Pointofixom a ďalšími nástrojmi na anotáciu a snímanie obrazovky vo Windows",
    scrollHint: "Potiahnite alebo rolujte do strany a porovnajte všetky nástroje.",
    caption:
      "Ako Edivect obstojí voči Pointofixu, nástroju Výstrižky, Greenshotu a ShareX-u",
    capability: "Schopnosť",
    rows: {
      editable: "Anotácie zostávajú editovateľné aj po pustení myši",
      vector: "Vektorové objekty (posun / veľkosť / otočenie)",
      layers: "Vrstvy, skupiny, zamknutie a poradie",
      measurement: "Meranie oblúka a uhla ako v CAD-e",
      scale: "Skutočná mierka (px → mm)",
      projectFile: "Projektový súbor, ktorý drží objekty editovateľné",
      liveScreen: "Kreslí na živú obrazovku, nie na snímku",
      portable: "Prenosný — bez inštalácie",
      offline: "Funguje úplne offline",
    },
    qualifiers: {
      limited: "obmedzene",
      inEditor: "v editore",
      untilDeselect: "kým neodkliknete",
      greenshotFile: ".greenshot",
      jsonFile: "JSON",
      builtIn: "súčasť Windows",
      zipBuild: "ZIP verzia",
    },
  },
  gallery: {
    heading: {
      overline: "V pracovnej ploche",
      title: "Pozrite si to na skutočných obrazovkách",
    },
    items: {
      markup: {
        title: "Zákres na zmrazenej obrazovke",
        caption:
          "Číslované značky a šípka nad zmrazeným technickým výkresom, šípka je stále vybratá a editovateľná.",
      },
      handles: {
        title: "Editovateľná geometria",
        caption:
          "Obdĺžnik znova vybratý dlho po nakreslení, s ôsmimi úchopmi na zmenu veľkosti a úchopom na otáčanie.",
      },
      palette: {
        title: "Paleta príkazov",
        caption:
          "Ctrl+Shift+P otvorí vyhľadávateľný zoznam všetkých príkazov aj s klávesou, ktorá ich spustí.",
      },
      qa: {
        title: "Kontrola kvality",
        caption:
          "Očíslované nálezy na výkrese so zelenou pečiatkou OK a červenou NOK v rovnakej veľkosti.",
      },
      angle: {
        title: "Uhol a kóta",
        caption:
          "Uhol 35,2° odmeraný medzi dvoma dierami pre skrutky a kóta 58 mm, oboje nakreslené priamo na obrazovku.",
      },
      export: {
        title: "Ponuka exportu",
        caption:
          "Export ponúka PNG so snímkou, priehľadné PNG, JPG, schránku, tlač, oblasť a nahrávanie obrazovky.",
      },
    },
  },
  shortcuts: {
    heading: {
      overline: "Najprv klávesnica",
      title: "Pre ruky, ktoré neopúšťajú klávesnicu",
      subtitle:
        "Každý nástroj je na jednom písmene. Každá skratka je vypísaná v bublinovej nápovede — rozhranie sa naučí samo.",
    },
    items: {
      select: "Nástroj výberu",
      arrow: "Šípka",
      rectangle: "Obdĺžnik",
      text: "Text",
      markers: "Číselné značky",
      dimension: "Kóta",
      angle: "Meranie uhla",
      blur: "Rozostrenie",
      exportRegion: "Export oblasti",
      freeze: "Zmraziť obrazovku",
      undo: "Späť",
      repeat: "Zopakovať posledný príkaz",
    },
  },
  faq: {
    heading: {
      overline: "Otázky",
      title: "Časté otázky",
    },
    items: {
      install: {
        question: "Musím niečo inštalovať?",
        answer:
          "Nie. Edivect je prenosná aplikácia — stiahnite a spustite súbor .exe. Nepotrebuje inštalátor, práva správcu ani zásahy do registrov, takže funguje aj na zamknutých firemných počítačoch a z USB kľúča.",
      },
      editable: {
        question: "Čo presne znamená „všetko zostáva editovateľné“?",
        answer:
          "Každá značka, ktorú urobíte, je vektorový objekt, nie zapečené pixely. Ktorúkoľvek šípku, tvar, text či meranie viete neskôr znova vybrať a posunúť, zmeniť jej veľkosť, otočiť ju, prefarbiť, preskupiť alebo zmazať — presne ako objekty v PowerPointe či Illustratore. Do pixelov sa práca zaplní až pri exporte do obrázka.",
      },
      internet: {
        question: "Posiela nejaké dáta na internet?",
        answer:
          "Nikdy. Aplikácia beží úplne offline, bez účtu, bez synchronizácie s cloudom a bez telemetrie. Vaše snímky a anotácie zostávajú vo vašom počítači.",
      },
      monitors: {
        question: "Funguje na viacerých monitoroch?",
        answer:
          "Áno. Zmrazenie sníma každý monitor samostatne a plávajúci panel nástrojov ide za kurzorom medzi obrazovkami. Zostavy s viacerými monitormi a rôznym DPI sú podporované.",
      },
      reopen: {
        question: "Dá sa anotácia neskôr znova otvoriť a upravovať?",
        answer:
          "Áno. Uložte si prácu ako projekt .smpj — čitateľný JSON — a každý objekt zostane editovateľný, alebo vyexportujte PNG/JPG na zdieľanie. Automatické ukladanie navyše drží priebežnú kópiu, takže sa po páde viete vrátiť.",
      },
      windows: {
        question: "Ktoré verzie Windows sú podporované?",
        answer:
          "Windows 10 a Windows 11, 64-bitové. Rozhranie používa natívne Segoe UI a konvencie Fluent, správne sa škáluje na displejoch s vysokým DPI a rešpektuje systémové nastavenie svetlého či tmavého motívu aj obmedzenia pohybu.",
      },
    },
  },
  downloadCta: {
    platform: "Windows 10 a 11 · 64-bit",
    title: "Stiahnuť Edivect",
    subtitle:
      "Prenosné EXE — stiahnite a spustite. Bez inštalácie, bez admin práv, bez internetu.",
    olderVersions: "História vydaní",
    versionLabel: "Verzia",
    checksumLabel: "SHA-256",
    checksumPending: "SHA-256 sa zverejní spolu s vydaním",
  },
  footer: {
    blurb:
      "Kreslite priamo po obrazovke. Upravujte kedykoľvek potom. Prenosná anotácia pre technikov na Windows.",
    columns: {
      product: "Produkt",
      resources: "Zdroje",
      connect: "Kontakt",
    },
    links: {
      features: "Funkcie",
      how: "Ako to funguje",
      compare: "Porovnanie",
      download: "Stiahnuť",
      faq: "Otázky",
      documentation: "Dokumentácia",
      changelog: "Zmeny",
      shortcuts: "Klávesové skratky",
      github: "GitHub",
      license: "Softvérová licencia",
      privacy: "Ochrana súkromia",
      terms: "Podmienky používania",
      issues: "Nahlásiť chybu",
    },
    legal: "© 2026 Edivect.",
    traits: "Prenosný · Offline · Bez telemetrie",
  },
  changelog: {
    title: "Zmeny",
    description: "Každé vydanie Edivectu a čo sa v ňom zmenilo.",
    back: "Späť na úvodnú stránku",
    intro: "Poznámky k vydaniam aplikácie Edivect, od najnovšieho.",
    empty: "Zatiaľ neboli zverejnené žiadne poznámky k vydaniu.",
    sourceNote:
      "Vychádza z histórie vydaní v repozitári aplikácie.",
    currentBuild:
      "Aktuálne sa sťahuje v{current}; podrobné poznámky nižšie zatiaľ končia verziou v{notes}.",
    truncated:
      "Zobrazených {shown} najnovších z {total} vydaní. Celá história je v repozitári.",
  },
};
