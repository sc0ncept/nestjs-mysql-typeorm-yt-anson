import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { Post } from 'src/typeorm/entities/Post';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User, Post])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
