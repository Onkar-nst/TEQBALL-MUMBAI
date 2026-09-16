# Teqball Mumbai website — issues to close with the owner

Source: `teqball-mumbai-full-site-concept (6).html` (concept v2). Ported to Next.js in this repo.
Items marked **[fixed in port]** were handled during conversion; everything else needs the owner's input/content.

## A. Placeholder / missing content (owner must supply)

1. **All 26 athlete bios + 3 coach bios are "SAMPLE COPY"** — every profile shows italic placeholder text. Need real bios (or drop the bio section until ready).
2. **Founder page — "The Vision for India"** section is SAMPLE COPY. Need Vinit's own words.
3. **Founder video message** — placeholder box, no video. Need YouTube/Instagram link or remove.
4. **Stories page + Home "Stories" section** — all 6 stories are "Sample: …" with "Replace with real editorial content". Need at least 3 real stories or hide the page.
5. **Events page** — all events are "Sample Date / Sample community session / Sample club trial day". Need real upcoming events, or hide "Upcoming" until there are some.
6. **Events → Past → "Season 7 Final — Results: needs confirmation"**. Need date, venue, result.
7. **Photo galleries** — placeholders on: Athletes (every profile, 5 slots), Asian Youth Games (5), Events (8). No photos exist in the file except 2 (team photo at Nashik 2025, Vinit + Ronaldinho 2019). Need a photo dump from the club.
8. **Video placeholders** on: What is Teqball ("Watch Teqball"), Asian Youth Games, every athlete profile.
9. **Athlete social links** (Instagram / YouTube on every profile) are dead `#` links. Need handles per athlete or remove.
10. **Sponsor descriptions** — Royal Sports, Max Protein, Mumbai City FC, All Stars FC all say "needs confirmation from Teqball Mumbai before publishing". Need 1–2 lines each + logos.
11. **Mumbai City FC / All Stars FC relationship** — "More Than a Sport" page and footer both flag that the nature of the partnership (official / activation / appearance) is unconfirmed. This is a legal/brand risk — must be confirmed before naming them as "partners".
12. **Asian Youth Games** — "any additional squad members beyond Atharva Sakpal" unconfirmed.
13. **Asian Games 2026** — Vinit "tops the trials" appears on Home, About, Founder, Achievements with a "needs confirmation" tag. Owner to confirm whether he/anyone was selected for Aichi–Nagoya.

## B. Internal notes that are visible to the public (must be removed before launch)

14. **Top-right tag "v2 · built from the club's master database"** — internal version label, visible on every page.
15. **Footer line "Needs confirmation from Teqball Mumbai before publishing: …"** — visible on every page.
16. **"Needs confirmation" boxes** on AYG, More Than a Sport, Sponsors pages, and "Needs confirmation" tags in both timelines.
17. **"Roster TBC" badges** on 11 athlete cards + notes like "Added from championship results. Full roster status to confirm with Teqball Mumbai." shown on profiles.
18. **"Sample" badges / "(placeholder)" labels** throughout.
19. Founder "Next Chapter" paragraph ends with an italic editorial note ("…needs confirmation from Teqball Mumbai.").
20. Achievements "Source" column shows internal remarks, e.g. "(Joint/duplicate third-place structure should be verified before publication)" and "(pre-dating the club's 2021 founding)". Decide whether the Source column is public at all.

## C. Data inconsistencies

21. **Vinit Jain & Glenn Williams' 2025 Nationals results** (Bronze Men's Singles, Bronze Men's Doubles) are in the Achievements ledger but missing from their athlete profiles.
22. **Rudra Sagevekar & Janak Pangham** are tagged "Senior Athlete" but their only result is the **Sub-Junior** 2025 Nationals and they are not in the "senior" filter category. Likely should be "Sub-Junior / Youth".
23. **Vinit Jain, Glenn Williams, Libin Valiyavila appear twice** — once in the athlete roster and once under Coaching Staff with duplicated achievement lists. Decide: one card each, or a "Player-Coach" tag on the roster card.
24. **Rohan Naik, Vinit Boliya** have zero achievements and "No championship record on file yet". Confirm they are current squad.
25. **Alumni roster** (Anas Baig, Declan Gonsalves, Quimcy Dsouza, Chelsea Dsilva, Aditi Singh, Bhumi Deshmukh, Heena Shah) — confirm who is actually alumni vs current; 3 of them are flagged "Roster TBC".
26. Achievements record names partners not on the roster: **Boglarka Simo, Harshal Sutaria, Kapil Talwar, Ronald Dsouza**. Confirm whether they were club members (then add) or external partners (then fine).
27. **"Asian Games Selections Trials"** — typo ("Selection Trials") in 6 records; same event is called "Asian Games Selection Trials" elsewhere.
28. **Two "3rd in trials" entries in Men's Doubles** (Chirag Das/Santosh Suthar and Glenn Williams/Libin Valiyavila) — the file itself flags this as needing verification.
29. **2026 dates** are just "2026" — need actual trial dates. Most pre-2025 records also have only a year, no date.
30. **Home "#86 FITEQ singles world ranking"** — rankings change; either update regularly or show "Top-100 FITEQ ranked". Also Founder page says "Singles World No. 86".
31. **Stats "300+ athletes" / "48 players Season 7" / "7 seasons"** — confirm; also "Season 7 has just concluded" will go stale, needs a date.
32. Home says "Vinit Jain wins India's first-ever international Teqball match … (Rank 5)"; About page says "first Indian to win an international Teqball match". Consistent, but confirm it's accurate (FITEQ result).
33. Athlete headline for Vinit says "4 National Golds since 2019" — counts 2019 singles (pre-club), 2021 beach doubles, 2023 & 2024 singles. Confirm this is how the club wants it counted.

## D. Functional issues in the original HTML

34. **All CTA buttons were dead** (`href="#"`, `onclick="return false"`): Discover / Meet Our Athletes / Train With Us / Partner With Us, Register interest for Season 8, Apply / Join a session / Enquire (×5), Register (×2), all 6 "Join the Movement" buttons, athlete Instagram/YouTube. **[fixed in port]** — now link to the relevant page; Join buttons open a pre-filled email to teqballclubofmumbai@gmail.com. **Owner decision:** should these be a proper form (Google Form / Typeform / built-in form with email delivery) instead of mailto?
35. **No real URLs / not shareable** — single HTML with JS-toggled views; every "page" was the same URL, no back button, no SEO. **[fixed in port]** — 15 real routes.
36. **Page title was "Teqball Mumbai: Full Site Concept"** on every view. **[fixed in port]** — per-page titles.
37. **1.3 MB single file** — 3 images embedded as base64 (one photo embedded twice). **[fixed in port]** — images served as files, Next image optimisation.
38. **Mobile: `<main>` could overflow the viewport** (`.shell` kept `align-items:flex-start` in column layout). **[fixed in port]**
39. Home "Train With Us" pills were non-clickable `<span>`s that looked like buttons. **[fixed in port]** — link to /train.
40. Home athlete mini-cards were not clickable. **[fixed in port]** — open that athlete's profile.
41. Athlete profile on click didn't scroll into view (profile sits below 29 cards). **[fixed in port]** — scrolls to profile.
42. **"Big Shoulders Display" font no longer exists on Google Fonts** (merged into "Big Shoulders"). Original would silently fall back to sans-serif. **[fixed in port]**

## E. Missing for a real launch (not in the concept at all)

43. No favicon / OG image / social share preview.
44. No contact form, no WhatsApp link (club phone is listed; a WhatsApp CTA would fit the audience).
45. No Google Maps / exact venue address ("Based in Andheri, Mumbai" only).
46. No privacy policy / terms (needed if a form collects data).
47. No analytics.
48. Domain + hosting decision (Vercel recommended; free tier is enough for this site).
49. Sponsor logos — none provided; sponsors page is text only.
50. Instagram/Facebook handles are in the footer only; not on a header or a prominent CTA.
