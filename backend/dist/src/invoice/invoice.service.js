"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InvoiceService = class InvoiceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getInvoices(page, pageSize) {
        const skip = (page - 1) * pageSize;
        return this.prisma.invoice.findMany({
            skip,
            take: pageSize,
        });
    }
    async getInvoiceById(id) {
        return this.prisma.invoice.findUnique({
            where: { id },
        });
    }
    async createInvoice(createInvoiceInput) {
        return this.prisma.invoice.create({
            data: createInvoiceInput,
        });
    }
    async updateInvoice(id, updateInvoiceInput) {
        return this.prisma.invoice.update({
            where: { id },
            data: updateInvoiceInput,
        });
    }
    async deleteInvoice(id) {
        try {
            await this.prisma.invoice.delete({
                where: { id },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async getTotalAmountByDueDate(due_date) {
        const invoices = await this.prisma.invoice.findMany({
            where: { due_date: due_date },
        });
        return invoices.reduce((total, invoice) => total + invoice.amount, 0);
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InvoiceService);
//# sourceMappingURL=invoice.service.js.map