/** First published Store release; independent of the portable release. */
export const publishedMicrosoftStoreRelease = {
  url: "https://apps.microsoft.com/detail/9N9W449D59G7",
  productVersion: "1.0.0.3",
} as const;

/** Accept only a canonical Microsoft Store product page. */
export function validateMicrosoftStoreUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  if (!/^https:\/\/apps\.microsoft\.com\/detail\/[a-zA-Z0-9]{12}$/.test(value)) {
    throw new Error("NEXT_PUBLIC_MICROSOFT_STORE_URL must be the real canonical https://apps.microsoft.com/detail/<ProductId> URL.");
  }
  return value;
}

/** A published Store release is configured independently of the portable release. */
export function getMicrosoftStoreRelease(urlValue: string | undefined, versionValue: string | undefined) {
  const url = validateMicrosoftStoreUrl(urlValue);
  const productVersion = versionValue?.trim();
  if (!url && !productVersion) return null;
  if (!url || !productVersion) {
    throw new Error("A published Microsoft Store release requires both NEXT_PUBLIC_MICROSOFT_STORE_URL and NEXT_PUBLIC_MICROSOFT_STORE_PRODUCT_VERSION.");
  }
  if (!/^\d+\.\d+\.\d+(?:\.\d+)?$/.test(productVersion) ||
      productVersion.split(".").some((part) => Number(part) > 65535)) {
    throw new Error("NEXT_PUBLIC_MICROSOFT_STORE_PRODUCT_VERSION must be the published application version, for example 1.0.0.12, with components between 0 and 65535.");
  }
  return { url, productVersion };
}

export const distributionCopy = {
  sk: {
    store: "Získať z Microsoft Store", portable: "Stiahnuť portable EXE", pending: "Microsoft Store pripravujeme.",
    storeDescription: "Inštalácia a aktualizácie cez Microsoft Store.",
    portableDescription: "Samostatný EXE bez inštalácie. Túto verziu aktualizujete ručne.",
  },
  en: {
    store: "Get from Microsoft Store", portable: "Download portable EXE", pending: "Microsoft Store release coming soon.",
    storeDescription: "Install and receive updates through Microsoft Store.",
    portableDescription: "Standalone EXE without installation. Update this version manually.",
  },
  de: {
    store: "Aus dem Microsoft Store beziehen", portable: "Portable EXE herunterladen", pending: "Microsoft Store Veröffentlichung in Vorbereitung.",
    storeDescription: "Installation und Updates über den Microsoft Store.",
    portableDescription: "Eigenständige EXE ohne Installation. Diese Version aktualisieren Sie manuell.",
  },
} as const;
