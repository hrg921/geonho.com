import { ObjectId } from 'mongodb';
import { Field, InputType } from 'type-graphql';
import { MakerRecord } from './maker-record.type';
import { MakerType } from '../maker/maker.type';

@InputType()
export class MakerRecordInput implements Partial<MakerRecord> {
    @Field()
    date: Date;

    @Field()
    maker: ObjectId;

    @Field()
    makerType: MakerType;
}
