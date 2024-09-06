import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {map } from 'rxjs';

import { NEWS_PATTERNS , 
  NewsDto as ClientNewsDto ,
  CreateNewsDto as ClientCreateNewsDto,
  UpdateNewsDto as ClientUpdateNewsDto,
} from '@app/contracts/news'; 

import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsDto } from './dto/news.dto';
import { NEWS_CLIENT } from './constant';



@Injectable()
export class NewsService {

  constructor(@Inject(NEWS_CLIENT) private newsClient:ClientProxy){}

  private mapNewsDto(newsDto: ClientNewsDto): NewsDto {

    return {
      id:newsDto.id,
      title:newsDto.title,
    };
  }

  create(createNewsDto: CreateNewsDto) {
    return this.newsClient.send<ClientNewsDto,ClientCreateNewsDto>(NEWS_PATTERNS.CREATE,createNewsDto).pipe(map(this.mapNewsDto));
  }

  findAll() {
    return this.newsClient.send(NEWS_PATTERNS.FIND_ALL,{});
  }

  findOne(id: number) {
    return this.newsClient.send(NEWS_PATTERNS.FIND_ONE,id);
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return this.newsClient.send(NEWS_PATTERNS.UPDATE,{id,...updateNewsDto});
  }

  remove(id: number) {
    return this.newsClient.send(NEWS_PATTERNS.REMOVE,id);
  }
}
