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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const invoice_service_1 = require("./invoice.service");
const invoice_input_1 = require("./dto/invoice.input");
const invoice_dto_1 = require("./dto/invoice.dto");
let InvoiceResolver = class InvoiceResolver {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    async invoices(page, pageSize) {
        return this.invoiceService.getInvoices(page, pageSize);
    }
    async invoice(id) {
        return this.invoiceService.getInvoiceById(id);
    }
    async totalAmountByDueDate(due_date) {
        return this.invoiceService.getTotalAmountByDueDate(new Date(due_date));
    }
    async createInvoice(createInvoiceInput) {
        return this.invoiceService.createInvoice(createInvoiceInput);
    }
    async updateInvoice(id, updateInvoiceInput) {
        return this.invoiceService.updateInvoice(id, updateInvoiceInput);
    }
    async deleteInvoice(id) {
        return this.invoiceService.deleteInvoice(id);
    }
};
exports.InvoiceResolver = InvoiceResolver;
__decorate([
    (0, graphql_1.Query)(() => [invoice_dto_1.InvoiceType]),
    __param(0, (0, graphql_1.Args)('page', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('pageSize', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "invoices", null);
__decorate([
    (0, graphql_1.Query)(() => invoice_dto_1.InvoiceType, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "invoice", null);
__decorate([
    (0, graphql_1.Query)(() => Number),
    __param(0, (0, graphql_1.Args)('due_date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "totalAmountByDueDate", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_dto_1.InvoiceType),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invoice_input_1.CreateInvoiceInput]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "createInvoice", null);
__decorate([
    (0, graphql_1.Mutation)(() => invoice_dto_1.InvoiceType, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, invoice_input_1.UpdateInvoiceInput]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "updateInvoice", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoiceResolver.prototype, "deleteInvoice", null);
exports.InvoiceResolver = InvoiceResolver = __decorate([
    (0, graphql_1.Resolver)(() => invoice_dto_1.InvoiceType),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceResolver);
//# sourceMappingURL=invoice.resolver.js.map