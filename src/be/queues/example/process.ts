import { Processor } from "bullmq";
import { JobData, JobResult } from "./types";

export const processJob: Processor<JobData, JobResult> = async (job) => {
  console.log(job.data.message);
  return {} as JobResult;
};
