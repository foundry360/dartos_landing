export const NAV_ITEMS = [
  { label: "Platform", href: "#experience" },
  { label: "Experience", href: "#modes" },
  { label: "Stats", href: "#stats" },
  { label: "Download", href: "#download" },
] as const;

export const HERO_WORDS = ["Play.", "Practice.", "Compete."] as const;

export const HERO_SUPPORTING_LINE =
  "The modern darts platform built for players who want to improve, compete, and track every throw.";

export const APP_URL = "https://play.vectordarts.app";
export const SIGN_UP_URL = "https://play.vectordarts.app/login?mode=sign-up";

export const STATEMENT_SUPPORTING_LINE =
  "Thoughtfully designed to bring every part of the game together.";

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

export const EXPERIENCE_SECTION = {
  title: ["One Platform.", "Two Ways to Play."] as const,
  subtitle: "Choose the experience that matches how you play.",
} as const;

export const EXPERIENCE_TIERS = [
  {
    id: "club",
    title: "Club",
    price: "$4.99",
    priceInterval: "/month",
    message: "Practice, compete, and track your journey.",
    theme: "Personal improvement and progression.",
    hoverDetail:
      "Your personal VectorDarts home base, built for focused practice, casual competition, and continuous improvement. Track your performance, understand your game, and build better habits with every throw.",
    includes: [
      "Personal player profile",
      "Match scoring and history",
      "Practice modes and training tools",
      "Performance tracking",
      "Game statistics and insights",
      "Progress milestones and achievements",
      "Player rankings and records",
      "Cloud-based account access",
    ],
    cta: "Join Club",
    href: SIGN_UP_URL,
  },
  {
    id: "elite",
    title: "Elite",
    price: "$9.99",
    priceInterval: "/month",
    message: "Compete, organize, and elevate the game.",
    theme: "League and tournament competition.",
    hoverDetail:
      "Built for competitive players, league operators, and tournament organizers. Elite transforms every event into a connected experience. Manage competition, track performance, and bring players together through a professional darts platform designed for modern play.",
    includes: [
      "Everything in Club",
      "League management tools",
      "Tournament creation and administration",
      "Player registration and management",
      "Match scheduling and brackets",
      "Team and division management",
      "Live scoring and match tracking",
      "Leaderboards and rankings",
    ],
    cta: "Go Elite",
    href: SIGN_UP_URL,
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
