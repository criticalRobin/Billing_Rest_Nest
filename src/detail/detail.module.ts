import { Module } from '@nestjs/common';
import { DetailController } from './detail.controller';
import { DetailService } from './detail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detail } from './detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detail])],
  controllers: [DetailController],
  providers: [DetailService],
})
export class DetailModule {}
