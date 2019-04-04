import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { WishProductInput } from './wish-product.input';
import {
    WishProduct,
    WishProductModel,
} from './wish-product.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => WishProduct)
export class WishProductResolver {
    @Query(returns => [WishProduct])
    async WishProductsByWishProductFilter(): Promise<
        WishProduct[]
    > {
        return await WishProductModel.find({});
    }

    @Query(returns => WishProduct, { nullable: true })
    async WishProductById(
        @Arg('WishProductId', type => ObjectIdScalar)
        WishProductId: ObjectId
    ): Promise<WishProduct | null> {
        return await WishProductModel.findOne({ _id: WishProductId });
    }

    @Mutation(returns => WishProduct)
    async addWishProduct(
        @Arg('WishProduct') WishProductInput: WishProductInput
    ): Promise<WishProduct> {
        return await new WishProductModel(WishProductInput).save();
    }

    @Mutation(returns => WishProduct, { nullable: true })
    async updateWishProduct(
        @Arg('WishProduct') WishProductInput: WishProductInput,
        @Arg('WishProductId') WishProductId: ObjectId
    ): Promise<WishProduct | null> {
        return await WishProductModel.findOneAndUpdate(
            { _id: WishProductId },
            WishProductInput
        );
    }

    @Mutation(returns => WishProduct, { nullable: true })
    async deleteWishProduct(
        @Arg('WishProductId', type => ObjectIdScalar)
        WishProductId: ObjectId
    ): Promise<WishProduct | null> {
        return await WishProductModel.findOneAndRemove({
            _id: WishProductId,
        });
    }
}
