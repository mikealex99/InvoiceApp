import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceInput, UpdateInvoiceInput } from './dto/invoice.input';
import { Invoice } from '@prisma/client';
import { InvoiceType } from './dto/invoice.dto';

@Resolver(() => InvoiceType)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Query(() => [InvoiceType])
  async invoices(
    @Args('page', { type: () => Int }) page: number,
    @Args('pageSize', { type: () => Int }) pageSize: number,
  ): Promise<Invoice[]> {
    return this.invoiceService.getInvoices(page, pageSize);
  }

  @Query(() => InvoiceType, { nullable: true })
  async invoice(@Args('id') id: number): Promise<Invoice | null> {
    return this.invoiceService.getInvoiceById(id);
  }

  @Query(() => Number)
  async totalAmountByDueDate(
    @Args('due_date') due_date: string,
  ): Promise<number> {
    return this.invoiceService.getTotalAmountByDueDate(new Date(due_date));
  }

  @Mutation(() => InvoiceType)
  async createInvoice(
    @Args('data') createInvoiceInput: CreateInvoiceInput,
  ): Promise<Invoice> {
    return this.invoiceService.createInvoice(createInvoiceInput);
  }

  @Mutation(() => InvoiceType, { nullable: true })
  async updateInvoice(
    @Args('id') id: number,
    @Args('data') updateInvoiceInput: UpdateInvoiceInput,
  ): Promise<Invoice | null> {
    return this.invoiceService.updateInvoice(id, updateInvoiceInput);
  }

  @Mutation(() => Boolean)
  async deleteInvoice(@Args('id') id: number): Promise<boolean> {
    return this.invoiceService.deleteInvoice(id);
  }
}
