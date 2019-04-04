import { ObjectId } from 'mongodb';
import { ObjectType, Field } from 'type-graphql';
import { prop as Property, Typegoose } from 'typegoose';
import { MoneyUnit } from '../../enum/MoneyUnit';

@ObjectType()
export class WishProduct extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ default: () => new Date() })
    createdAt: Date;

    @Field()
    @Property({ default: () => new Date(-1) })
    deletedAt: Date;

    @Field()
    @Property({ default: () => new Date(-1) })
    boughtAt: Date;

    @Field({ nullable: true })
    @Property()
    title?: string;

    @Field({ nullable: true })
    @Property()
    link?: string;

    @Field({ nullable: true })
    @Property()
    money?: number;

    @Field()
    @Property({ default: MoneyUnit.WON })
    unit: MoneyUnit;
}

export const WishProductModel = new WishProduct().getModelForClass(
    WishProduct
);
