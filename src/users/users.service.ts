import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetAllUsersResponse, GetOneUserResponse } from 'src/interfaces/user';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/types/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async getAllUsers(): Promise<GetAllUsersResponse> {
    return await this.userRepository.find({ relations: ['profile', 'posts'] });
  }

  async getOneUser(id: string): Promise<GetOneUserResponse> {
    return await this.userRepository.findOneByOrFail({ id });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
    });
    return this.userRepository.save(newUser);
  }

  updateUser(id: string, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  removeUser(id: string) {
    return this.userRepository.delete({ id });
  }
}
