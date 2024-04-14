import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from '../entities/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Client> {
    const client = await this.clientsService.findOne(+id);
    if (!client) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return client;
  }

  @Post()
  async create(@Body() client: Partial<Client>): Promise<Client> {
    return this.clientsService.create(client);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() client: Partial<Client>,
  ): Promise<Client> {
    const updatedClient = await this.clientsService.update(+id, client);
    if (!updatedClient) {
      throw new NotFoundException(`Client #${id} not found`);
    }
    return updatedClient;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const client = await this.clientsService.findOne(id);
    if (!client) {
      throw new NotFoundException(`Client #${id} not found`);
    } else {
      return this.clientsService.delete(id);
    }
  }
}
