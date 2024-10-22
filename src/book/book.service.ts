import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/models/book.entity';
import { Repository } from 'typeorm';
import { BookQueryDto } from './dtos/book-query-dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Books)
    private booksRepository: Repository<Books>,
  ) {}

  async findMany(
    query: BookQueryDto,
  ): Promise<{ books: Books[]; total: number }> {
    const { offset, limit, author, title } = query;

    const qb = this.booksRepository.createQueryBuilder('books');

    if (author?.trim()) {
      qb.andWhere('books.author ILIKE :author', { author: `%${author}%` });
    }

    if (title?.trim()) {
      qb.andWhere('books.title ILIKE :title', { title: `%${title}%` });
    }

    const total = await qb.getCount();

    qb.skip(offset);
    qb.take(limit);
    qb.orderBy('books.id', 'DESC');

    const books = await qb.getMany();
    return { books, total };
  }

  findOne(id: number): Promise<Books> {
    return this.booksRepository.findOneBy({ id });
  }

  create(book: Books): Promise<Books> {
    return this.booksRepository.save(book);
  }

  async update(id: number, bookData: Partial<Books>): Promise<Books> {
    await this.booksRepository.update(id, bookData);
    return this.booksRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
