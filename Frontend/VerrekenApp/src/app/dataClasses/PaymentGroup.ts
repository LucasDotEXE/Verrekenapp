import { User } from "./User";

export interface PaymentGroup {
    id: number;
    name: string;
    users: User[];
  }