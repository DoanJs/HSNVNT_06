import { Field, InputType } from '@nestjs/graphql';
import { BaoCaoKQXMDiaChiInput } from 'src/baocaoKQXMDiaChis/type/BaoCaoKQXMDiaChi.input';

@InputType()
export class SP_CHANGE_BAOCAOKQXMDIACHI_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaBCKQXMDC?: number;

  @Field({ nullable: true })
  BaoCaoKQXMDiaChiInput?: BaoCaoKQXMDiaChiInput;
}
