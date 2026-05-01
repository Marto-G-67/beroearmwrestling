import { MessageCircle } from "lucide-react";

const DISCORD_URL = "https://discord.gg/"; // owner can update

const DiscordFloating = () => (
  <a
    href={DISCORD_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Join our Discord"
    className="fixed bottom-5 right-5 z-30 group flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#5865F2] text-white shadow-glow-lg hover:scale-105 transition-transform"
    style={{ boxShadow: "0 0 30px hsl(235 86% 65% / 0.6)" }}
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline text-sm font-semibold tracking-wide">Discord</span>
  </a>
);

export default DiscordFloating;
