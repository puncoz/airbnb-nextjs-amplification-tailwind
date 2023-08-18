import { Body, Controller, Get, Post, Req } from "@nestjs/common"
import { ApiBearerAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger"
import { Request } from "express"
import { User } from "src/user/base/User"
import { CheckUser, Credentials, SignupCredentials } from "../auth/Credentials"
import { AuthService } from "./auth.service"
import { UserInfo } from "./UserInfo"

@ApiTags("auth")
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("login")
    async login(@Body() body: Credentials): Promise<UserInfo> {
        return this.authService.login(body)
    }

    @ApiBearerAuth()
    @ApiOkResponse({ type: User })
    @Get("me")
    async me(@Req() request: Request): Promise<User> {
        return this.authService.me(request.headers.authorization)
    }

    @Post("user/check")
    async checkUser(@Body() body: CheckUser): Promise<User> {
        return this.authService.checkUser(body.email)
    }

    @Post("signup")
    async signup(@Body() body: SignupCredentials): Promise<UserInfo> {
        return this.authService.signup(body)
    }
}
