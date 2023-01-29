import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './typeorm/entities/Profile';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { Post } from './typeorm/entities/Post';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '192.168.0.136',
      port: 3306,
      username: 'root',
      password: 'figa',
      database: 'nestjs_typeorm_mysql',
      entities: [User, Profile, Post],
      synchronize: true,
      bigNumberStrings: false,
      logging: true,
    }),
    UsersModule,
    ProfilesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
