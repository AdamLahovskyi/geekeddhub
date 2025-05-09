import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { SavedAlbumsService } from './saved_albums.service';
import { CreateSavedAlbumDto } from './dto/create-saved_album.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SavedAlbum } from './entities/saved_album.entity';

@ApiTags('saved-albums')
@Controller('saved-albums')
export class SavedAlbumsController {
  constructor(private readonly savedAlbumsService: SavedAlbumsService) {}

  @Post()
  @ApiOperation({ summary: 'Save album for user' })
  @ApiResponse({ status: 201, type: SavedAlbum })
  create(@Body() createSavedAlbumDto: CreateSavedAlbumDto) {
    return this.savedAlbumsService.create(createSavedAlbumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all saved albums' })
  @ApiResponse({ status: 200, type: [SavedAlbum] })
  findAll() {
    return this.savedAlbumsService.findAll();
  }

  @Get('user/:user_id')
  @ApiOperation({ summary: 'Get saved albums by user ID' })
  @ApiResponse({ status: 200, type: [SavedAlbum] })
  findByUser(@Param('user_id') user_id: number) {
    return this.savedAlbumsService.findByUser(user_id);
  }

  @Get('album/:album_id')
  @ApiOperation({ summary: 'Get users who saved an album' })
  @ApiResponse({ status: 200, type: [SavedAlbum] })
  findByAlbum(@Param('album_id') album_id: number) {
    return this.savedAlbumsService.findByAlbum(album_id);
  }

  @Delete(':user_id/:album_id')
  @ApiOperation({ summary: 'Remove saved album' })
  @ApiResponse({ status: 200 })
  remove(
      @Param('user_id') user_id: number,
      @Param('album_id') album_id: number
  ) {
    return this.savedAlbumsService.remove(user_id, album_id);
  }
}