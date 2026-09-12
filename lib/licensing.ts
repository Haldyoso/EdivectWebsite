import type { Lang } from "@/lib/i18n";

export const licensing: Record<Lang, { heading: string; personal: string; trial: string; personalButton: string; trialButton: string; shared: string; expiry: string; contact: string; terms: string }> = {
  en: {
    heading: "Choose how you use Edivect",
    personal: "All features, free without a time limit. For private hobbies, personal projects and your own study. Not for work, business or client projects.",
    trial: "All features for 30 days from starting your trial. Try Edivect during real work, including business and client projects. No account or payment card.",
    personalButton: "Download for personal use", trialButton: "Try for work — 30 days",
    shared: "One portable app, two licence modes. Choose Personal or Commercial Trial on first launch. No export watermarks. Change modes by clicking the licence label in the panel.",
    expiry: "Commercial licences are not yet sold. After the trial, you can still open, save and export existing work. Request an individual extension to continue work use; Personal remains available for private use.",
    contact: "Request a trial extension", terms: "Licence and terms",
  },
  sk: {
    heading: "Vyberte si, ako používate Edivect",
    personal: "Všetky funkcie zadarmo bez časového limitu. Na súkromné hobby projekty a vlastné štúdium. Nie na zamestnanie, podnikanie alebo zákazky pre klientov.",
    trial: "Všetky funkcie na 30 dní od začatia trialu. Vyskúšajte Edivect pri reálnej práci, aj vo firme a na zákazkách. Bez účtu a platobnej karty.",
    personalButton: "Stiahnuť na osobné použitie", trialButton: "Vyskúšať pri práci — 30 dní",
    shared: "Jedna prenosná aplikácia, dva licenčné režimy. Pri prvom spustení vyberiete Personal alebo Commercial Trial. Bez watermarkov v exporte. Režim zmeníte kliknutím na označenie licencie v paneli.",
    expiry: "Komerčné licencie zatiaľ nie sú v predaji. Po triale zostáva otvorenie, uloženie a export existujúcej práce. Na pokračovanie pri práci požiadajte o individuálne predĺženie; Personal zostáva dostupný na súkromné použitie.",
    contact: "Požiadať o predĺženie trialu", terms: "Licencia a podmienky",
  },
  de: {
    heading: "Wählen Sie Ihre Nutzung von Edivect",
    personal: "Alle Funktionen kostenlos und ohne Zeitlimit. Für private Hobbys, eigene Projekte und eigenes Lernen. Nicht für berufliche Nutzung, Unternehmen oder Kundenaufträge.",
    trial: "Alle Funktionen für 30 Tage ab Testbeginn. Testen Sie Edivect bei der Arbeit, auch im Unternehmen und bei Kundenaufträgen. Ohne Konto oder Zahlungskarte.",
    personalButton: "Für private Nutzung herunterladen", trialButton: "Bei der Arbeit testen — 30 Tage",
    shared: "Eine portable App, zwei Lizenzmodi. Beim ersten Start wählen Sie Personal oder Commercial Trial. Keine Wasserzeichen im Export. Zum Wechseln klicken Sie auf die Lizenzanzeige im Panel.",
    expiry: "Kommerzielle Lizenzen werden noch nicht verkauft. Nach dem Test bleiben Öffnen, Speichern und Export vorhandener Arbeit möglich. Für weitere berufliche Nutzung können Sie eine individuelle Verlängerung anfragen. Personal bleibt für private Nutzung verfügbar.",
    contact: "Testverlängerung anfragen", terms: "Lizenz und Bedingungen",
  },
};
