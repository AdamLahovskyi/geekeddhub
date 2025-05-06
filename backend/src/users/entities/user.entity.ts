import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

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
    pfp_url: string;

    @Column({ nullable: true })
    role_id: number;

    @ManyToOne(() => Role, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
