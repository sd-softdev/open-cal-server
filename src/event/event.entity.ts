import { Base } from 'sd-nest-base';
import { Entity, Column, ObjectID } from 'typeorm';

@Entity()
export class Event extends Base {
    begin?: Date;
    end?: Date;
    group?: string;
    userId?: string;
}
