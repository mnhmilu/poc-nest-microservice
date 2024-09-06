import { CreateNewsDto } from '@app/contracts/news/create-news.dto';
import { NewsDto } from '@app/contracts/news/news.dto';
import { UpdateNewsDto } from '@app/contracts/news/update-news.dto';
import { Injectable } from '@nestjs/common';


@Injectable()
export class NewsService {
  private news: NewsDto[] = [
    {
      id: 1,
      title: 'Title 1',
      author: 'Author 1',
      rating: 3.9,
    },
    {
      id: 2,
      title: 'Title 2',
      author: 'Author 2',
      rating: 4.9,
    },
  ];

  create(createNewsDto: CreateNewsDto) {
    const newNews: NewsDto = {
      ...createNewsDto,
      id: this.news.length + 1,
    };
    this.news.push(newNews);
    return newNews;
  }

  findAll() {
    return this.news;
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
