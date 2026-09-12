import usageTerms from "@/lib/usage-terms.json";
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
    lastUpdated: "3 September 2026",
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
          "This policy applies to the Edivect marketing website and the Edivect application distributed from it. It does not cover websites reached through third-party links.",
        ],
      },
      {
        title: "Website hosting",
        paragraphs: [
          "The website is a static site hosted on GitHub Pages. Edivect does not run its own server-side database, account system or form processing on this site. GitHub may process technical request data, such as IP addresses and browser information, as the hosting provider under its own privacy terms.",
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
        title: "Downloaded application",
        paragraphs: [
          "Screenshots, annotations and project files created in Edivect remain on your computer unless you choose to share or move them. The application does not need a network connection for its normal operation.",
        ],
      },
      {
        title: "Downloads and external services",
        paragraphs: [
          "The application download is served as a static file from the same GitHub Pages site. Links to GitHub, including the repository and issue tracker, take you to a third-party service whose own terms and privacy policy apply.",
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
    lastUpdated: "3. septembra 2026",
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
          "Tieto zásady sa vzťahujú na marketingový web Edivect a aplikáciu Edivect, ktorá sa z neho distribuuje. Nevzťahujú sa na weby otvorené cez odkazy tretích strán.",
        ],
      },
      {
        title: "Hosťovanie webu",
        paragraphs: [
          "Web je statická stránka hosťovaná službou GitHub Pages. Edivect na tomto webe neprevádzkuje vlastnú serverovú databázu, používateľské účty ani spracovanie formulárov. GitHub môže ako poskytovateľ hostingu podľa vlastných zásad spracovať technické údaje požiadavky, napríklad IP adresu a informácie o prehliadači.",
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
        title: "Stiahnutá aplikácia",
        paragraphs: [
          "Snímky obrazovky, anotácie a projektové súbory vytvorené v Edivectu zostávajú vo vašom počítači, pokiaľ sa ich sami nerozhodnete zdieľať alebo presunúť. Aplikácia na bežnú prevádzku nepotrebuje sieťové pripojenie.",
        ],
      },
      {
        title: "Sťahovanie a externé služby",
        paragraphs: [
          "Aplikácia sa sťahuje ako statický súbor z toho istého webu GitHub Pages. Odkazy na GitHub, vrátane repozitára a hlásenia chýb, vedú na službu tretej strany, pre ktorú platia jej vlastné podmienky a zásady súkromia.",
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
    lastUpdated: "3. September 2026",
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
          "Diese Erklärung gilt für die Edivect-Marketingwebsite und die darüber bereitgestellte Edivect-Anwendung. Sie gilt nicht für Websites, die über Links zu Drittanbietern aufgerufen werden.",
        ],
      },
      {
        title: "Hosting der Website",
        paragraphs: [
          "Die Website ist eine statische, auf GitHub Pages gehostete Seite. Edivect betreibt hier keine eigene serverseitige Datenbank, Benutzerkonten oder Formularverarbeitung. GitHub kann als Hostinganbieter technische Anfragedaten wie IP-Adresse und Browserinformationen nach seinen eigenen Datenschutzbestimmungen verarbeiten.",
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
        title: "Heruntergeladene Anwendung",
        paragraphs: [
          "Screenshots, Anmerkungen und Projektdateien, die Sie in Edivect erstellen, bleiben auf Ihrem Computer, sofern Sie sie nicht selbst teilen oder verschieben. Für den normalen Betrieb benötigt die Anwendung keine Netzwerkverbindung.",
        ],
      },
      {
        title: "Downloads und externe Dienste",
        paragraphs: [
          "Der Anwendungsdownload wird als statische Datei von derselben GitHub-Pages-Website bereitgestellt. Links zu GitHub, einschließlich Repository und Fehlerverwaltung, führen zu einem Drittanbieter, für den dessen eigene Bedingungen und Datenschutzerklärung gelten.",
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
    lastUpdated: "12 September 2026",
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
        ],
      },
      { title: "Personal / Commercial Trial", paragraphs: usageTerms.en.split("\n\n") },
      {
        title: "Intellectual property",
        paragraphs: [
          "Edivect, its website content, branding and software remain the property of their respective rights holders. No ownership is transferred by viewing the website or downloading a build. Third-party names and trademarks belong to their respective owners.",
        ],
      },
      { title: "Availability and changes", paragraphs: ["Personal has no time limit. Commercial Trial lasts 30 days from its first activation; opening, saving and exporting existing work remain available after expiry. Updates and trial extensions are not guaranteed."] },
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
    lastUpdated: "12. septembra 2026",
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
        ],
      },
      { title: "Personal / Commercial Trial", paragraphs: usageTerms.sk.split("\n\n") },
      {
        title: "Duševné vlastníctvo",
        paragraphs: [
          "Edivect, obsah webu, značka a softvér zostávajú vlastníctvom príslušných držiteľov práv. Zobrazením webu ani stiahnutím zostavenia sa vlastníctvo neprevádza. Názvy a ochranné známky tretích strán patria ich vlastníkom.",
        ],
      },
      { title: "Dostupnos\u0165 a zmeny", paragraphs: ["Personal nemá časový limit. Commercial Trial trvá 30 dní od prvej aktivácie; otvorenie, uloženie a export existujúcej práce zostávajú dostupné aj po vypršaní. Aktualizácie a predĺženia trialu nie sú zaručené."] },
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
    lastUpdated: "12. September 2026",
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
        ],
      },
      { title: "Personal / Commercial Trial", paragraphs: usageTerms.de.split("\n\n") },
      {
        title: "Geistiges Eigentum",
        paragraphs: [
          "Edivect, Website-Inhalte, Marke und Software bleiben Eigentum der jeweiligen Rechteinhaber. Durch den Besuch der Website oder den Download eines Builds wird kein Eigentum übertragen. Namen und Marken Dritter gehören ihren jeweiligen Inhabern.",
        ],
      },
      { title: "Verf\u00fcgbarkeit und \u00c4nderungen", paragraphs: ["Personal hat kein Zeitlimit. Commercial Trial läuft 30 Tage ab erster Aktivierung; vorhandene Arbeit bleibt danach zum Öffnen, Speichern und Export verfügbar. Updates und Testverlängerungen sind nicht garantiert."] },
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

