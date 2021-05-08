export interface PersonModel {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: any;
  votes: Vote;
}

export interface Vote {
  positive: number;
  negative: number;
}
