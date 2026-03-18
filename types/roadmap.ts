export interface Resource {
  id: string;
  title: string;
  url: string;
  channel: string;
  duration?: string;
  thumbnail?: string;
}

export interface Topic {
  id: string;
  title: string;
  description?: string;
  resources: Resource[];
  completed?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  topics: Topic[];
  icon?: string;
}

export interface Roadmap {
  title: string;
  description: string;
  sections: Section[];
}
