export const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Modes", href: "#modes" },
  { label: "Stats", href: "#stats" },
  { label: "Download", href: "#download" },
] as const;

export const HERO_WORDS = ["Play.", "Practice.", "Compete."] as const;

export const SCREENSHOTS = [
  {
    id: "board",
    label: "Board View",
    accent: "electric" as const,
  },
  {
    id: "match",
    label: "Live Match",
    accent: "crimson" as const,
  },
  {
    id: "stats",
    label: "Player Stats",
    accent: "electric" as const,
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
