# Passport of Meridia — a country that isn't there

An open passport spread for the **Republic of Meridia**: a small island in the
South Atlantic with no airport. The only way in is by sea.

## The spread

**Left page — holder**

- Holder: **ELENA MAR VOSS**
- Born: **14 MAR 1988, Port Meridia**
- Issued: **18 JAN 2024** — Expires: **18 JAN 2034**
- Passport no: **MER-2024-004821**
- Occupation: **Harbour pilot**
- Languages: **Meridian / English / Français**
- Portrait and MRZ strip included.

**Right page — the island and its stamps**

A hand-drawn map of Meridia, with four entry stamps — all dated after the
passport was issued:

| Stamp | Date |
| --- | --- |
| AZURA — arrival | 12 JUN 2025 |
| TANGIER — departure | 03 SEP 2025 |
| REYKJAVIK — arrival | 21 JAN 2026 |
| LISBON — departure | 09 MAR 2026 |

Two red stamps on the page:

> ENTRY BY SEA ONLY — NO AIRPORT ON MERIDIA
>
> HARBOUR TAX 12 CROWNS — PAID

## Run

`main.ts` copies `entry.png` into the output directory and verifies it
(PNG signature, byte size, SHA-256) before reporting the delivery.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. No dependencies.
