import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AlbumArtistsService } from './album_artists.service';
import { CreateAlbumArtistDto } from './dto/create-album_artist.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AlbumArtist } from './entities/album_artist.entity';

@ApiTags('album-artists')
@Controller('album-artists')
export class AlbumArtistsController {
  constructor(private readonly albumArtistsService: AlbumArtistsService) {}

  @Post()
  @ApiOperation({ summary: 'Create album artist relation' })
  @ApiResponse({ status: 201, type: AlbumArtist })
  create(@Body() createAlbumArtistDto: CreateAlbumArtistDto) {
    return this.albumArtistsService.create(createAlbumArtistDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all album artist relations' })
  @ApiResponse({ status: 200, type: [AlbumArtist] })
  findAll() {
    return this.albumArtistsService.findAll();
  }

  @Get('album/:album_id')
  @ApiOperation({ summary: 'Get artists by album ID' })
  @ApiResponse({ status: 200, type: [AlbumArtist] })
  findByAlbum(@Param('album_id') album_id: number) {
    return this.albumArtistsService.findByAlbum(album_id);
  }

  @Get('artist/:artist_id')
  @ApiOperation({ summary: 'Get albums by artist ID' })
  @ApiResponse({ status: 200, type: [AlbumArtist] })
  findByArtist(@Param('artist_id') artist_id: number) {
    return this.albumArtistsService.findByArtist(artist_id);
  }

  @Delete(':album_id/:artist_id')
  @ApiOperation({ summary: 'Delete album artist relation' })
  @ApiResponse({ status: 200 })
  remove(
      @Param('album_id') album_id: number,
      @Param('artist_id') artist_id: number
  ) {
    return this.albumArtistsService.remove(album_id, artist_id);
  }
}