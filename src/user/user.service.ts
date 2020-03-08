import { Injectable } from '@nestjs/common';
import { BaseService } from 'sd-nest-base';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectRepository(User)
        private readonly fRepo: Repository<User>,
    ) {
        super(fRepo);
    }
}
