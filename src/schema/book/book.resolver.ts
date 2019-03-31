import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { BookInput } from './book.input';
import { Book, BookModel } from './book.type';
import { ObjectIdScalar } from '../../object-id.scalar';
import { ObjectId } from 'mongodb';

@Resolver(of => Book)
export class BookResolver {
    @Query(returns => [Book])
    async booksByBookFilter(): Promise<Book[]> {
        return await BookModel.find({});
    }

    @Query(returns => Book, { nullable: true })
    async bookById(
        @Arg("bookId") bookId: ObjectId
    ): Promise<Book | null> {
        return await BookModel.findOne({ _id: bookId });
    }

    @Mutation(returns => Book)
    async addBook(
        @Arg("book") bookInput: BookInput
    ): Promise<Book> {
        return await new BookModel(bookInput).save();
    }

    @Mutation(returns => Book, { nullable: true })
    async updateBook(
        @Arg("book") bookInput: BookInput,
        @Arg("bookId") bookId: ObjectId
    ): Promise<Book | null> {
        return await BookModel.findOneAndUpdate({ _id: bookId }, bookInput);
    }

    @Mutation(returns => Book, { nullable: true })
    async deleteBook(
        @Arg("bookId", type => ObjectIdScalar) bookId: ObjectId
    ): Promise<Book | null> {
        return await BookModel.findOneAndRemove({ _id: bookId });
    }
}
