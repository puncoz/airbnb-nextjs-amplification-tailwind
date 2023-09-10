//@ts-ignore
// eslint-disable-next-line import/no-unresolved
//@ts-ignore
import { TokenServiceBase } from "./base/token.service.base"
import { ITokenService } from "./ITokenService"

export class TokenService extends TokenServiceBase implements ITokenService {

    /**
     * @param bearer
     * @return the username from a jwt token
     */
    decodeToken(bearer: string): string {
        return this.jwtService.verify(bearer).username
    }

}

