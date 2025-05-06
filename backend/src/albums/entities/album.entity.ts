import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('albums')
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    release_date: Date;

    @Column()
    cover_url: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
