import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserPostDto } from './dto/CreateUserPost.dto';
import { PostsService } from './posts.service';

@Controller('users')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post(':id/posts')
  createUserPost(
    @Param('id') id: string,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.postsService.createUserPost(id, createUserPostDto);
  }
}
