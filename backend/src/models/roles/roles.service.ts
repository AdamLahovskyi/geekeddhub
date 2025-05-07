import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
      @InjectRepository(Role)
      private roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    role.name = createRoleDto.name;
    role.created_at = new Date();
    role.updated_at = new Date();

    return this.roleRepository.save(role);
  }

  findAll() : Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: number) : Promise<Role> {
    const role = await this.roleRepository.findOneBy({id});

    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(id);
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    role.updated_at = new Date();
    Object.assign(role, updateRoleDto);
    return this.roleRepository.save(role);
  }

  async remove(id: number): Promise<void> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Role #${id} not found`);
    }
  }
}
