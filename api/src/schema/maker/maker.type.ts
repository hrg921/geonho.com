import { ObjectId } from 'mongodb';
import { ObjectType, registerEnumType, Field } from 'type-graphql';
import {
    arrayProp as ArrayProperty,
    prop as Property,
    Typegoose,
    Ref,
} from 'typegoose';
import { MakerTask } from '../maker-task/maker-task.type';

export enum MakerType {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLU = 'monthly',
    QUARTERLY = 'quarterly',
    YEARLY = 'yearly',
    CENTURILY = 'centurily',
}
registerEnumType(MakerType, {
    name: 'MakerType',
    description: 'Type of Maker',
});

@ObjectType()
export class Maker extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property()
    title: string;

    @Field()
    @Property({ default: false })
    current: boolean;

    @Field()
    @Property({ default: () => Date() })
    createdAt: Date;

    @Field(type => MakerType)
    @Property({ enum: MakerType })
    makerType: MakerType;

    @Field(type => [MakerTask])
    @ArrayProperty({ itemsRef: MakerTask, default: [] })
    tasks: Ref<MakerTask>[];
}

export const MakerModel = new Maker().getModelForClass(Maker);
