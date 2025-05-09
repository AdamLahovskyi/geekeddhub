import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Album } from '../../albums/entities/album.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('saved_albums')
export class SavedAlbum {
    @ApiProperty()
    @PrimaryColumn()
    user_id: number;

    @ApiProperty()
    @PrimaryColumn()
    album_id: number;

    @ApiProperty()
    @Column()
    saved_at: Date;

    @ManyToOne(() => User, user => user.saved_albums, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Album, album => album.saved_albums)
    @JoinColumn({ name: 'album_id' })
    album: Album;
}