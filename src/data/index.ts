import athletes from "./athletes.json";
import staff from "./staff.json";
import records from "./records.json";
import league from "./league.json";
import type { Person, AchievementRecord, LeagueWinner } from "./types";

export const ATHLETES = athletes as Person[];
export const STAFF = staff as Person[];
export const RECORDS = records as AchievementRecord[];
export const LEAGUE_WINNERS = league as LeagueWinner[];
export type { Person, AchievementRecord, LeagueWinner };
