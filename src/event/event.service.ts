import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'sd-nest-base';
import { Event } from './event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

@Injectable()
export class EventService extends BaseService<Event> {
    constructor(
        @InjectRepository(Event)
        private readonly fRepo: Repository<Event>,
        private readonly us: UserService,
    ) {
        super(fRepo);
    }

    // create new obj
    async createOne(ev: Event) {
        if (ev.begin) { ev.begin = new Date(ev.begin) }
        if (ev.end) { ev.end = new Date(ev.end) }
        if (ev.group) { ev.group = ev.group.toLowerCase() }
        
        return super.createOne(ev);
    }
}
