import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class AuthService {
    constructor(
      @InjectRepository(UserEntity)
      private userRepository: EntityRepository<UserEntity>
    ) {}


    async register(email: string, password: string): Promise<any> {
        console.log(`Пользователь зарегестрировался: ${email}`)
        const user = new UserEntity(email, password);
        await this.userRepository.insert(user);
        return {
            message: 'User registered successfully!',
            email,
        }
    }
}
