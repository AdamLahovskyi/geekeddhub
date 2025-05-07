import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { Album } from '../albums/entities/album.entity';

@Injectable()
export class TracksService {
  constructor(
      @InjectRepository(Track)
      private tracksRepository: Repository<Track>,
      @InjectRepository(Album)
      private albumsRepository: Repository<Album>,
  ) {}

  async create(createTrackDto: CreateTrackDto): Promise<Track> {
    const album = await this.albumsRepository.findOne({
      where: {id: createTrackDto.album_id}
    });
    if (!album) {
      throw new NotFoundException(`Album with id ${createTrackDto.album_id} not found`);
    }

    const track = new Track();
    Object.assign(track, {
      ...createTrackDto,
      album,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return this.tracksRepository.save(track);
  }

  findAll() : Promise<Track[]> {
    return this.tracksRepository.find({
      relations: ['albums'],
    });
  }

  async findOne(id: number): Promise<Track> {
    const track = await this.tracksRepository.findOne({
      where: {id},
      relations: ['albums'],
    });

    if (!track) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return track;
  }

  async update(id: number, updateTrackDto: UpdateTrackDto): Promise<Track> {
    const track = await this.findOne(id);
    if(updateTrackDto.album_id){
      const album = await this.albumsRepository.findOne({
        where: {id: updateTrackDto.album_id},
      });
      if (!album) {
        throw new NotFoundException(`Album with id ${id} not found`);
      }
      track.album = album;
    }

    Object.assign(track, {
      ...updateTrackDto,
      updated_at: new Date(),
    });

    return this.tracksRepository.save(track);
  }

  async remove(id: number): Promise<void> {
    const result = await this.tracksRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Track with id ${id} not found`);
    }
  }
}
