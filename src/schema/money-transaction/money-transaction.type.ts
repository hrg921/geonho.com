import { ObjectId } from 'mongodb';
import { ObjectType, Field } from 'type-graphql';
import { prop as Property, Typegoose } from 'typegoose';

export enum FlowType {
    IN = 'in',
    INVESTMENT = 'investment',
    OUT = 'out',
}

export enum MoneyUnit {
    DOLLAR = '$',
    WON = '₩',
}

@ObjectType()
export class MoneyTransaction extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property()
    transactionTime: Date;

    @Field()
    @Property({ enum: FlowType, required: true })
    flowType: FlowType;

    @Field()
    @Property({ min: 0, required: true })
    amount: number;

    @Field()
    @Property({ enum: MoneyUnit })
    unit: MoneyUnit;

    @Field()
    @Property()
    from: string;

    @Field()
    @Property()
    to: string;
}

export const MoneyTransactionModel = new MoneyTransaction().getModelForClass(
    MoneyTransaction
);
