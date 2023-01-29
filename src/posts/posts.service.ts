import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Post';
import { createUserPostParams } from 'src/types/types';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postseRepository: Repository<Post>,
  ) {}

  async createUserPost(
    id: string,
    createUserPostDetails: createUserPostParams,
  ) {
    const user = await this.userRepository.findOneByOrFail({ id });
    if (!user) {
      throw new HttpException(
        'User not found. Cannot create post.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newPost = this.postseRepository.create({
      ...createUserPostDetails,
      user,
    });
    return this.postseRepository.save(newPost);
  }
}
