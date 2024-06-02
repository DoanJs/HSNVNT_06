import { Field, InputType } from '@nestjs/graphql';
import { DiaChiNVInput } from 'src/diachiNVs/type/DiaChiNV.Input';

@InputType()
export class SP_CHANGE_DIACHINV_Input {
  @Field({ nullable: true })
  Type?: string;

  @Field({ nullable: true })
  MaDC?: number;

  @Field({ nullable: true })
  DiaChiNVInput?: DiaChiNVInput;
}
