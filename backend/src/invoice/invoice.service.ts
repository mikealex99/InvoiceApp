import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Invoice } from '@prisma/client';
import { CreateInvoiceInput, UpdateInvoiceInput } from './dto/invoice.input';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async getInvoices(page: number, pageSize: number): Promise<Invoice[]> {
    const skip = (page - 1) * pageSize;
    return this.prisma.invoice.findMany({
      skip,
      take: pageSize,
    });
  }

  async getInvoiceById(id: number): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  async createInvoice(
    createInvoiceInput: CreateInvoiceInput,
  ): Promise<Invoice> {
    return this.prisma.invoice.create({
      data: createInvoiceInput,
    });
  }

  async updateInvoice(
    id: number,
    updateInvoiceInput: UpdateInvoiceInput,
  ): Promise<Invoice | null> {
    return this.prisma.invoice.update({
      where: { id },
      data: updateInvoiceInput,
    });
  }

  async deleteInvoice(id: number): Promise<boolean> {
    try {
      await this.prisma.invoice.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getTotalAmountByDueDate(due_date: Date): Promise<number> {
    const invoices = await this.prisma.invoice.findMany({
      where: { due_date: due_date },
    });
    return invoices.reduce((total, invoice) => total + invoice.amount, 0);
  }
}
