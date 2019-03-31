import { Field, InputType } from 'type-graphql';
import { FlowType, MoneyTransaction } from './money-transaction.type';

@InputType()
export class MoneyTransactionInput implements Partial<MoneyTransaction> {
    @Field()
    transactionTime: Date;

    @Field()
    flowType: FlowType;

    @Field()
    amount: number;

    @Field()
    from: string;

    @Field()
    to: string;
}
