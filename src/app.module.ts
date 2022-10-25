import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://talison:123@cluster0.yevcvi1.mongodb.net/?retryWrites=true&w=majority'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
