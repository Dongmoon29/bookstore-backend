import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Books } from 'src/models/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
