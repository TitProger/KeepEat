import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async register(email: string, password: string): Promise<any> {
        console.log(`Пользователь зарегестрировался: ${email}`)
        return {
            message: 'User registered successfully!',
            email,
        }
    }
}
