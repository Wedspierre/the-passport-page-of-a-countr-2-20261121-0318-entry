# Build transcript — the-passport-page-of-a-countr-2-20261121-0318 entry

Built 2026-11-21 ~10:30–10:50 WIB by a Muse subagent for make.fun competition
`the-passport-page-of-a-countr-2-20261121-0318` ("The Passport Page of a Country
That Isn't There", pot $50, deadline 2026-11-21T06:18:00Z / 13:18 WIB 21 Nov,
fee $0, acceptingSubmissions true — verified live 10:20:32 WIB).
Pattern mirrored from the previous entry `news-image-20261120`
(submission 01a1f983).

## Steps

1. Read the kit's `RULES.txt` (341 lines) in full: the judge is a passport-control
   officer with a typographer's eye; criteria in order — (1) must be an invented
   passport spread, (2) coherent typography/layout, (3) stamps, dates and issue
   details agree and tell a plausible travel history (no stamp predates issue),
   (4) portrait and place-name belong together, (5) one telling paperwork detail.
   Gate: PNG/JPEG max 1 MiB, 1024x1024.
2. Invented country: Republic of Meridia — small South Atlantic island nation,
   no airport, entry by sea only; capital Port Meridia; languages Meridian /
   English / Français. Holder ELENA MAR VOSS, DOB 14 MAR 1988, born Port
   Meridia, issued 18 JAN 2024, expires 18 JAN 2034, passport MER-2024-004821,
   occupation harbour pilot (ties the holder to the sea-only country).
3. Generated the holder portrait with `media.generate_image` (ID-photo style,
   neutral expression, navy shirt, pale blue-grey background) and inspected it:
   clean, no text, no watermark.
4. Composed the spread programmatically with Python PIL (`/tmp/build_passport.py`):
   all typography drawn in code (Liberation Serif/Sans/Mono) so dates, names and
   the MRZ stay crisp and consistent — no image-model text anywhere. MRZ two
   lines, 44 chars each, with ICAO 9303 check digits computed in the script.
   Four stamps, all dated after issue 18 JAN 2024: AZURA arrival 12 JUN 2025,
   TANGIER (Morocco) departure 03 SEP 2025, REYKJAVIK (Iceland) arrival
   21 JAN 2026, LISBON (Portugal) departure 09 MAR 2026. Telling paperwork:
   red visa-condition stamp "ENTRY BY SEA ONLY — NO AIRPORT ON MERIDIA" and
   "HARBOUR TAX 12 CROWNS — PAID" fee stamp, plus a drawn island map.
5. Visually inspected the result twice. First pass caught the MRZ overflowing its
   strip (19px mono too wide for 44 chars) and guilloche arcs bleeding onto the
   dark backdrop; fixed by shrinking the MRZ to 14px mono, clipping the arcs to
   the page rect, and adding occupation/eyes fields. Second inspection: all text
   legible, no gibberish, all stamp dates after issue, MRZ inside its strip.
6. Final `entry.png`: true PNG, 1024x1024, 265,065 bytes (under the 1 MiB cap,
   no quantize needed).
7. Wrote `main.ts` (Node 22, stdlib only — byte-for-byte copy to
   `MAKEFUN_OUTPUT_DIR` or `/output`, with PNG-signature, size and SHA-256
   verification) and `README.md`, mirroring the `news-image-20261120` entry.
8. Local checks: ran `main.ts` twice into separate output dirs; both outputs
   byte-identical to `entry.png` (sha256 below). `node --check main.ts` OK.
9. Repo init from the kit (after opening): `makefun anchor
   0d3ce1cfc7fa9b68cd75fb2bc3bb2e1126dbb765 round 34142791` — root commit
   `0d3ce1c` (`.makefun/freshness.json`, drand round 34142791), with the
   LICENSE MIT commit `1b0de3a` on top of it. All entry commits build above
   that root, never rewriting it.

## Entry image

- `entry.png` — 1024x1024 PNG, 265,065 bytes
- sha256: cce780b895e632ef3ec1ab7ba792503f2d0454184e5d762f830b27e9b0e9f9ae
