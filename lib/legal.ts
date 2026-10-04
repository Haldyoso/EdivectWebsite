import usageTerms from "@/lib/usage-terms.json";
import storeUsageTerms from "@/lib/store-usage-terms.json";
import type { Lang } from "@/lib/i18n";

export type LegalPageKind = "privacy" | "terms";

export interface LegalSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface LegalPageCopy {
  title: string;
  description: string;
  intro: string;
  lastUpdated: string;
  lastUpdatedLabel: string;
  ownerLabel: string;
  ownerPending: string;
  contactTitle: string;
  contactText: string;
  contactLink: string;
  back: string;
  sections: LegalSection[];
}

const privacy: Record<Lang, LegalPageCopy> = {
  en: {
    title: "Privacy Policy",
    description:
      "How the Edivect website and downloaded application handle personal information, cookies, telemetry and third-party services.",
    intro:
      "Edivect is designed to collect as little information as possible. This policy separates the static website from the Windows application you download.",
    lastUpdated: "3 October 2026",
    lastUpdatedLabel: "Last updated",
    ownerLabel: "Operator",
    ownerPending: "Legal owner details must be added before commercial launch.",
    contactTitle: "Privacy questions",
    contactText:
      "Until a dedicated privacy email is published, contact the project owner through GitHub Issues. Do not include confidential information in a public issue.",
    contactLink: "Contact via GitHub Issues",
    back: "Back to the home page",
    sections: [
      {
        title: "Scope",
        paragraphs: [
          "This policy applies to the Edivect marketing website and the Windows application distributed as a portable download or through Microsoft Store. It does not cover websites reached through third-party links.",
        ],
      },
      {
        title: "Website hosting",
        paragraphs: [
          "The website at edivect.com is hosted on Cloudflare Workers. The previous GitHub Pages address may remain available during migration. Edivect does not run its own server-side database, account system or form processing on this site. Hosting providers may process technical request data, such as IP addresses and browser information, under their own privacy terms.",
        ],
      },
      {
        title: "Data, cookies and local storage",
        paragraphs: [
          "The website does not set tracking cookies and does not collect names, email addresses or other personal information. It stores only your light or dark theme preference in your browser's local storage. That preference stays on your device and is not sent to Edivect.",
        ],
      },
      {
        title: "Analytics and telemetry",
        paragraphs: [
          "No analytics, advertising pixels or third-party tracking scripts are currently installed. The downloaded Edivect application is designed to run offline and does not include accounts, cloud sync or telemetry.",
        ],
      },
      {
        title: "Local screen, clipboard and OCR processing",
        paragraphs: [
          "When you invoke screen capture, clipboard operations or text recognition, Edivect processes the corresponding content locally on your computer. Open windows and clipboard data may contain personal or confidential information. You decide which content to use and whether to share it. Screen content, projects and OCR results are not sent to the developer.",
          "The application works offline without user accounts, telemetry or cloud synchronisation. Screenshots, annotations and project files remain on your computer unless you choose to share or move them.",
        ],
      },
      {
        title: "Local storage and licence state",
        paragraphs: [
          "Settings, templates, recovery of unsaved work and diagnostic logs remain in local storage. Store editions use writable user storage outside the installation directory. Diagnostic logs are not automatically transmitted; review their contents before voluntarily sharing them with support.",
          "The licence mode and trial timing information are stored locally. Current editions protect these records with Windows DPAPI and a redundant local record. Older portable editions may use an earlier local storage format. No payment card or remote account is required for the trial.",
        ],
      },
      {
        title: "Exports, sharing and deletion",
        paragraphs: [
          "Exports are saved to Documents\\Edivect\\Captures, a fallback folder when Documents is unavailable, or a location you choose. Saved projects may include annotations and separate background screenshots. If you choose a folder synchronised by a service such as OneDrive, that service handles synchronisation under your settings and its own privacy policy.",
          "You manage the sharing and deletion of projects and exports through the application or the file system. Uninstalling the Store application may remove its local profile; exports outside that profile may remain. Some local licence records may persist, so uninstalling does not mean all data is deleted or the trial is reset. Back up important work before uninstalling.",
        ],
      },
      {
        title: "Downloads and external services",
        paragraphs: [
          "The application download is served from Cloudflare R2 at downloads.edivect.com. Links to GitHub, including the repository and issue tracker, take you to a third-party service whose own terms and privacy policy apply.",
          "For the Store edition, Microsoft Store handles acquisition, updates and related operations under Microsoft's policies. Edivect has no direct access to your Store account data. GitHub Issues support is public: do not post personal or confidential content or screenshots containing sensitive information.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "This policy may be updated when the website, application, hosting or analytics choices change. The date at the top of this page will be updated when material changes are published.",
        ],
      },
    ],
  },
  sk: {
    title: "Ochrana súkromia",
    description:
      "Ako web Edivect a stiahnutá aplikácia pracujú s osobnými údajmi, cookies, telemetriou a službami tretích strán.",
    intro:
      "Edivect je navrhnutý tak, aby zhromažďoval čo najmenej údajov. Tieto zásady odlišujú statickú webovú stránku od aplikácie pre Windows, ktorú si stiahnete.",
    lastUpdated: "3. októbra 2026",
    lastUpdatedLabel: "Posledná aktualizácia",
    ownerLabel: "Prevádzkovateľ",
    ownerPending: "Údaje právneho vlastníka treba doplniť pred komerčným spustením.",
    contactTitle: "Otázky o súkromí",
    contactText:
      "Kým nebude zverejnený osobitný e-mail pre otázky súkromia, kontaktujte vlastníka projektu cez GitHub Issues. Do verejného hlásenia nevkladajte dôverné informácie.",
    contactLink: "Kontaktovať cez GitHub Issues",
    back: "Späť na úvodnú stránku",
    sections: [
      {
        title: "Rozsah",
        paragraphs: [
          "Tieto zásady sa vzťahujú na marketingový web Edivect a aplikáciu pre Windows distribuovanú ako portable download alebo cez Microsoft Store. Nevzťahujú sa na weby otvorené cez odkazy tretích strán.",
        ],
      },
      {
        title: "Hosťovanie webu",
        paragraphs: [
          "Web na edivect.com je hosťovaný službou Cloudflare Workers. Pôvodná adresa GitHub Pages môže zostať dostupná počas migrácie. Edivect na tomto webe neprevádzkuje vlastnú serverovú databázu, používateľské účty ani spracovanie formulárov. Poskytovatelia hostingu môžu podľa vlastných zásad spracovať technické údaje požiadavky, napríklad IP adresu a informácie o prehliadači.",
        ],
      },
      {
        title: "Údaje, cookies a lokálne úložisko",
        paragraphs: [
          "Web nepoužíva sledovacie cookies a nezhromažďuje mená, e-mailové adresy ani iné osobné údaje. Do lokálneho úložiska prehliadača ukladá iba voľbu svetlej alebo tmavej témy. Táto voľba zostáva vo vašom zariadení a Edivectu sa neposiela.",
        ],
      },
      {
        title: "Analytika a telemetria",
        paragraphs: [
          "Momentálne nie je nasadená analytika, reklamné pixely ani sledovacie skripty tretích strán. Stiahnutá aplikácia Edivect je navrhnutá na prácu offline a neobsahuje účty, cloudovú synchronizáciu ani telemetriu.",
        ],
      },
      {
        title: "Lokálne spracovanie obrazovky, schránky a OCR",
        paragraphs: [
          "Keď vyvoláte snímanie obrazovky, prácu so schránkou alebo rozpoznávanie textu, Edivect spracuje príslušný obsah lokálne na vašom počítači. Otvorené okná a schránka môžu obsahovať osobné alebo dôverné údaje. Vy rozhodujete, ktorý obsah použijete a či ho budete zdieľať. Obsah obrazovky, projekty ani výsledky OCR sa neposielajú vývojárovi.",
          "Aplikácia pracuje offline bez používateľských účtov, telemetrie a cloudovej synchronizácie. Snímky, anotácie a projektové súbory zostávajú vo vašom počítači, pokiaľ sa ich sami nerozhodnete zdieľať alebo presunúť.",
        ],
      },
      {
        title: "Lokálne úložisko a licenčný stav",
        paragraphs: [
          "Nastavenia, šablóny, obnova neuloženej práce a diagnostické logy zostávajú v lokálnom úložisku. Store verzia používa zapisovateľné používateľské úložisko mimo inštalačného priečinka. Logy sa neodosielajú automaticky; pred dobrovoľným zdieľaním s podporou skontrolujte ich obsah.",
          "Licenčný režim a časové údaje trialu sa ukladajú lokálne. Aktuálne vydania chránia tieto záznamy pomocou Windows DPAPI a záložného lokálneho záznamu. Staršie portable vydania môžu používať skorší formát lokálneho úložiska. Trial nevyžaduje platobnú kartu ani vzdialený účet.",
        ],
      },
      {
        title: "Exporty, zdieľanie a mazanie",
        paragraphs: [
          "Exporty sa ukladajú do Dokumenty\\Edivect\\Captures, do náhradného priečinka pri nedostupných Dokumentoch alebo do vami zvoleného umiestnenia. Projekty môžu obsahovať anotácie a samostatné snímky pozadia. Ak zvolíte priečinok synchronizovaný napríklad cez OneDrive, synchronizáciu vykonáva daná služba podľa vašich nastavení a jej vlastných zásad.",
          "Zdieľanie a mazanie projektov a exportov spravujete vy cez aplikáciu alebo súborový systém. Odinštalovanie Store aplikácie môže odstrániť jej lokálny profil; exporty mimo profilu môžu zostať. Niektoré miestne licenčné záznamy môžu pretrvať, preto odinštalovanie neznamená vymazanie všetkých údajov ani obnovenie trialu. Pred odinštalovaním si zálohujte dôležitú prácu.",
        ],
      },
      {
        title: "Sťahovanie a externé služby",
        paragraphs: [
          "Aplikácia sa sťahuje z úložiska Cloudflare R2 na downloads.edivect.com. Odkazy na GitHub, vrátane repozitára a hlásenia chýb, vedú na službu tretej strany, pre ktorú platia jej vlastné podmienky a zásady súkromia.",
          "Pri Store verzii zabezpečuje Microsoft Store získanie aplikácie, aktualizácie a súvisiace operácie podľa zásad Microsoftu. Edivect nemá priamy prístup k údajom vášho Store účtu. Podpora cez GitHub Issues je verejná: nevkladajte osobný ani dôverný obsah alebo snímky s citlivými údajmi.",
        ],
      },
      {
        title: "Zmeny týchto zásad",
        paragraphs: [
          "Tieto zásady sa môžu zmeniť pri zmene webu, aplikácie, hostingu alebo analytiky. Pri zverejnení podstatných zmien sa aktualizuje dátum v hornej časti stránky.",
        ],
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    description:
      "Wie die Edivect-Website und die heruntergeladene Anwendung mit personenbezogenen Daten, Cookies, Telemetrie und Drittanbietern umgehen.",
    intro:
      "Edivect ist darauf ausgelegt, so wenige Daten wie möglich zu erfassen. Diese Erklärung unterscheidet zwischen der statischen Website und der heruntergeladenen Windows-Anwendung.",
    lastUpdated: "3. Oktober 2026",
    lastUpdatedLabel: "Zuletzt aktualisiert",
    ownerLabel: "Betreiber",
    ownerPending: "Die Angaben zum rechtlichen Betreiber müssen vor dem kommerziellen Start ergänzt werden.",
    contactTitle: "Datenschutzfragen",
    contactText:
      "Bis eine eigene Datenschutz-E-Mail veröffentlicht wird, erreichen Sie den Projektinhaber über GitHub Issues. Stellen Sie dort keine vertraulichen Informationen ein.",
    contactLink: "Kontakt über GitHub Issues",
    back: "Zurück zur Startseite",
    sections: [
      {
        title: "Geltungsbereich",
        paragraphs: [
          "Diese Erklärung gilt für die Edivect-Marketingwebsite und die Windows-Anwendung als portablen Download oder aus dem Microsoft Store. Sie gilt nicht für Websites, die über Links zu Drittanbietern aufgerufen werden.",
        ],
      },
      {
        title: "Hosting der Website",
        paragraphs: [
          "Die Website unter edivect.com wird auf Cloudflare Workers gehostet. Die bisherige GitHub-Pages-Adresse kann während der Migration weiterhin verfügbar sein. Edivect betreibt hier keine eigene serverseitige Datenbank, Benutzerkonten oder Formularverarbeitung. Hostinganbieter können technische Anfragedaten wie IP-Adresse und Browserinformationen nach ihren eigenen Datenschutzbestimmungen verarbeiten.",
        ],
      },
      {
        title: "Daten, Cookies und lokaler Speicher",
        paragraphs: [
          "Die Website setzt keine Tracking-Cookies und erfasst keine Namen, E-Mail-Adressen oder anderen personenbezogenen Daten. Sie speichert lediglich Ihre Wahl zwischen hellem und dunklem Design im lokalen Speicher des Browsers. Diese Einstellung bleibt auf Ihrem Gerät und wird nicht an Edivect übertragen.",
        ],
      },
      {
        title: "Analyse und Telemetrie",
        paragraphs: [
          "Derzeit sind keine Analysewerkzeuge, Werbepixel oder Tracking-Skripte von Drittanbietern installiert. Die heruntergeladene Edivect-Anwendung ist für den Offlinebetrieb ausgelegt und enthält keine Konten, Cloud-Synchronisierung oder Telemetrie.",
        ],
      },
      {
        title: "Lokale Verarbeitung von Bildschirm, Zwischenablage und OCR",
        paragraphs: [
          "Wenn Sie Bildschirmaufnahmen, Zwischenablagefunktionen oder Texterkennung aufrufen, verarbeitet Edivect die entsprechenden Inhalte lokal auf Ihrem Computer. Geöffnete Fenster und die Zwischenablage können persönliche oder vertrauliche Daten enthalten. Sie entscheiden, welche Inhalte Sie verwenden und ob Sie sie teilen. Bildschirminhalte, Projekte und OCR-Ergebnisse werden nicht an den Entwickler gesendet.",
          "Die Anwendung funktioniert offline ohne Benutzerkonten, Telemetrie oder Cloud-Synchronisierung. Screenshots, Anmerkungen und Projektdateien bleiben auf Ihrem Computer, sofern Sie sie nicht selbst teilen oder verschieben.",
        ],
      },
      {
        title: "Lokaler Speicher und Lizenzstatus",
        paragraphs: [
          "Einstellungen, Vorlagen, Wiederherstellung ungespeicherter Arbeit und Diagnoseprotokolle bleiben im lokalen Speicher. Store-Versionen nutzen beschreibbaren Benutzerspeicher außerhalb des Installationsverzeichnisses. Protokolle werden nicht automatisch übertragen; prüfen Sie ihren Inhalt, bevor Sie sie freiwillig mit dem Support teilen.",
          "Lizenzmodus und Zeitangaben zum Test werden lokal gespeichert. Aktuelle Versionen schützen diese Daten mit Windows DPAPI und einem zusätzlichen lokalen Datensatz. Ältere portable Versionen können ein früheres lokales Speicherformat verwenden. Der Test erfordert weder eine Zahlungskarte noch ein Onlinekonto.",
        ],
      },
      {
        title: "Exporte, Teilen und Löschen",
        paragraphs: [
          "Exporte werden in Dokumente\\Edivect\\Captures, bei nicht verfügbaren Dokumenten in einem Ersatzordner oder an einem von Ihnen gewählten Ort gespeichert. Projekte können Anmerkungen und separate Hintergrundbilder enthalten. Bei einem synchronisierten Ordner, etwa in OneDrive, übernimmt der jeweilige Dienst die Synchronisierung nach Ihren Einstellungen und seinen Datenschutzbestimmungen.",
          "Sie verwalten das Teilen und Löschen von Projekten und Exporten über die Anwendung oder das Dateisystem. Eine Deinstallation der Store-Anwendung kann das lokale Profil entfernen; Exporte außerhalb des Profils können erhalten bleiben. Manche lokalen Lizenzdaten können bestehen bleiben. Die Deinstallation bedeutet daher weder die Löschung aller Daten noch einen Neustart des Tests. Sichern Sie wichtige Arbeit vor der Deinstallation.",
        ],
      },
      {
        title: "Downloads und externe Dienste",
        paragraphs: [
          "Der Anwendungsdownload wird über Cloudflare R2 unter downloads.edivect.com bereitgestellt. Links zu GitHub, einschließlich Repository und Fehlerverwaltung, führen zu einem Drittanbieter, für den dessen eigene Bedingungen und Datenschutzerklärung gelten.",
          "Bei der Store-Version übernimmt Microsoft Store Bezug, Updates und zugehörige Vorgänge nach Microsofts Bestimmungen. Edivect hat keinen direkten Zugriff auf Ihre Store-Kontodaten. GitHub Issues ist öffentlich: Veröffentlichen Sie dort keine persönlichen oder vertraulichen Inhalte oder Screenshots mit sensiblen Daten.",
        ],
      },
      {
        title: "Änderungen dieser Erklärung",
        paragraphs: [
          "Diese Erklärung kann aktualisiert werden, wenn sich Website, Anwendung, Hosting oder Analyseentscheidungen ändern. Bei wesentlichen Änderungen wird das Datum oben auf der Seite angepasst.",
        ],
      },
    ],
  },
};

const terms: Record<Lang, LegalPageCopy> = {
  en: {
    title: "Terms of Use",
    description:
      "Terms governing use of the Edivect website and the software download made available through it.",
    intro: "Terms for the website, Edivect Personal and the 30-day Commercial Trial.",
    lastUpdated: "3 October 2026",
    lastUpdatedLabel: "Last updated",
    ownerLabel: "Provider",
    ownerPending: "Legal owner details must be added before commercial launch.",
    contactTitle: "Questions about these terms",
    contactText:
      "Until a dedicated support email is published, contact the project owner through GitHub Issues. Do not include confidential information in a public issue.",
    contactLink: "Contact via GitHub Issues",
    back: "Back to the home page",
    sections: [
      {
        title: "Acceptance and scope",
        paragraphs: [
          "By using this website or downloading Edivect, you agree to follow these terms and applicable law. If you do not agree, do not use the website or download the software.",
        ],
      },
      {
        title: "Website use",
        paragraphs: [
          "You may use the website to learn about Edivect, review release information and obtain the published download. You must not attempt to disrupt the site, misrepresent its content, or use it in a way that infringes another person's rights.",
        ],
      },
      {
        title: "Software download and integrity",
        paragraphs: [
          "Edivect is currently distributed as a portable Windows executable. Verify the published filename, version, file size and SHA-256 before running it. Do not run a copy whose checksum does not match the value shown on the official download page.",
          "The Microsoft Store edition is a separate distribution channel. Obtain it through the Store link when it is available on the download page. Its published version may differ from the portable version; each channel shows its own version. These Store licence terms describe the prepared Store edition and do not replace the terms included in an older portable download.",
        ],
      },
      { title: "Personal / Commercial Trial — portable download", paragraphs: usageTerms.en.split("\n\n") },
      { title: "Personal / Commercial Trial — Microsoft Store edition", paragraphs: storeUsageTerms.en.split("\n\n") },
      {
        title: "Intellectual property",
        paragraphs: [
          "Edivect, its website content, branding and software remain the property of their respective rights holders. No ownership is transferred by viewing the website or downloading a build. Third-party names and trademarks belong to their respective owners.",
        ],
      },
      { title: "Availability and changes", paragraphs: ["Personal has no time limit. Commercial Trial lasts 30 days from its first activation; opening, saving and exporting existing work remain available after expiry. The prepared Store edition offers the one-time extension described above. Older portable editions follow their included licence terms. Updates are not guaranteed."] },
      {
        title: "No warranty and limitation of liability",
        paragraphs: [
          "To the extent permitted by applicable law, the website and pre-release or trial software are provided without guarantees of uninterrupted availability or fitness for a particular purpose. Nothing in these terms excludes liability that cannot lawfully be excluded.",
        ],
      },
      {
        title: "Third-party services and governing law",
        paragraphs: [
          "Third-party services, including GitHub, are governed by their own terms. The governing law and legal venue must be finalized together with the provider's legal identity before commercial launch; mandatory consumer rights continue to apply where relevant.",
        ],
      },
    ],
  },
  sk: {
    title: "Podmienky používania",
    description:
      "Podmienky používania webu Edivect a softvéru, ktorý je prostredníctvom neho dostupný na stiahnutie.",
    intro: "Podmienky webu, Edivect Personal a 30-dňového Commercial Trial.",
    lastUpdated: "3. októbra 2026",
    lastUpdatedLabel: "Posledná aktualizácia",
    ownerLabel: "Poskytovateľ",
    ownerPending: "Údaje právneho vlastníka treba doplniť pred komerčným spustením.",
    contactTitle: "Otázky k podmienkam",
    contactText:
      "Kým nebude zverejnený osobitný e-mail podpory, kontaktujte vlastníka projektu cez GitHub Issues. Do verejného hlásenia nevkladajte dôverné informácie.",
    contactLink: "Kontaktovať cez GitHub Issues",
    back: "Späť na úvodnú stránku",
    sections: [
      {
        title: "Súhlas a rozsah",
        paragraphs: [
          "Používaním webu alebo stiahnutím Edivectu súhlasíte s dodržiavaním týchto podmienok a platných právnych predpisov. Ak nesúhlasíte, web nepoužívajte a softvér nesťahujte.",
        ],
      },
      {
        title: "Používanie webu",
        paragraphs: [
          "Web môžete používať na získanie informácií o Edivectu, prezeranie vydaní a stiahnutie zverejneného súboru. Nesmiete sa pokúšať narušiť jeho prevádzku, skresľovať obsah ani ho používať spôsobom, ktorý porušuje práva iných osôb.",
        ],
      },
      {
        title: "Stiahnutie a integrita softvéru",
        paragraphs: [
          "Edivect sa momentálne distribuuje ako prenosný spustiteľný súbor pre Windows. Pred spustením overte zverejnený názov súboru, verziu, veľkosť a SHA-256. Nespúšťajte kópiu, ktorej kontrolný súčet sa nezhoduje s hodnotou na oficiálnej stránke sťahovania.",
          "Verzia z Microsoft Store je samostatný distribučný kanál. Získajte ju cez Store odkaz, keď bude dostupný na stránke sťahovania. Jej vydaná verzia sa môže líšiť od portable verzie; každý kanál uvádza vlastnú verziu. Tieto Store podmienky opisujú pripravovanú Store verziu a nenahrádzajú podmienky vložené do staršieho portable downloadu.",
        ],
      },
      { title: "Personal / Commercial Trial — portable download", paragraphs: usageTerms.sk.split("\n\n") },
      { title: "Personal / Commercial Trial — verzia z Microsoft Store", paragraphs: storeUsageTerms.sk.split("\n\n") },
      {
        title: "Duševné vlastníctvo",
        paragraphs: [
          "Edivect, obsah webu, značka a softvér zostávajú vlastníctvom príslušných držiteľov práv. Zobrazením webu ani stiahnutím zostavenia sa vlastníctvo neprevádza. Názvy a ochranné známky tretích strán patria ich vlastníkom.",
        ],
      },
      { title: "Dostupnos\u0165 a zmeny", paragraphs: ["Personal nemá časový limit. Commercial Trial trvá 30 dní od prvej aktivácie; otvorenie, uloženie a export existujúcej práce zostávajú dostupné aj po vypršaní. Pripravovaná Store verzia ponúka jednorazové predĺženie opísané vyššie. Staršie portable vydania sa riadia vloženými podmienkami. Aktualizácie nie sú zaručené."] },
      {
        title: "Bez záruky a obmedzenie zodpovednosti",
        paragraphs: [
          "V rozsahu povolenom platným právom sa web a predbežný alebo skúšobný softvér poskytujú bez záruky nepretržitej dostupnosti či vhodnosti na konkrétny účel. Nič v týchto podmienkach nevylučuje zodpovednosť, ktorú podľa zákona nemožno vylúčiť.",
        ],
      },
      {
        title: "Služby tretích strán a rozhodné právo",
        paragraphs: [
          "Pre služby tretích strán vrátane GitHubu platia ich vlastné podmienky. Rozhodné právo a príslušný súd treba určiť spolu s právnou identitou poskytovateľa pred komerčným spustením; povinné práva spotrebiteľa zostávajú zachované.",
        ],
      },
    ],
  },
  de: {
    title: "Nutzungsbedingungen",
    description:
      "Bedingungen für die Nutzung der Edivect-Website und des darüber bereitgestellten Softwaredownloads.",
    intro: "Bedingungen für die Website, Edivect Personal und den 30-tägigen Commercial Trial.",
    lastUpdated: "3. Oktober 2026",
    lastUpdatedLabel: "Zuletzt aktualisiert",
    ownerLabel: "Anbieter",
    ownerPending: "Die Angaben zum rechtlichen Betreiber müssen vor dem kommerziellen Start ergänzt werden.",
    contactTitle: "Fragen zu diesen Bedingungen",
    contactText:
      "Bis eine eigene Support-E-Mail veröffentlicht wird, erreichen Sie den Projektinhaber über GitHub Issues. Stellen Sie dort keine vertraulichen Informationen ein.",
    contactLink: "Kontakt über GitHub Issues",
    back: "Zurück zur Startseite",
    sections: [
      {
        title: "Zustimmung und Geltungsbereich",
        paragraphs: [
          "Mit der Nutzung dieser Website oder dem Download von Edivect erklären Sie sich mit diesen Bedingungen und dem geltenden Recht einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie die Website nicht und laden Sie die Software nicht herunter.",
        ],
      },
      {
        title: "Nutzung der Website",
        paragraphs: [
          "Sie dürfen die Website nutzen, um sich über Edivect zu informieren, Versionshinweise zu lesen und den veröffentlichten Download zu beziehen. Sie dürfen den Betrieb nicht stören, Inhalte nicht verfälschen und die Website nicht rechtsverletzend nutzen.",
        ],
      },
      {
        title: "Softwaredownload und Integrität",
        paragraphs: [
          "Edivect wird derzeit als portable Windows-Programmdatei bereitgestellt. Prüfen Sie vor dem Start den veröffentlichten Dateinamen, die Version, Dateigröße und SHA-256-Prüfsumme. Führen Sie keine Kopie aus, deren Prüfsumme nicht mit der offiziellen Downloadseite übereinstimmt.",
          "Die Microsoft-Store-Version ist ein eigener Vertriebskanal. Beziehen Sie sie über den Store-Link, sobald dieser auf der Downloadseite verfügbar ist. Ihre veröffentlichte Version kann von der portablen Version abweichen; jeder Kanal zeigt seine eigene Version. Diese Store-Lizenzbedingungen beschreiben die vorbereitete Store-Version und ersetzen nicht die Bedingungen eines älteren portablen Downloads.",
        ],
      },
      { title: "Personal / Commercial Trial — portabler Download", paragraphs: usageTerms.de.split("\n\n") },
      { title: "Personal / Commercial Trial — Microsoft-Store-Version", paragraphs: storeUsageTerms.de.split("\n\n") },
      {
        title: "Geistiges Eigentum",
        paragraphs: [
          "Edivect, Website-Inhalte, Marke und Software bleiben Eigentum der jeweiligen Rechteinhaber. Durch den Besuch der Website oder den Download eines Builds wird kein Eigentum übertragen. Namen und Marken Dritter gehören ihren jeweiligen Inhabern.",
        ],
      },
      { title: "Verf\u00fcgbarkeit und \u00c4nderungen", paragraphs: ["Personal hat kein Zeitlimit. Commercial Trial läuft 30 Tage ab erster Aktivierung; vorhandene Arbeit bleibt danach zum Öffnen, Speichern und Export verfügbar. Die vorbereitete Store-Version bietet die oben beschriebene einmalige Verlängerung. Ältere portable Versionen folgen ihren enthaltenen Lizenzbedingungen. Updates sind nicht garantiert."] },
      {
        title: "Keine Gewährleistung und Haftungsbegrenzung",
        paragraphs: [
          "Soweit gesetzlich zulässig, werden Website sowie Vorab- oder Testsoftware ohne Gewähr für ununterbrochene Verfügbarkeit oder Eignung für einen bestimmten Zweck bereitgestellt. Eine gesetzlich nicht ausschließbare Haftung bleibt unberührt.",
        ],
      },
      {
        title: "Drittanbieter und anwendbares Recht",
        paragraphs: [
          "Für Drittanbieter einschließlich GitHub gelten deren eigene Bedingungen. Anwendbares Recht und Gerichtsstand müssen zusammen mit der rechtlichen Identität des Anbieters vor dem kommerziellen Start festgelegt werden; zwingende Verbraucherrechte bleiben unberührt.",
        ],
      },
    ],
  },
};

export function getLegalCopy(kind: LegalPageKind, lang: Lang): LegalPageCopy {
  return kind === "privacy" ? privacy[lang] : terms[lang];
}

