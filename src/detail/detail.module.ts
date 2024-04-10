import { Module } from '@nestjs/common';
import { DetailController } from './detail.controller';
import { DetailService } from './detail.service';

@Module({
  controllers: [DetailController],
  providers: [DetailService]
})
export class DetailModule {}
