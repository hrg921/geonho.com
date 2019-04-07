import { ObjectId } from 'mongodb';
import { Field, InputType } from 'type-graphql';
import { Maker, MakerType } from './maker.type';
import { ObjectIdScalar } from '../../object-id.scalar';

@InputType()
export class MakerInput implements Partial<Maker> {
    @Field()
    transactionTime: Date;

    @Field()
    title: string;

    @Field(type => MakerType)
    makerType: MakerType;

    @Field(returns => [ObjectIdScalar], { nullable: true })
    tasks: ObjectId[];
}
