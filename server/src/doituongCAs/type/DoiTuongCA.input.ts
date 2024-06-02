import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DoiTuongCAInput {
  @Field({ nullable: true })
  BiSo?: string;

  @Field({ nullable: true })
  ViTri?: string;

  @Field({ nullable: true })
  MaCA?: number;

  @Field({ nullable: true })
  MaDoiTuong?: number;
}
