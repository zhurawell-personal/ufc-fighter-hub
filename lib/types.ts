export interface RecordStats {
	wins: number;
	losses: number;
	draws: number;
}

export interface Stats {
	strikingAccuracy: number;
	takedownAccuracy: number;
	takedownDefense: number;
	reach: number;
	height: number;
}

export interface RecentFight {
	opponent: string;
	result: "win" | "loss" | string;
	method: string;
	round: number;
}

export interface Fighter {
	id: string;
	name: string;
	nickname?: string;
	weightClass?: string;
	record: RecordStats;
	stats: Stats;
	recentFights: RecentFight[];
}

export type Fighters = Fighter[];
