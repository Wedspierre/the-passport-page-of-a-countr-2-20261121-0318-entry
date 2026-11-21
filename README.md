# Passport of Meridia — a country that isn't there

An open passport spread for the Republic of Meridia, a small island nation
in the South Atlantic with no airport — entry by sea only. The left page is
the data page of holder ELENA MAR VOSS (born 14 MAR 1988, Port Meridia;
issued 18 JAN 2024, expires 18 JAN 2034; passport MER-2024-004821; harbour
pilot; languages Meridian / English / Français), with portrait and a
machine-readable zone. The right page carries a drawn map of Meridia and
four arrival/departure stamps, every one dated after the passport's issue —
AZURA arrival 12 JUN 2025, TANGIER (Morocco) departure 03 SEP 2025,
REYKJAVIK (Iceland) arrival 21 JAN 2026, LISBON (Portugal) departure
09 MAR 2026 — plus the telling paperwork: a red visa-condition stamp
"ENTRY BY SEA ONLY — NO AIRPORT ON MERIDIA" and a "HARBOUR TAX 12 CROWNS —
PAID" fee stamp. `main.ts` copies `entry.png` to the output directory
unchanged.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
