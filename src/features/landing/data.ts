export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "VectorOS", href: "/#experience" },
  { label: "Plans", href: "/#modes" },
  { label: "Experiences", href: "/#showcase" },
  { label: "Your Game", href: "/#your-game" },
  { label: "Get In Touch", href: "/contact" },
] as const;

export const CONTACT_EMAIL = "hello@vectordarts.app";

export const HERO_WORDS = ["Play.", "Practice.", "Compete."] as const;

export const HERO_SUPPORTING_LINE =
  "The modern darts platform built for players who want to improve, compete, and track every throw.";

export const APP_URL = "https://play.vectordarts.app";
export const SIGN_UP_URL = "https://play.vectordarts.app/login?mode=sign-up";

export type SignUpPlanId = "club" | "elite";

/** Create-account URL; pass plan so signup continues to /subscribe with it selected. */
export function getSignUpUrl(plan?: SignUpPlanId) {
  if (!plan) return SIGN_UP_URL;
  const url = new URL(SIGN_UP_URL);
  url.searchParams.set("plan", plan);
  return url.toString();
}

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
      "Custom board themes",
      "Match scoring and history",
      "Practice modes and training tools",
      "Performance tracking",
      "Game statistics and insights",
      "Progress milestones and achievements",
      "Player rankings and records",
      "Cloud-based account access",
    ],
    cta: "Join Club",
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
  },
] as const;

export const EXPERIENCE_SHOWCASE = {
  id: "showcase",
  headline: ["Experience", "Every Throw."] as const,
  supporting: [
    "VectorOS connects every part of the darts experience into one seamless platform. From practice sessions to competitive matches, every score, statistic, and milestone is captured in one place.",
    "Designed for players, leagues, and tournaments, VectorOS brings scoring, performance, and competition together, helping you focus on the game, not managing it.",
  ] as const,
  screens: [
    {
      id: "home",
      label: "Home",
      title: "Home Dashboard",
      accent: "rgba(132,193,38,0.14)",
    },
    {
      id: "cricket",
      label: "Cricket",
      title: "Cricket Match",
      accent: "rgba(220,20,60,0.12)",
    },
    {
      id: "x01",
      label: "X01",
      title: "X01 Match",
      accent: "rgba(132,193,38,0.12)",
    },
    {
      id: "practice",
      label: "Practice",
      title: "Practice Session",
      accent: "rgba(255,255,255,0.06)",
    },
    {
      id: "statistics",
      label: "Statistics",
      title: "Player Statistics",
      accent: "rgba(132,193,38,0.1)",
    },
    {
      id: "tournaments",
      label: "Tournaments",
      title: "Tournament Dashboard",
      accent: "rgba(220,20,60,0.1)",
    },
    {
      id: "profile",
      label: "Profile",
      title: "Player Profile",
      accent: "rgba(255,255,255,0.05)",
    },
  ],
} as const;

export const BUILT_AROUND_GAME = {
  id: "your-game",
  title: ["Built Around", "Your Game."] as const,
  supporting:
    "Whether you're practicing alone, playing with friends, or preparing for competition, VectorOS adapts to the way you play. Every mode, match, and session is designed to help you stay focused, improve consistently, and enjoy the game.",
  experiences: [
    {
      id: "training",
      number: "01",
      title: "Training",
      theme: "Sharpen your skills.",
      description:
        "Build consistency through focused practice. Track your sessions, refine your game, and improve with every throw.",
      highlights: [
        "Practice interface",
        "Training sessions",
        "Performance improvement",
      ],
      image: "/experience-practice-stats.png",
      imageAlt: "VectorOS practice statistics for Around the Clock",
    },
    {
      id: "match-play",
      number: "02",
      title: "Match Play",
      theme: "Every match matters.",
      description:
        "From casual games to competitive matches, VectorOS keeps scoring simple while capturing every moment of the game.",
      highlights: ["Live scoring interface", "Game flow", "Player experience"],
      image: "/experience-match-play.png",
      imageAlt: "VectorOS match play history and active matches",
    },
    {
      id: "classic-games",
      number: "03",
      title: "Classics",
      theme: "The games you know. Reimagined.",
      description:
        "Enjoy the games that define darts with a modern experience designed for today's players.",
      highlights: ["Bob's 27", "Shanghai", "Halve It", "121 Checkout"],
      games: [
        {
          id: "bobs-27",
          name: "Bob's 27",
          blurb: "Climb the board. Survive the doubles.",
          image: "/classic-bobs-27.png",
        },
        {
          id: "shanghai",
          name: "Shanghai",
          blurb: "Single, double, treble — in order.",
          image: "/classic-shanghai.png",
        },
        {
          id: "halve-it",
          name: "Halve It",
          blurb: "Hit the target or lose half.",
          image: "/classic-halve-it.png",
        },
        {
          id: "121-checkout",
          name: "121 Checkout",
          blurb: "Finish from 121 in three darts.",
          image: "/classic-121-checkout.png",
        },
      ],
    },
    {
      id: "statistics",
      number: "04",
      title: "Statistics",
      theme: "Understand your game.",
      description:
        "Turn every match into insight. Review your performance, track progress, and better understand your strengths.",
      highlights: ["Player statistics", "Charts", "Performance trends"],
      image: "/experience-statistics.png",
      imageAlt: "VectorOS match statistics",
    },
  ],
} as const;
