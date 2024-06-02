import { Field, InputType } from '@nestjs/graphql';
import { BienBanRKNInput } from 'src/bienbanRKNs/type/BienBanRKN.Input';

@InputType()
export class SP_CHANGE_BIENBANRKN_Input {
    @Field({ nullable: true })
    Type?: string;

    @Field({ nullable: true })
    MaBBRKN?: number;

    @Field({ nullable: true })
    BienBanRKNInput?: BienBanRKNInput;
}
