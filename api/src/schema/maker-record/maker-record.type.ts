import { ObjectId } from 'mongodb';
import { ObjectType, Field } from 'type-graphql';
import { pre, prop as Property, Ref, Typegoose } from 'typegoose';
import { Maker, MakerModel, MakerType } from '../maker/maker.type';

@pre<MakerRecord>('save', async function(next) {
    const maker = await MakerModel.findById(this.maker);
    if (!maker) throw Error(`Maker is not exist, makerId: ${this.maker}`);

    if (!this.checks || maker.tasks.length !== this.checks.length) {
        this.checks = Array(maker.tasks.length);
    }
})
@ObjectType()
export class MakerRecord extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ unique: true, required: true })
    date: Date;

    @Field(returns => Maker)
    @Property({ ref: Maker, required: true })
    maker: Ref<Maker>;

    @Field(returns => MakerType)
    @Property({ enum: MakerType, required: true })
    makerType: MakerType;

    @Field(returns => [Boolean])
    @Property()
    checks: boolean[];
}

export const MakerRecordModel = new MakerRecord().getModelForClass(MakerRecord);
