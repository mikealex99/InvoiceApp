import { Controller, Get, Param, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Args } from '@nestjs/graphql';
import { Invoice } from '@prisma/client';

@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  @ApiBearerAuth()
  async invoices(
    @Args('page', { type: () => Number, nullable: true, defaultValue: 1 })
    page: number,
    @Args('pageSize', { type: () => Number, nullable: true, defaultValue: 10 })
    pageSize: number,
  ): Promise<Invoice[]> {
    return this.invoiceService.getInvoices(page, pageSize);
  }

  @Get(':id')
  @ApiBearerAuth()
  async getInvoiceById(@Param('id') id: number) {
    return this.invoiceService.getInvoiceById(id);
  }

  @Get('total')
  @ApiBearerAuth()
  async getTotalAmount(@Query('due_date') due_date: string) {
    return this.invoiceService.getTotalAmountByDueDate(new Date(due_date));
  }
}
