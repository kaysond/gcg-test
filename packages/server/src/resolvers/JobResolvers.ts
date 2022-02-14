import { Arg, Query, Resolver } from 'type-graphql';
import { Job } from '../schema/Job';
import { jobs } from '../Jobs';

@Resolver()
export class JobResolvers {
  private jobs = jobs;

  @Query((_returns) => [Job])
  getAllJobs() {
    return this.jobs;
  }
}
