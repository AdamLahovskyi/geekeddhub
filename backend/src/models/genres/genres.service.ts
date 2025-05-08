import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(
      @InjectRepository(Genre)
      private genresRepository: Repository<Genre>,
  ) {}

  create(createGenreDto: CreateGenreDto) {
    return this.genresRepository.save(createGenreDto);
  }

  findAll() {
    return this.genresRepository.find();
  }

  findOne(genre_id: number) {
    return this.genresRepository.findOneBy({ genre_id });
  }

  update(genre_id: number, updateGenreDto: UpdateGenreDto) {
    return this.genresRepository.update(genre_id, updateGenreDto);
  }

  remove(genre_id: number) {
    return this.genresRepository.delete(genre_id);
  }
}