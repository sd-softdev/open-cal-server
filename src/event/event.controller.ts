import { Controller } from '@nestjs/common';
import { BaseController } from 'sd-nest-base';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('event')
export class EventController extends BaseController<Event> {
    constructor(public readonly service: EventService) {
        super();
    }
}
