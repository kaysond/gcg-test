import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Job {
  @Field((_type) => Int)
  id!: number;

  @Field()
  status!: string;
}
