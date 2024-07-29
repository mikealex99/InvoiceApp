import { PrismaService } from '../prisma/prisma.service';
import { Invoice } from '@prisma/client';
import { CreateInvoiceInput, UpdateInvoiceInput } from './dto/invoice.input';
export declare class InvoiceService {
    private prisma;
    constructor(prisma: PrismaService);
    getInvoices(page: number, pageSize: number): Promise<Invoice[]>;
    getInvoiceById(id: number): Promise<Invoice | null>;
    createInvoice(createInvoiceInput: CreateInvoiceInput): Promise<Invoice>;
    updateInvoice(id: number, updateInvoiceInput: UpdateInvoiceInput): Promise<Invoice | null>;
    deleteInvoice(id: number): Promise<boolean>;
    getTotalAmountByDueDate(due_date: Date): Promise<number>;
}
