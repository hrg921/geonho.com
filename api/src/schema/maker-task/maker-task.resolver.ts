import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { MakerTaskInput } from './maker-task.input';
import { MakerTask, MakerTaskModel } from './maker-task.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => MakerTask)
export class MakerTaskResolver {
    @Query(returns => [MakerTask])
    async makerTasksByFilter(): Promise<MakerTask[]> {
        return await MakerTaskModel.find({});
    }

    @Query(returns => MakerTask, { nullable: true })
    async makerTaskById(
        @Arg('makerTaskId', type => ObjectIdScalar)
        makerTaskId: ObjectId
    ): Promise<MakerTask | null> {
        return await MakerTaskModel.findOne({ _id: makerTaskId });
    }

    @Mutation(returns => MakerTask)
    async addMakerTask(
        @Arg('makerTask') makerTaskInput: MakerTaskInput
    ): Promise<MakerTask> {
        return await new MakerTaskModel(makerTaskInput).save();
    }

    @Mutation(returns => MakerTask, { nullable: true })
    async updateMakerTask(
        @Arg('makerTask') makerTaskInput: MakerTaskInput,
        @Arg('makerTaskId') makerTaskId: ObjectId
    ): Promise<MakerTask | null> {
        return await MakerTaskModel.findOneAndUpdate(
            { _id: makerTaskId },
            makerTaskInput
        );
    }

    @Mutation(returns => MakerTask, { nullable: true })
    async deleteMakerTask(
        @Arg('makerTaskId', type => ObjectIdScalar)
        makerTaskId: ObjectId
    ): Promise<MakerTask | null> {
        return await MakerTaskModel.findOneAndRemove({
            _id: makerTaskId,
        });
    }
}
