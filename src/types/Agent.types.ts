export interface ISkill {
  key: string;
  name: string;
  description: string;
  icon: string;
  video?: string;
}

//Document definition
export interface IAgent {
  name: string;
  rol: string;
  bio: string;
  image: string;
  background: string;
  displayIcon: string;
  backgroundGradientColors: string[];
  skills: ISkill[];
}

export enum Rol {
  Initiator = "Initiator",
  Sentinel = "Sentinel",
  Duelist = "Duelist",
  Controller = "Controller",
}
