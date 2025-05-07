import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService {
  constructor(
      @InjectRepository(Artist)
      private artistsRepository: Repository<Artist>,
  ) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist = new Artist();
    Object.assign(artist, {
      ...createArtistDto,
      created_at: new Date(),
    });
    return this.artistsRepository.save(artist);
  }

  findAll(): Promise<Artist[]> {
    return this.artistsRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Artist> {
    const artist = await this.artistsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!artist) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
    return artist;
  }

  async update(id: number, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artist = await this.findOne(id);
    Object.assign(artist, updateArtistDto);
    return this.artistsRepository.save(artist);
  }

  async remove(id: number): Promise<void> {
    const result = await this.artistsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
  }
}