import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Artist } from '../../artists/entities/artist.entity';
import { Genre } from '../../genres/entities/genre.entity';

@Entity('artist_genres')
export class ArtistGenre {
    @PrimaryColumn()
    artist_id: number;

    @PrimaryColumn()
    genre_id: number;

    @ManyToOne(() => Artist, artist => artist.id)
    @JoinColumn({ name: 'artist_id' })
    artist: Artist;

    @ManyToOne(() => Genre, genre => genre.id)
    @JoinColumn({ name: 'genre_id' })
    genre: Genre;
}