import { ObjectId } from "mongodb";
import { ObjectType, Field } from 'type-graphql';
import { prop as Property, Typegoose } from 'typegoose';

@ObjectType()
export class Book extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    title: string;

    @Field()
    @Property({ required: true })
    author: string;
}

export const BookModel = new Book().getModelForClass(Book);
