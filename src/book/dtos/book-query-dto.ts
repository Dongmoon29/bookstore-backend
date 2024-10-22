import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookQueryDto {
  @IsNotEmpty({ message: 'offset is required' })
  offset: number;

  @IsNotEmpty({ message: 'limit is required' })
  limit: number;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  title?: string;
}
