import { ObjectId } from 'mongodb';
import { ObjectType, Field } from 'type-graphql';
import { prop as Property, Typegoose } from 'typegoose';

@ObjectType()
export class MakerTask extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property()
    title: string;

    @Field({ nullable: true })
    @Property()
    comment?: string;
}

export const MakerTaskModel = new MakerTask().getModelForClass(MakerTask);
