import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { MakerRecordInput } from './maker-record.input';
import { MakerRecord, MakerRecordModel } from './maker-record.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => MakerRecord)
export class MakerRecordResolver {
    @Query(returns => [MakerRecord])
    async makerRecordsByFilter(): Promise<MakerRecord[]> {
        return await MakerRecordModel.find({});
    }

    @Query(returns => MakerRecord, { nullable: true })
    async makerRecordById(
        @Arg('makerRecordId', type => ObjectIdScalar)
        makerRecordId: ObjectId
    ): Promise<MakerRecord | null> {
        return await MakerRecordModel.findOne({ _id: makerRecordId });
    }

    @Mutation(returns => MakerRecord)
    async addMakerRecord(
        @Arg('makerRecord') makerRecordInput: MakerRecordInput
    ): Promise<MakerRecord> {
        return await new MakerRecordModel(makerRecordInput).save();
    }

    @Mutation(returns => MakerRecord, { nullable: true })
    async updateMakerRecord(
        @Arg('makerRecord') makerRecordInput: MakerRecordInput,
        @Arg('makerRecordId') makerRecordId: ObjectId
    ): Promise<MakerRecord | null> {
        return await MakerRecordModel.findOneAndUpdate(
            { _id: makerRecordId },
            makerRecordInput
        );
    }

    @Mutation(returns => MakerRecord, { nullable: true })
    async deleteMakerRecord(
        @Arg('makerRecordId', type => ObjectIdScalar)
        makerRecordId: ObjectId
    ): Promise<MakerRecord | null> {
        return await MakerRecordModel.findOneAndRemove({
            _id: makerRecordId,
        });
    }
}
