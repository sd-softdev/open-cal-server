import { UserModule } from './../user/user.module';
import { Event } from './event.entity';
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Event]),
        forwardRef(() => UserModule),
    ],
    providers: [EventService],
    controllers: [EventController],
    exports: [
        TypeOrmModule.forFeature([Event]),
        EventService,
    ]
})
export class EventModule { }
