# Licensing decision required before commercial launch

Edivect currently has no public software licence or EULA. The website must not claim that the application is MIT-licensed merely because some website dependencies use MIT licences.

## Decisions the owner must make

1. Choose the commercial model: freeware, paid perpetual licence, subscription, trial-to-paid, open source, or a combination.
2. Define who may use the trial, for how long, and whether business evaluation is allowed.
3. Define the rights for personal, business, educational, resale, redistribution and managed deployment use.
4. Decide whether one licence covers a user, device, organisation or site.
5. Define update, support, refund, termination and enforcement terms.
6. Identify the legal owner/licensor, address, governing law and dispute venue.
7. Inventory third-party libraries, assets and notices that must accompany the application.
8. Decide how users accept the licence: bundled `LICENSE.txt`, first-run acceptance, installer acceptance, purchase flow, or another explicit mechanism.
9. Have the final wording reviewed by a qualified lawyer for the launch jurisdictions.

## Implementation already prepared

- `lib/site.ts` contains explicit nullable owner and support-contact settings. They are intentionally not fabricated.
- The localized Terms pages state that no final software licence is currently published and do not grant commercial-use rights.
- Footer wording no longer claims an MIT application licence.

## When the decision is final

1. Add the final licence/EULA to the application distribution and, if appropriate, a localized website route.
2. Fill in the legal owner and support/privacy contact in `lib/site.ts`.
3. Update the Terms pages so they link to and accurately summarize the final licence.
4. Revisit the `Offer` in `lib/structured-data.ts` if Edivect is no longer free to obtain.
5. Add licence acceptance to the product flow only if the chosen legal model requires it.
6. Re-run the production build, link check, smoke tests and accessibility tests.

