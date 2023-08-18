import { ArgsType, Field } from "@nestjs/graphql"
import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { CheckUser, Credentials, SignupCredentials } from "./Credentials"

@ArgsType()
export class LoginArgs {
    @Field(() => Credentials, { nullable: false })
    @Type(() => Credentials)
    @ValidateNested()
    credentials!: Credentials
}

@ArgsType()
export class SignupArgs {
    @Field(() => SignupCredentials, { nullable: false })
    @Type(() => SignupCredentials)
    @ValidateNested()
    credentials!: SignupCredentials
}

@ArgsType()
export class CheckUserArgs {
    @Field(() => CheckUser, { nullable: false })
    @Type(() => CheckUser)
    @ValidateNested()
    checkUserValues!: CheckUser
}
