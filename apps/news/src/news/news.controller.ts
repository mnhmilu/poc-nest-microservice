import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NewsService } from './news.service';

import { NEWS_PATTERNS } from '../../../../libs/contracts/src/news/news.patterns';
import { CreateNewsDto } from '@app/contracts/news/create-news.dto';
import { UpdateNewsDto } from '@app/contracts/news/update-news.dto';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern(NEWS_PATTERNS.CREATE)
  create(@Payload() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @MessagePattern(NEWS_PATTERNS.FIND_ALL)
  findAll() {
    return this.newsService.findAll();
  }

  @MessagePattern(NEWS_PATTERNS.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.newsService.findOne(id);
  }

  @MessagePattern(NEWS_PATTERNS.UPDATE)
  update(@Payload() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(updateNewsDto.id, updateNewsDto);
  }

  @MessagePattern(NEWS_PATTERNS.REMOVE)
  remove(@Payload() id: number) {
    return this.newsService.remove(id);
  }
}
