# Personal and Commercial Trial — 12 September 2026

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
