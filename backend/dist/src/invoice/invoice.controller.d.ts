import { InvoiceService } from './invoice.service';
import { Invoice } from '@prisma/client';
export declare class InvoiceController {
    private invoiceService;
    constructor(invoiceService: InvoiceService);
    invoices(page: number, pageSize: number): Promise<Invoice[]>;
    getInvoiceById(id: number): Promise<{
        id: number;
        vendor_name: string;
        amount: number;
        due_date: Date;
        description: string | null;
        user_id: number | null;
        paid: boolean;
    }>;
    getTotalAmount(due_date: string): Promise<number>;
}
