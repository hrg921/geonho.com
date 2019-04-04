import { Field, InputType } from 'type-graphql';
import { WishProduct } from './wish-product.type';
import { MoneyUnit } from '../../enum/MoneyUnit';

@InputType()
export class WishProductInput implements Partial<WishProduct> {
    @Field()
    title?: string;

    @Field()
    link?: string;

    @Field()
    amount?: number;

    @Field()
    unit?: MoneyUnit;
}
