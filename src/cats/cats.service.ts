import { Injectable } from '@nestjs/common';
import { Cat } from 'src/schemas/cat.schema';
import { catsRepository } from './cats.repository';
import { CreateCatDto } from './dto/createCat.dto';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: catsRepository) { }

  async getCatByName(catName: string): Promise<Cat> {
    return this.catsRepository.findOne({ catName })
  }

  async getCats(): Promise<Cat[]> {
    return this.catsRepository.findAll();
  }

  async createCat(name: string, age: number, breed: string): Promise<Cat> {
    return this.catsRepository.create({
      name,
      age,
      breed
    })
  }

  async updateCat(catId: string, catUpdated: CreateCatDto): Promise<Cat> {
    return this.catsRepository.findOneAndUpdate({catId}, catUpdated)
  }
}