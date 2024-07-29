export declare class CreateInvoiceInput {
    vendor_name: string;
    amount: number;
    due_date: Date;
    description?: string;
    user_id?: number;
    paid: boolean;
}
export declare class UpdateInvoiceInput {
    vendor_name?: string;
    amount?: number;
    due_date?: Date;
    description?: string;
    user_id?: number;
    paid?: boolean;
}
