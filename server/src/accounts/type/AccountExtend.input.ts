import { Field, InputType } from "@nestjs/graphql";
import { AccountInput } from "./Account.input";

@InputType()
export class AccountExtendInput {
    @Field({ nullable: true })
    AccountInput?: AccountInput

    @Field({ nullable: true })
    PasswordOld?: string
}