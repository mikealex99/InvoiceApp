import { InvoiceService } from './invoice.service';
import { CreateInvoiceInput, UpdateInvoiceInput } from './dto/invoice.input';
import { Invoice } from '@prisma/client';
export declare class InvoiceResolver {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    invoices(page: number, pageSize: number): Promise<Invoice[]>;
    invoice(id: number): Promise<Invoice | null>;
    totalAmountByDueDate(due_date: string): Promise<number>;
    createInvoice(createInvoiceInput: CreateInvoiceInput): Promise<Invoice>;
    updateInvoice(id: number, updateInvoiceInput: UpdateInvoiceInput): Promise<Invoice | null>;
    deleteInvoice(id: number): Promise<boolean>;
}
