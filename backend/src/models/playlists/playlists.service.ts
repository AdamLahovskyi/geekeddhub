import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PlaylistsService {
  constructor(
      @InjectRepository(Playlist)
      private playlistsRepository: Repository<Playlist>,
      private usersService: UsersService
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto) {
    const user = await this.usersService.findOne(createPlaylistDto.created_by_user_id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const playlist = this.playlistsRepository.create({
      ...createPlaylistDto,
      created_at: new Date(),
      followers_count: 0
    });
    return this.playlistsRepository.save(playlist);
  }

  async findOne(id: number) {
    const playlist = await this.playlistsRepository.findOne({
      where: { id },
      relations: ['created_by_user'] // Load the relation directly
    });
    return playlist;
  }

  async findAll() {
    return this.playlistsRepository.find({
      relations: ['created_by_user'] // Load the relation directly
    });
  }

  async update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    if (updatePlaylistDto.created_by_user_id) {
      const user = await this.usersService.findOne(updatePlaylistDto.created_by_user_id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
    }
    return this.playlistsRepository.update(id, updatePlaylistDto);
  }

  remove(id: number) {
    return this.playlistsRepository.delete(id);
  }
}