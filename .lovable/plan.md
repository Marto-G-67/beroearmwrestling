## Goal

Add a new **"Световно първенство"** entry to the achievements timeline (alongside 2026 / 2025), with competitor cards that can show **video clips** (YouTube/Vimeo embeds OR uploaded MP4 files). Start with **one card for Щерьо Щерев** (defeated his opponent at the World Championship), with the video embedded inside his card. Structured so more competitor cards can be added easily.

## What you'll see on the page

- A new card in the achievements timeline marked **"Световно първенство"** (with a globe icon and a gold/world-event accent so it stands out from national events).
- Inside it: a list of competitor cards, exactly like the 2026 section. First card = **Щерьо Щерев**.
- Clicking Щерьо's card opens his detail modal — same layout as before, but with a new **"Видео"** section above the photo gallery showing the match clip with play controls.
- A second placeholder competitor slot is reserved (you can give me the name + video later and I'll fill it in).

## How videos will work

The competitor data model gets a new optional `videos` field. Each video can be either:
- A **link** (YouTube or Vimeo URL) — embedded as a responsive iframe player.
- An **uploaded file** — played with the native HTML5 `<video>` tag with controls.

For uploads, files go into `src/assets/` (same place as the photos) and are imported as ES modules — same pattern already used for images. No backend/storage needed since these are static curated highlights, not user uploads.

For this first card, please send me either:
- The YouTube/Vimeo link of Щерьо's winning match, **or**
- The MP4 file (drag-and-drop in chat).

If you don't have the clip ready yet, I'll wire up the card with a "video coming soon" placeholder and you can drop the file/link later.

## Technical changes

1. **`src/components/club/CompetitorModal.tsx`**
   - Extend `CompetitorData` interface: add `videos?: { type: "youtube" | "vimeo" | "file"; src: string; title?: string; poster?: string }[]`.
   - Add a "Видео" section above the gallery that renders:
     - YouTube/Vimeo → responsive 16:9 `<iframe>` with proper embed URL conversion.
     - File → HTML5 `<video controls poster={poster}>` with the imported asset as `src`.
   - Multiple videos render stacked vertically, each in a glass-styled card.

2. **`src/components/club/AchievementsTimeline.tsx`**
   - Add a new entry for "Световно първенство" placed at the top of the timeline (above 2026).
   - Create a `competitorsWorlds` array containing Щерьо Щерев's profile (reusing his existing photos `comp-2026-shterio-podium.jpg` and `comp-2026-shterio-match.jpg`, plus the new video).
   - Add the World Championship section's UI with a distinct gold/world-event treatment (globe icon, "World" badge) so users immediately see it's the headline event.

3. **Asset handling**
   - If you provide an MP4: I save it to `src/assets/worlds-shterio-match.mp4` and import it. Vite handles bundling.
   - If you provide a YouTube link: nothing to import — the URL goes straight into the data.

## Open question

Do you have Щерьо's video ready to send now (YouTube link or MP4 file), or should I scaffold the section with a placeholder so you can add it in the next message?

Once you confirm, I'll implement everything in one pass.
