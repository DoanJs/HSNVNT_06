import { Field, InputType } from '@nestjs/graphql';
import { BaoCaoKQXMQuanHeInput } from 'src/baocaoKQXMQuanHes/type/BaoCaoKQXMQuanHe.input';

@InputType()
export class SP_CHANGE_BAOCAOKQXMQUANHE_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaBCKQXMQH?: number;

  @Field({ nullable: true })
  BaoCaoKQXMQuanHeInput?: BaoCaoKQXMQuanHeInput;
}
