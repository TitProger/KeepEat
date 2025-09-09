import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "../service/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() body: any){
        return await this.authService.register(body.email, body.password);
    }
}

