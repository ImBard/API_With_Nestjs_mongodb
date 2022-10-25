import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { Cat } from 'src/schemas/cat.schema';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/createCat.dto';


@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats(): Promise<Cat[]> {
    return this.catsService.getCats();
  }

  @Get(':catName')
  async getCat(@Param('catName') catName: string): Promise<Cat> {
    return this.catsService.getCatByName(catName)
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCatDto.name, createCatDto.age, createCatDto.breed)
  }

  @Patch('catName')
  async updateCat(@Param('catName') catName: string, @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.updateCat(catName, createCatDto)
  }
}
