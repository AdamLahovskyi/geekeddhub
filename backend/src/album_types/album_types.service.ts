import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlbumTypeDto } from './dto/create-album_type.dto';
import { UpdateAlbumTypeDto } from './dto/update-album_type.dto';
import { AlbumType } from './entities/album_type.entity';

@Injectable()
export class AlbumTypesService {
  constructor(
      @InjectRepository(AlbumType)
      private albumTypesRepository: Repository<AlbumType>
  ) {}

  async create(createAlbumTypeDto: CreateAlbumTypeDto): Promise<AlbumType> {
    const albumType = new AlbumType();
    Object.assign(albumType, {
      ...createAlbumTypeDto,
      created_at: new Date(),
      updated_at: new Date()
    });
    return this.albumTypesRepository.save(albumType);
  }

  findAll(): Promise<AlbumType[]> {
    return this.albumTypesRepository.find({
      relations: ['albums']
    });
  }

  async findOne(id: number): Promise<AlbumType> {
    const albumType = await this.albumTypesRepository.findOne({
      where: { id },
      relations: ['albums']
    });
    if (!albumType) {
      throw new NotFoundException(`Album type with id ${id} not found`);
    }
    return albumType;
  }

  async update(id: number, updateAlbumTypeDto: UpdateAlbumTypeDto): Promise<AlbumType> {
    const albumType = await this.findOne(id);
    Object.assign(albumType, {
      ...updateAlbumTypeDto,
      updated_at: new Date()
    });
    return this.albumTypesRepository.save(albumType);
  }

  async remove(id: number): Promise<void> {
    const result = await this.albumTypesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Album type with id ${id} not found`);
    }
  }
}