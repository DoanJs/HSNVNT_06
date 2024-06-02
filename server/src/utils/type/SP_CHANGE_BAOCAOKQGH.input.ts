import { Field, InputType } from '@nestjs/graphql';
import { BaoCaoKQGHInput } from 'src/baocaoKQGHs/type/BaoCaoKQGH.input';

@InputType()
export class SP_CHANGE_BAOCAOKQGH_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaBCKQGH?: number;

  @Field({ nullable: true })
  BaoCaoKQGHInput?: BaoCaoKQGHInput;
}
