import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { MakerInput } from './maker.input';
import { Maker, MakerModel } from './maker.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => Maker)
export class MakerResolver {
    @Query(returns => [Maker])
    async makersByMakerFilter(): Promise<Maker[]> {
        return await MakerModel.find({});
    }

    @Query(returns => Maker, { nullable: true })
    async makerById(
        @Arg('makerId', type => ObjectIdScalar)
        makerId: ObjectId
    ): Promise<Maker | null> {
        return await MakerModel.findOne({ _id: makerId });
    }

    @Mutation(returns => Maker)
    async addMaker(@Arg('maker') makerInput: MakerInput): Promise<Maker> {
        return await new MakerModel(makerInput).save();
    }

    @Mutation(returns => Maker, { nullable: true })
    async updateMaker(
        @Arg('maker') makerInput: MakerInput,
        @Arg('makerId') makerId: ObjectId
    ): Promise<Maker | null> {
        return await MakerModel.findOneAndUpdate({ _id: makerId }, makerInput);
    }

    @Mutation(returns => Maker, { nullable: true })
    async deleteMaker(
        @Arg('makerId', type => ObjectIdScalar)
        makerId: ObjectId
    ): Promise<Maker | null> {
        return await MakerModel.findOneAndRemove({
            _id: makerId,
        });
    }
}
