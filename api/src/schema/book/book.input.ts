import { Field, InputType } from 'type-graphql';
import { Book } from './book.type';

@InputType()
export class BookInput implements Partial<Book> {
    @Field()
    title: string;

    @Field()
    author: string;
}
