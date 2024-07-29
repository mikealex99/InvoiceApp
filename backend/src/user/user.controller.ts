import {
  Controller,
  Post,
  Get,
  Put,
  Param,
  Body,
  Delete,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInput, UpdateUserInput } from './dto/user.dto';
import { UserResponse } from './dto/user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBearerAuth()
  async createUser(
    @Body() createUserInput: CreateUserInput,
  ): Promise<UserResponse> {
    try {
      return await this.userService.createUser(createUserInput);
    } catch (error) {
      if (error.response === 'Email already in use') {
        throw new ConflictException(error.response);
      }
      throw error;
    }
  }

  @Get(':id')
  @ApiBearerAuth()
  async getUserById(@Param('id') id: number): Promise<UserResponse> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      if (error.response === 'User not found') {
        throw new NotFoundException(error.response);
      }
      throw error;
    }
  }

  @Put(':id')
  @ApiBearerAuth()
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserInput: UpdateUserInput,
  ): Promise<UserResponse> {
    try {
      return await this.userService.updateUser({ ...updateUserInput, id });
    } catch (error) {
      if (error.response === 'User not found') {
        throw new NotFoundException(error.response);
      }
      throw error;
    }
  }

  @Delete(':id')
  @ApiBearerAuth()
  async deleteUser(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.deleteUser(id);
    } catch (error) {
      if (error.response === 'User not found') {
        throw new NotFoundException(error.response);
      }
      throw error;
    }
  }
}
