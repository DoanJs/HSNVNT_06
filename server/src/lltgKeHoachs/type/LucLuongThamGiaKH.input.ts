import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LucLuongThamGiaKHInput {
  @Field({ nullable: true })
  ViTri?: string;

  @Field({ nullable: true })
  MaKH?: number;

  @Field({ nullable: true })
  MaCBCS?: number;
}
