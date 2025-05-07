import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  constructor(
      @InjectRepository(Album)
      private albumsRepository: Repository<Album>,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const album = new Album();
    Object.assign(album,{
      ...createAlbumDto,
      release_date: createAlbumDto.release_date,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return this.albumsRepository.save(album);
  }

  findAll(): Promise<Album[]> {
    return this.albumsRepository.find({
      relations: ['album_type'],
    });
  }

  async findOne(id: number): Promise<Album> {
    const album = await this.albumsRepository.findOne({
      where: { id },
      relations: ['album_type'],
    });
    if (!album) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
    return album;
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album>  {
    const album = await this.findOne(id);
    Object.assign(album, {
      ...updateAlbumDto,
      release_date: updateAlbumDto.release_date,
      updated_at: new Date(),
    });

    return this.albumsRepository.save(album);
  }

  async remove(id: number): Promise<void>  {
    const result = await this.albumsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
  }
}
