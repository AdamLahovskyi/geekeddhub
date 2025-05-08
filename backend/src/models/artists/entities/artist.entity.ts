import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany} from 'typeorm';
import {User} from "../../users/entities/user.entity";
import { ArtistGenre } from '../../artist_genres/entities/artist_genre.entity';

@Entity('artists')
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => ArtistGenre, artistGenre => artistGenre.artist)
    artistGenres: ArtistGenre[];

    @Column()
    name: string;

    @Column()
    bio: string;

    @Column()
    pfp_url: string;

    @Column()
    created_at: Date;
}
