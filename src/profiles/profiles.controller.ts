import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('/users')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Post(':id/profiles')
  createUserProfile(
    @Param('id') id: string,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.profilesService.createUserProfile(id, createUserProfileDto);
  }
}
