import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { ArtistGenre } from '../../artist_genres/entities/artist_genre.entity';

@Entity('genres')
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => ArtistGenre, artistGenre => artistGenre.genre)
    artistGenres: ArtistGenre[];
}