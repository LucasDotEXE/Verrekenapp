import { User } from "./User";

export interface Payment {
    id:number;
    groupId: number;
    payer: User;
    amount: number;
    profeteers: Array<{ user: User, hasPayed: boolean }>;
  }