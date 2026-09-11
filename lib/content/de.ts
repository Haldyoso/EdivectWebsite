import type { Copy } from "@/types";

/**
 * German. Written for the CAD/QA audience the site targets, so drawing terms
 * use the words that appear on a real technische Zeichnung — "Schriftfeld" for
 * the title block, "Bemaßung" for a dimension, "Anfasser" for resize handles —
 * rather than literal renderings of the English.
 */
export const de: Copy = {
  meta: {
    tagline: "Direkt auf den Bildschirm zeichnen. Alles später bearbeiten.",
    description:
      "Das portable Anmerkungswerkzeug für Ingenieure. Jeder Pfeil, jede Sprechblase und jede Bemaßung bleibt ein voll bearbeitbares Vektorobjekt — verschieben, umfärben, neu gruppieren, erneut exportieren. Ohne Installation, ohne Anmeldung, ohne Internet.",
    social:
      "Portabel · Windows 10 & 11 · Ohne Installation · Vektor, immer bearbeitbar",
  },
  ui: {
    skipToContent: "Zum Inhalt springen",
    backToTop: "ScreenMark — zurück nach oben",
    home: "ScreenMark — Startseite",
    githubRepo: "Repository der ScreenMark-Website auf GitHub",
    openMenu: "Menü",
    closeMenu: "Menü schließen",
    download: "Herunterladen",
    downloadForWindows: "Für Windows herunterladen",
    language: "Sprache",
    switchLanguage: "Sprache wechseln",
    toLight: "Zum hellen Design wechseln",
    toDark: "Zum dunklen Design wechseln",
    yes: "Ja",
    no: "Nein",
    primaryNav: "Hauptnavigation",
    benefitsLabel: "Warum ScreenMark",
    galleryLabel: "Screenshot-Galerie",
    enlarge: "Vergrößern",
    close: "Schließen",
    previousScreenshot: "Vorheriger Screenshot",
    nextScreenshot: "Nächster Screenshot",
    screenshotViewer: "Screenshot-Ansicht",
    imageOfTotal: "Bild",
  },
  nav: {
    features: "Funktionen",
    how: "So funktioniert’s",
    compare: "Vergleich",
    faq: "FAQ",
  },
  hero: {
    badge: "Portabel · Windows 10 & 11 · Ohne Installation",
    titleLead: "Direkt auf den Bildschirm zeichnen.",
    titleAccent: "Alles später bearbeiten.",
    description:
      "Portable Anmerkungen für Ingenieure. Pfeile, Sprechblasen und Maße bleiben bearbeitbar — ohne Installation, Konto oder Internet.",
    ctaPrimary: "Öffentliche Testversion herunterladen",
    ctaSecondary: "Neuigkeiten ansehen",
    chips: [
      "Offline",
      "Keine Telemetrie",
      "Ohne Adminrechte",
      "Mehrere Monitore",
      "Vektor · immer bearbeitbar",
    ],
    frameTitle: "ScreenMark — Standbild · Monitor 1",
    screenshotAlt:
      "Das Werkzeugfenster von ScreenMark neben einer eingefrorenen technischen Zeichnung mit Anmerkungen: nummerierte Marker ①②③ und ein roter Pfeil, der ausgewählt und weiterhin bearbeitbar ist.",
  },
  benefits: {
    speed: {
      title: "Öffnen → zeichnen → exportieren",
      description:
        "Vom Start bis zum ersten Strich in unter zwei Sekunden. Die fertige Markierung landet mit einem Tastendruck in der Zwischenablage.",
    },
    editable: {
      title: "Alles bleibt bearbeitbar",
      description:
        "Jedes Objekt lässt sich auswählen, verschieben, drehen, umfärben oder neu gruppieren — auch Stunden später. Nichts wird fixiert, bis Sie exportieren.",
    },
    private: {
      title: "Datenschutz von Grund auf",
      description:
        "Läuft vollständig offline. Kein Konto, keine Telemetrie, keine Cloud. Ihre Screenshots verlassen den Rechner nie.",
    },
    cad: {
      title: "Für CAD-Arbeitsabläufe gebaut",
      description:
        "Drei-Punkte-Bögen, Winkelmessung und Standbild passen dazu, wie Anwender von CATIA, NX und Creo ohnehin denken.",
    },
  },
  showcase: {
    heading: {
      overline: "Interaktives Bearbeiten",
      title: "Ein Vektoreditor, der so schnell öffnet wie ein Screenshot",
      subtitle:
        "Fahren Sie über eine Funktion, um sie im Arbeitsbereich zu sehen.",
    },
    items: {
      "editable-objects": {
        name: "Bearbeitbare Objekte",
        short: "Alles auswählen, verschieben, drehen und umfärben — jederzeit.",
        description:
          "Nichts wird fest eingebrannt. Ein Klick auf einen Pfeil, eine Form oder eine Beschriftung liefert acht Anfasser zum Skalieren, einen zum Drehen und per Rechtsklick ein Menü für Farbe, Strichstärke und Deckkraft — Stunden nach dem Zeichnen.",
        alt: "Ein rotes Rechteck über einer Bohrung auf einer technischen Zeichnung, erneut ausgewählt, mit acht Anfassern zum Skalieren und einem Anfasser zum Drehen darüber.",
      },
      "cad-measurement": {
        name: "CAD-Messung",
        short: "Drei-Punkte-Bögen und Winkelwerkzeuge mit Live-Anzeige.",
        description:
          "Winkel- und Drei-Punkte-Bogen folgen der Handbewegung aus CATIA/NX: Anfang klicken, Ende, dann den Scheitel — mit einer Live-Anzeige für Grad bzw. Radius, die dem Cursor folgt. Messungen bleiben bearbeitbare Objekte.",
        alt: "Ein zwischen zwei Schraubenlöchern gemessener Winkel mit 35,2°, daneben eine Bemaßung von 58 mm auf derselben Zeichnung.",
      },
      "qa-stamps": {
        name: "QS-Stempel & Marker",
        short: "OK-/NOK-Stempel und automatisch nummerierte Marker.",
        description:
          "Setzen Sie fortlaufend nummerierte Marker ①②③, Buchstabenmarker, Haken und Kreuze sowie OK-/NOK-Stempel mit einem Klick in einheitlicher Größe — gemacht für Prüfberichte.",
        alt: "Eine technische Zeichnung mit nummerierten Markern ①②③, einem grünen OK-Stempel und daneben einem roten NOK-Stempel.",
      },
      "blur-focus": {
        name: "Unschärfe & Fokus",
        short: "Sensible Daten verbergen, Wichtiges hervorheben.",
        description:
          "Machen Sie Seriennummern und Bedienernamen unkenntlich oder legen Sie ein Fokusrechteck darüber, das alles außer dem besprochenen Bereich abdunkelt. Beides bleibt ein anpassbares Objekt.",
        alt: "Eine Zeichnung, die von einem Fokusrechteck abgedunkelt wird, sodass nur das Schriftfeld hell bleibt; Seriennummer und beide Bedienernamen sind unkenntlich gemacht.",
      },
      "freeze-boards": {
        name: "Standbild & Tafel",
        short: "Laufende Bildschirme einfrieren oder auf Weiß/Schwarz skizzieren.",
        description:
          "Frieren Sie alle Monitore ein, damit sich laufende Messwerte nicht mitten in der Markierung ändern, oder wechseln Sie für Schulungen auf Weiß- bzw. Schwarztafel — die Anmerkungen bleiben je Modus erhalten.",
        alt: "Der Bildschirm als eingefrorenes Standbild, auf das Anmerkungen gezeichnet werden; der Standbild-Schalter im Werkzeugfenster leuchtet.",
      },
    },
  },
  howItWorks: {
    heading: {
      overline: "Drei Schritte",
      title: "Von „das muss markiert werden“ zum versendeten Bild in Sekunden",
    },
    steps: {
      open: {
        title: "Öffnen",
        description:
          "Globales Tastenkürzel drücken. Die Überlagerung erscheint auf dem aktuellen Monitor, das zuletzt benutzte Werkzeug ist schon aktiv. Läuft das Bild noch, frieren Sie es ein.",
      },
      draw: {
        title: "Zeichnen",
        description:
          "Pfeile, Sprechblasen, Unschärfe, Stempel, Messungen — jedes auf einer einzigen Taste. Alles, was Sie setzen, bleibt ein auswählbares Objekt.",
      },
      export: {
        title: "Exportieren",
        description:
          "In die Zwischenablage kopieren, als PNG/JPG speichern oder das bearbeitbare JSON-Projekt für eine spätere Prüfung behalten. Den letzten Export wiederholen Sie mit einer Taste.",
      },
    },
  },
  featureGrid: {
    heading: {
      overline: "Alles enthalten",
      title: "Ein portables Werkzeug, der komplette Anmerkungskasten",
    },
    items: {
      pen: {
        title: "Stift & Textmarker",
        description:
          "Freihandstrich und transparentes Hervorheben, auf Wunsch mit automatischem Ausblenden für Präsentationen.",
      },
      lines: {
        title: "Linien & Pfeile",
        description:
          "Gerade Linien und Pfeile mit vier Spitzenformen, gestrichelt/gepunktet und Einrasten auf 45° per Shift.",
      },
      shapes: {
        title: "Formen",
        description:
          "Rechteck, Rechteck mit abgerundeten Ecken, Ellipse und Drei-Punkte-Bogen mit einstellbarem Eckenradius.",
      },
      text: {
        title: "Text & Sprechblasen",
        description:
          "Formatierbare Textobjekte und Sprechblasen mit voller Typografie-Kontrolle.",
      },
      markers: {
        title: "Zahlen- & Buchstabenmarker",
        description:
          "Fortlaufend nummerierte Marker, die Sie neu nummerieren, zurücksetzen oder zwischen Ziffern und Buchstaben umschalten können.",
      },
      stamps: {
        title: "Haken, Kreuz & Stempel",
        description:
          "Haken, Kreuze und OK-/NOK-Stempel mit einem Klick, alle in einheitlicher Größe.",
      },
      layers: {
        title: "Ebenen & Gruppen",
        description:
          "Objekte gruppieren, sperren, ausblenden und neu anordnen — in einem Ebenenbereich im Figma-Stil.",
      },
      history: {
        title: "Verlauf & automatische Sicherung",
        description:
          "Benannter, anklickbarer Rückgängig-Verlauf und eine automatische Sicherung alle 30 Sekunden, die einen Absturz übersteht.",
      },
      export: {
        title: "Flexibler Export",
        description:
          "PNG, transparentes PNG, JPG, Zwischenablage, einzelner Monitor, ausgewählter Bereich — oder ein bearbeitbares JSON-Projekt.",
      },
    },
  },
  compare: {
    heading: {
      overline: "Im Vergleich",
      title: "Bearbeiten auf Illustrator-Niveau, so schnell wie das Snipping Tool",
      subtitle:
        "Pointofix kommt ScreenMark am nächsten — dieselbe Überlagerung zum Zeichnen an beliebiger Stelle, kostenlos, und das seit Jahren. Der Unterschied zeigt sich, sobald Sie die Maus loslassen.",
    },
    regionLabel:
      "Funktionsvergleich mit Pointofix und weiteren Windows-Werkzeugen zum Anmerken und Aufnehmen",
    scrollHint: "Wischen oder horizontal scrollen, um alle Werkzeuge zu vergleichen.",
    caption:
      "Wie ScreenMark im Vergleich zu Pointofix, Snipping Tool, Greenshot und ShareX abschneidet",
    capability: "Funktion",
    rows: {
      editable: "Anmerkungen bleiben nach dem Loslassen bearbeitbar",
      vector: "Vektorobjekte (verschieben / skalieren / drehen)",
      layers: "Ebenen, Gruppen, Sperren & Anordnen",
      measurement: "CAD-Bogen- und Winkelmessung",
      scale: "Maßstab der realen Welt (px → mm)",
      projectFile: "Projektdatei, die Objekte bearbeitbar hält",
      liveScreen: "Zeichnet auf den laufenden Bildschirm, nicht auf eine Aufnahme",
      portable: "Portabel — ohne Installation",
      offline: "Läuft vollständig offline",
    },
    qualifiers: {
      limited: "eingeschränkt",
      inEditor: "im Editor",
      untilDeselect: "bis zum Abwählen",
      greenshotFile: ".greenshot",
      jsonFile: "JSON",
      builtIn: "in Windows enthalten",
      zipBuild: "ZIP-Variante",
    },
  },
  gallery: {
    heading: {
      overline: "Im Arbeitsbereich",
      title: "So sieht es auf echten Bildschirmen aus",
    },
    items: {
      markup: {
        title: "Markierung auf eingefrorenem Bildschirm",
        caption:
          "Nummerierte Marker und ein Pfeil über einer eingefrorenen technischen Zeichnung; der Pfeil ist weiterhin ausgewählt und bearbeitbar.",
      },
      handles: {
        title: "Bearbeitbare Geometrie",
        caption:
          "Ein Rechteck, lange nach dem Zeichnen erneut ausgewählt, mit acht Anfassern zum Skalieren und einem zum Drehen.",
      },
      palette: {
        title: "Befehlspalette",
        caption:
          "Ctrl+Shift+P öffnet eine durchsuchbare Liste aller Befehle samt der Taste, die sie ausführt.",
      },
      qa: {
        title: "QS-Prüfung",
        caption:
          "Nummerierte Befunde auf einer Zeichnung mit einem grünen OK- und einem roten NOK-Stempel in gleicher Größe.",
      },
      angle: {
        title: "Winkel und Bemaßung",
        caption:
          "Ein Winkel von 35,2° zwischen zwei Schraubenlöchern und eine Bemaßung von 58 mm, beide direkt auf den Bildschirm gezeichnet.",
      },
      export: {
        title: "Export-Menü",
        caption:
          "Der Export bietet PNG mit Screenshot, transparentes PNG, JPG, Zwischenablage, Druck, Bereich und Bildschirmaufnahme.",
      },
    },
  },
  shortcuts: {
    heading: {
      overline: "Tastatur zuerst",
      title: "Für Hände, die die Tastatur nie verlassen",
      subtitle:
        "Jedes Werkzeug liegt auf einem Buchstaben. Jedes Kürzel steht in seinem Tooltip — die Oberfläche erklärt sich selbst.",
    },
    items: {
      select: "Auswahlwerkzeug",
      arrow: "Pfeil",
      rectangle: "Rechteck",
      text: "Text",
      markers: "Nummernmarker",
      dimension: "Bemaßung",
      angle: "Winkelmessung",
      blur: "Unschärfe",
      exportRegion: "Bereich exportieren",
      freeze: "Bildschirm einfrieren",
      undo: "Rückgängig",
      repeat: "Letzten Befehl wiederholen",
    },
  },
  faq: {
    heading: {
      overline: "Fragen",
      title: "Häufig gestellt",
    },
    items: {
      install: {
        question: "Muss ich etwas installieren?",
        answer:
          "Nein. ScreenMark ist eine portable Anwendung — EXE herunterladen und starten. Es braucht kein Installationsprogramm, keine Administratorrechte und keine Eingriffe in die Registry, funktioniert also auch auf gesperrten Firmenrechnern und vom USB-Stick.",
      },
      editable: {
        question: "Was heißt „alles bleibt bearbeitbar“ genau?",
        answer:
          "Jede Markierung ist ein Vektorobjekt, keine eingebrannten Pixel. Jeden Pfeil, jede Form, jeden Text und jede Messung können Sie später erneut auswählen und verschieben, skalieren, drehen, umfärben, neu gruppieren oder löschen — genau wie Objekte in PowerPoint oder Illustrator. Fixiert wird erst beim Export in ein Bild.",
      },
      internet: {
        question: "Sendet die Anwendung Daten ins Internet?",
        answer:
          "Nie. Sie läuft vollständig offline, ohne Konto, ohne Cloud-Abgleich und ohne Telemetrie. Ihre Screenshots und Anmerkungen bleiben auf Ihrem Rechner.",
      },
      monitors: {
        question: "Funktioniert es mit mehreren Monitoren?",
        answer:
          "Ja. Das Standbild nimmt jeden Monitor einzeln auf, und die schwebende Werkzeugleiste folgt dem Cursor zwischen den Bildschirmen. Aufbauten mit mehreren Monitoren und unterschiedlichem DPI werden unterstützt.",
      },
      reopen: {
        question: "Kann ich eine Anmerkung später wieder öffnen und weiterbearbeiten?",
        answer:
          "Ja. Speichern Sie Ihre Arbeit als .smpj-Projekt — lesbares JSON —, dann bleibt jedes Objekt bearbeitbar; zum Teilen exportieren Sie ein PNG/JPG. Die automatische Sicherung hält zusätzlich einen laufenden Stand vor, sodass Sie nach einem Absturz weiterarbeiten können.",
      },
      windows: {
        question: "Welche Windows-Versionen werden unterstützt?",
        answer:
          "Windows 10 und Windows 11, 64-Bit. Die Oberfläche nutzt das native Segoe UI und die Fluent-Konventionen, skaliert korrekt auf Displays mit hohem DPI und richtet sich nach Ihren Systemeinstellungen für helles/dunkles Design und reduzierte Bewegung.",
      },
    },
  },
  downloadCta: {
    platform: "Windows 10 & 11 · 64-Bit",
    title: "ScreenMark herunterladen",
    subtitle:
      "Portable EXE — herunterladen und starten. Ohne Installation, ohne Adminrechte, ohne Internet.",
    publicTrialButton: "Öffentliche Testversion herunterladen",
    publicTrialValidity:
      "Öffentliche Testversion v{version}, gültig bis {date}",
    olderVersions: "Versionsverlauf",
    versionLabel: "Version",
    checksumLabel: "SHA-256",
    checksumPending: "SHA-256 wird mit dem Release veröffentlicht",
  },
  footer: {
    blurb:
      "Direkt auf den Bildschirm zeichnen. Alles später bearbeiten. Portable Anmerkungen für Ingenieure unter Windows.",
    columns: {
      product: "Produkt",
      resources: "Ressourcen",
      connect: "Kontakt",
    },
    links: {
      features: "Funktionen",
      how: "So funktioniert’s",
      compare: "Vergleich",
      download: "Herunterladen",
      faq: "FAQ",
      documentation: "Dokumentation",
      changelog: "Änderungen",
      shortcuts: "Tastenkürzel",
      github: "GitHub",
      license: "Softwarelizenz",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      issues: "Fehler melden",
    },
    legal: "© 2026 ScreenMark.",
    traits: "Portabel · Offline · Keine Telemetrie",
  },
  changelog: {
    title: "Änderungen",
    description:
      "Jede veröffentlichte Version von ScreenMark und was sich darin geändert hat.",
    back: "Zurück zur Startseite",
    intro:
      "Versionshinweise zur Anwendung ScreenMark, die neueste zuerst.",
    empty: "Es wurden noch keine Versionshinweise veröffentlicht.",
    sourceNote:
      "Wörtlich aus der Datei CHANGELOG.md des Anwendungs-Repositorys übernommen, die auf Slowakisch verfasst ist.",
    currentBuild:
      "Der aktuelle Download ist v{current}; die ausführlichen Hinweise unten reichen derzeit bis v{notes}.",
    truncated:
      "Angezeigt werden die {shown} neuesten von {total} Versionen. Die vollständige Historie liegt im Repository.",
  },
};
