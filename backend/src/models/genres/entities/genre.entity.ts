import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('genres')
export class Genre {
    @PrimaryGeneratedColumn()
    genre_id: number;

    @Column({ unique: true })
    name: string;
}