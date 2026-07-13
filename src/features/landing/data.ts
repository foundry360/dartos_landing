export const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Modes", href: "#modes" },
  { label: "Stats", href: "#stats" },
  { label: "Download", href: "#download" },
] as const;

export const HERO_WORDS = ["Play.", "Practice.", "Compete."] as const;

export const HERO_SUPPORTING_LINE =
  "The modern darts platform built for players who want to improve, compete, and track every throw.";

export const APP_URL = "https://play.vectordarts.app";
export const SIGN_UP_URL = "https://play.vectordarts.app/login?mode=sign-up";

export const INTERFACE_SECTION = {
  eyebrow: "The platform",
  heading: ["Built Around", "Every Throw."] as const,
  supporting:
    "From scoring and practice to tournaments, leagues, player profiles, and performance insights, VectorOS connects every part of your darts experience into one seamless platform.",
  logoAlt: "VectorOS",
  exploreHint: "Hover a module to explore the ecosystem",
} as const;

export const VECTOROS_MODULES = [
  {
    id: "scoring",
    label: "Scoring",
    description:
      "Real-time leg and match scoring with checkout tracking built in.",
  },
  {
    id: "practice",
    label: "Practice",
    description:
      "Structured solo sessions to sharpen consistency and finishing.",
  },
  {
    id: "match-play",
    label: "Match Play",
    description: "Head-to-head formats from casual legs to competitive sets.",
  },
  {
    id: "tournaments",
    label: "Tournaments",
    description:
      "Bracket management and live progression for events of any size.",
  },
  {
    id: "player-profiles",
    label: "Player Profiles",
    description: "Identity, history, and preferences tied to every throw.",
  },
  {
    id: "statistics",
    label: "Statistics",
    description:
      "Averages, checkout rates, and trends across your entire game.",
  },
  {
    id: "achievements",
    label: "Achievements",
    description:
      "Milestones and progression that reward improvement over time.",
  },
  {
    id: "leagues",
    label: "Leagues",
    description: "Season play, standings, and team competition in one place.",
  },
  {
    id: "cloud-sync",
    label: "Cloud Sync",
    description: "Your data follows you across devices, venues, and sessions.",
  },
  {
    id: "performance-insights",
    label: "Performance Insights",
    description: "Actionable patterns that reveal where your game improves.",
  },
] as const;

export const GAME_MODES = [
  {
    id: "501",
    title: "501",
    subtitle: "Classic",
    gradient: "from-[#00ff66]/20 to-[#090909]",
  },
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "Tactical",
    gradient: "from-[#dc143c]/25 to-[#090909]",
  },
  {
    id: "around",
    title: "Around",
    subtitle: "The Clock",
    gradient: "from-white/10 to-[#090909]",
  },
  {
    id: "killer",
    title: "Killer",
    subtitle: "Elimination",
    gradient: "from-[#dc143c]/20 to-[#090909]",
  },
  {
    id: "practice",
    title: "Practice",
    subtitle: "Solo",
    gradient: "from-[#00ff66]/15 to-[#090909]",
  },
  {
    id: "tournament",
    title: "Tournament",
    subtitle: "Bracket",
    gradient: "from-white/8 to-[#090909]",
  },
] as const;

export const STATS = [
  { id: "avg", value: 94.2, suffix: "", label: "Average", decimals: 1 },
  {
    id: "checkout",
    value: 68,
    suffix: "%",
    label: "Checkout Rate",
    decimals: 0,
  },
  {
    id: "matches",
    value: 1247,
    suffix: "",
    label: "Matches Played",
    decimals: 0,
  },
  { id: "streak", value: 12, suffix: "", label: "Win Streak", decimals: 0 },
] as const;

export const CHART_DATA = [
  42, 68, 55, 82, 74, 91, 63, 88, 76, 95, 71, 89,
] as const;
