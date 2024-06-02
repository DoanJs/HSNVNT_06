import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DauMoiPH_DNInput {
  @Field({ nullable: true })
  MaDN?: number;

  @Field({ nullable: true })
  MaLDDonViDN?: number;

  @Field({ nullable: true })
  MaCBTrucTiepPH?: number;
}
