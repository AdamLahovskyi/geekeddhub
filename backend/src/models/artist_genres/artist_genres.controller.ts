import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ArtistGenresService } from './artist_genres.service';
import { CreateArtistGenreDto } from './dto/create-artist_genre.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('artist-genres')
@Controller('artist-genres')
export class ArtistGenresController {
  constructor(private readonly artistGenresService: ArtistGenresService) {}

  @Post()
  create(@Body() createArtistGenreDto: CreateArtistGenreDto) {
    return this.artistGenresService.create(createArtistGenreDto);
  }

  @Get()
  findAll() {
    return this.artistGenresService.findAll();
  }

  @Get('artist/:artist_id')
  findByArtist(@Param('artist_id') artist_id: number) {
    return this.artistGenresService.findByArtist(artist_id);
  }

  @Get('genre/:genre_id')
  findByGenre(@Param('genre_id') genre_id: number) {
    return this.artistGenresService.findByGenre(genre_id);
  }

  @Delete(':artist_id/:genre_id')
  remove(@Param('artist_id') artist_id: number, @Param('genre_id') genre_id: number) {
    return this.artistGenresService.remove(artist_id, genre_id);
  }
}