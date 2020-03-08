import { Controller } from '@nestjs/common';
import { BaseController } from 'sd-nest-base';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController extends BaseController<User> {
    constructor(public readonly service: UserService) {
        super();
    }
}
