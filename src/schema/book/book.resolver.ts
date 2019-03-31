import { Resolver, Query } from 'type-graphql';
import { Book } from './book.type';

@Resolver(of => Book)
export class BookResolver {
    private readonly bookDatas: Book[] = [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
    ];

    @Query(returns => [Book])
    async books(): Promise<Book[]> {
        return await this.bookDatas;
    }
}
