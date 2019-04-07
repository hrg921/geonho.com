import { Field, InputType } from 'type-graphql';
import { MakerTask } from './maker-task.type';

@InputType()
export class MakerTaskInput implements Partial<MakerTask> {
    @Field()
    title: string;

    @Field({ nullable: true })
    comment?: string;
}
