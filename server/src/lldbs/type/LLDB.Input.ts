import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LLDBInput {
  @Field({ nullable: true })
  BiDanh?: string;

  @Field({ nullable: true })
  MaLoaiLLDB?: number;

  @Field({ nullable: true })
  MaTSQuanLy?: number;
}
