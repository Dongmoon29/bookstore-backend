import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookQueryDto } from './dtos/book-query-dto';
import { Books } from 'src/models/book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 1. 책 목록 조회 (GET /api/books)
  @Get()
  findAll(
    @Query() query: BookQueryDto,
  ): Promise<{ books: Books[]; total: number }> {
    return this.bookService.findMany(query);
  }

  // 2. 책 상세 정보 조회 (GET /api/books/:id)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Books> {
    return this.bookService.findOne(+id);
  }

  // 3. 책 추가 (POST /api/books)
  @Post()
  create(@Body() book: Books): Promise<Books> {
    return this.bookService.create(book);
  }

  // 4. 책 정보 수정 (PUT /api/books/:id)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() book: Partial<Books>,
  ): Promise<Books> {
    return this.bookService.update(+id, book);
  }

  // 5. 책 삭제 (DELETE /api/books/:id)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bookService.remove(+id);
  }
}
