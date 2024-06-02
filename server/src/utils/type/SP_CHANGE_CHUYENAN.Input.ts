import { Field, InputType } from '@nestjs/graphql';
import { ChuyenAnInput } from 'src/chuyenans/type/ChuyenAn.input';

@InputType()
export class SP_CHANGE_CHUYENAN_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaCA?: number;

  @Field({ nullable: true })
  ChuyenAnInput?: ChuyenAnInput;
}
