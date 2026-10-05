# Personal and Commercial Trial

## Store preparation — 3 October 2026

The public portable download remains on version 1.0.0. Its existing licence text
in `lib/usage-terms.json` is preserved. Do not promise new trial behaviour for an
older download merely because the Store edition is newer.

The prepared Store edition uses the current application's unchanged licence:
Personal for private hobbies/study without expiry, or a 30-day Commercial Trial.
A one-time 30-day extension is available directly in the app during the last
7 days or after expiry. Before expiry it is added to the original end; after
expiry it begins on activation. Opening, saving and exporting existing work
remain available after expiry; switching to Personal does not authorise work use.
Commercial licences are not yet sold.

`lib/store-usage-terms.json` contains the exact EN/SK/DE public terms from
`C:\Dev\Edivect\src\Edivect\Services\UsageLicense.cs` at product 1.0.0.3.
The Terms pages show portable and Store conditions separately. Recheck the Store
copy against the final package's source before a future approved publication.
When publishing a new portable version, update its terms to match that artifact.

Current local licence records are protected with Windows DPAPI and a redundant
record. Older portable releases may use the earlier JSON mechanism described
below. No network activation, payment flow or business model is introduced here.

The privacy pages cover both channels, local capture/clipboard/OCR processing,
settings/recovery/logs, licence state, exports and deletion, and Microsoft Store's
separate acquisition/update services. Website hosting remains Cloudflare; the
download URL, portable version and checksum are unchanged.

Changes are local only. No push, production deployment or Store submission was
performed. Privacy and Terms URLs in Partner Center still point to the existing
public pages until the owner separately approves deployment of these updates.

## Earlier portable policy — 12 September 2026

The public download is one portable EXE with two user-selected modes:

- Personal: all features, no expiry, private hobbies and personal study only.
- Commercial Trial: all features for 30 elapsed days from first trial activation,
  including evaluation during real work. No account or payment card.
- Expiry retains project opening, saving and PNG export. Personal can be selected
  for private work. Further work use requires an individually granted extension.
- No paid licences or contribution checkout are offered yet.

The application presents the licence and obtains explicit mode acceptance on first
launch. Clicking the panel label reopens that choice. The public Terms pages mirror
the app's licence grant; the portable ZIP includes LICENSE.txt. This is proprietary
software, not MIT software.

Trial state lives at %LOCALAPPDATA%/Edivect/usage-license.json, separately from
portable settings. Switching modes, moving the EXE and upgrading preserve its start.
The last observed UTC time prevents a simple clock rollback extending the trial.
This is a local honest-use mechanism, not tamper-proof DRM: deleting or editing the
state or using another Windows profile can bypass it. No device fingerprint or server
activation is introduced.

Existing private tenant/user-bound trial builds retain their original TrialGuard.
An extension request uses the public GitHub issue contact. Do not ask customers to
post private company data there. Extensions are discretionary, not automatic; an
owner can provide an individually dated private build using the existing build tools.

Before paid launch: settle the owner's business/tax setup, business contact/address,
commercial licence pricing, update entitlement, refunds, schools/institutional use,
third-party notices and legal review. Do not integrate the Stripe sandbox link into
the public website.
