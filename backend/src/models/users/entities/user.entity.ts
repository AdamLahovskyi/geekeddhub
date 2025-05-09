import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import {Artist} from "../../artists/entities/artist.entity";
import {Playlist} from "../../playlists/entities/playlist.entity";
import {SavedAlbum} from "../../saved_albums/entities/saved_album.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password_hash: string;

    @Column()
    bio: string;

    @Column()
    pfp_url: string;

    @Column({ nullable: true })
    role_id: number;

    @ManyToOne(() => Role, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @OneToOne(() => Artist, artist => artist.user)
    artist: Artist;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToMany(() => Playlist, playlist => playlist.created_by_user)
    playlists: Playlist[];

    @OneToMany(() => SavedAlbum, savedAlbum => savedAlbum.user)
    saved_albums: SavedAlbum[];
}
