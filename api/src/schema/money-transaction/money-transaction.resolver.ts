import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { MoneyTransactionInput } from './money-transaction.input';
import {
    MoneyTransaction,
    MoneyTransactionModel,
} from './money-transaction.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => MoneyTransaction)
export class MoneyTransactionResolver {
    @Query(returns => [MoneyTransaction])
    async moneyTransactionsByMoneyTransactionFilter(): Promise<
        MoneyTransaction[]
    > {
        return await MoneyTransactionModel.find({});
    }

    @Query(returns => MoneyTransaction, { nullable: true })
    async moneyTransactionById(
        @Arg('moneyTransactionId', type => ObjectIdScalar)
        moneyTransactionId: ObjectId
    ): Promise<MoneyTransaction | null> {
        return await MoneyTransactionModel.findOne({ _id: moneyTransactionId });
    }

    @Mutation(returns => MoneyTransaction)
    async addMoneyTransaction(
        @Arg('moneyTransaction') moneyTransactionInput: MoneyTransactionInput
    ): Promise<MoneyTransaction> {
        return await new MoneyTransactionModel(moneyTransactionInput).save();
    }

    @Mutation(returns => MoneyTransaction, { nullable: true })
    async updateMoneyTransaction(
        @Arg('moneyTransaction') moneyTransactionInput: MoneyTransactionInput,
        @Arg('moneyTransactionId') moneyTransactionId: ObjectId
    ): Promise<MoneyTransaction | null> {
        return await MoneyTransactionModel.findOneAndUpdate(
            { _id: moneyTransactionId },
            moneyTransactionInput
        );
    }

    @Mutation(returns => MoneyTransaction, { nullable: true })
    async deleteMoneyTransaction(
        @Arg('moneyTransactionId', type => ObjectIdScalar)
        moneyTransactionId: ObjectId
    ): Promise<MoneyTransaction | null> {
        return await MoneyTransactionModel.findOneAndRemove({
            _id: moneyTransactionId,
        });
    }
}
