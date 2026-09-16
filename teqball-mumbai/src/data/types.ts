export type Person = {
  id: string;
  real?: boolean;
  sample?: boolean;
  staff?: boolean;
  name: string;
  initials: string;
  categories: string[];
  tag: string;
  headline?: string;
  club?: string;
  coach?: string;
  achievements: string[];
  bio: string;
  sampleBio?: boolean;
  note?: string;
};

export type RecordType = "national" | "international" | "ayg" | "trial";
export type AchievementRecord = {
  year: number;
  event: string;
  location: string;
  date: string;
  discipline: string;
  athlete: string;
  result: string;
  type: RecordType;
  source: string;
};

export type LeagueWinner = { season: number; team: string; captain: string };
