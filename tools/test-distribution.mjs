import assert from "node:assert/strict";
import { getMicrosoftStoreRelease, validateMicrosoftStoreUrl, distributionCopy, publishedMicrosoftStoreRelease } from "../lib/distribution.ts";

assert.equal(validateMicrosoftStoreUrl(undefined), null);
assert.equal(validateMicrosoftStoreUrl(""), null);
assert.equal(validateMicrosoftStoreUrl("  "), null);
// Synthetic format fixture only. Never used as a site URL or a proposed product identity.
assert.equal(validateMicrosoftStoreUrl("https://apps.microsoft.com/detail/ABCDEFGHIJKL"), "https://apps.microsoft.com/detail/ABCDEFGHIJKL");
for (const invalid of ["https://example.com/detail/ABCDEFGHIJKL", "javascript:alert(1)", "https://apps.microsoft.com/detail/TODO", "http://apps.microsoft.com/detail/ABCDEFGHIJKL", "https://apps.microsoft.com/detail/ABCDEFGHIJKL?redirect=example.com"]) {
  assert.throws(() => validateMicrosoftStoreUrl(invalid), /real canonical/);
}
assert.equal(distributionCopy.sk.store, "Získať z Microsoft Store");
assert.equal(distributionCopy.sk.portable, "Stiahnuť portable EXE");
assert.deepEqual(Object.keys(distributionCopy).sort(), ["de", "en", "sk"]);
assert.equal(getMicrosoftStoreRelease(undefined, undefined), null);
assert.equal(getMicrosoftStoreRelease("", ""), null);
assert.equal(getMicrosoftStoreRelease("  ", "  "), null);
const testUrl = "https://apps.microsoft.com/detail/ABCDEFGHIJKL";
assert.throws(() => getMicrosoftStoreRelease(testUrl, undefined), /requires both/);
assert.throws(() => getMicrosoftStoreRelease(undefined, "1.0.0.12"), /requires both/);
assert.deepEqual(getMicrosoftStoreRelease(testUrl, "1.0.0.12"), { url: testUrl, productVersion: "1.0.0.12" });
assert.deepEqual(getMicrosoftStoreRelease(testUrl, "1.1.0"), { url: testUrl, productVersion: "1.1.0" });
for (const version of ["TODO", "1.0", "1.0.0.-1", "1.0.0.65536", "1.0.0.1.0", "1.0.0-beta"]) {
  assert.throws(() => getMicrosoftStoreRelease(testUrl, version), /published application version/);
}
assert.deepEqual(publishedMicrosoftStoreRelease, {
  url: "https://apps.microsoft.com/detail/9N9W449D59G7",
  productVersion: "1.0.0.3",
});
assert.deepEqual(
  getMicrosoftStoreRelease(publishedMicrosoftStoreRelease.url, publishedMicrosoftStoreRelease.productVersion),
  publishedMicrosoftStoreRelease,
);
console.log("Distribution configuration: PASS (including the published Store release; no browser or deployment).");
