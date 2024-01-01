import { PGError } from "../../db/postgres";

export interface JobData {
  message: string;
}

export type Errors = PGError;

export type JobResult = {};
