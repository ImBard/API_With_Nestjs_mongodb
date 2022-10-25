import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, FilterQuery, Model } from 'mongoose';
import { Cat, CatDocument } from 'src/schemas/cat.schema';
import { CreateCatDto } from './dto/createCat.dto';

@Injectable()
export class catsRepository {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(catFilterQuery: FilterQuery<Cat>): Promise<Cat> {
    return this.catModel.findOne(catFilterQuery);
  }

  async findOneAndUpdate(catFilterQuery: FilterQuery<Cat>, cat: Partial<Cat>): Promise<Cat> {
    return this.catModel.findOneAndUpdate(catFilterQuery, cat);
  }
}