import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {PlaylistTrack} from "../../playlist-tracks/entities/playlist-track.entity";

@Entity('playlists')
export class Playlist {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty({ required: false })
    @Column({ type: 'text', nullable: true })
    description: string;

    @ApiProperty({ required: false })
    @Column({ nullable: true })
    cover_url: string;

    @ApiProperty()
    @Column({ default: false })
    is_public: boolean;

    @ApiProperty()
    @Column({ default: 0 })
    followers_count: number;

    @ApiProperty()
    @Column()
    created_by_user_id: number;

    @ApiProperty()
    @Column()
    created_at: Date;

    @ManyToOne(() => User, user => user.playlists, { lazy: true })
    @JoinColumn({ name: 'created_by_user_id' })
    created_by_user: Promise<User>;

    @ApiProperty()
    @OneToMany(() => PlaylistTrack, playlistTrack => playlistTrack.playlist)
    playlist_tracks: PlaylistTrack[];
}