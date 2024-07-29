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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(createUserInput) {
        const { email, password, name } = createUserInput;
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already in use');
        }
        const user = await this.prisma.user.create({
            data: { email, password, name },
        });
        return this.mapToUserResponse(user);
    }
    async getUserById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.mapToUserResponse(user);
    }
    async updateUser(updateUserInput) {
        const { id, ...updateData } = updateUserInput;
        const user = await this.prisma.user.update({
            where: { id },
            data: updateData,
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.mapToUserResponse(user);
    }
    async deleteUser(id) {
        const user = await this.prisma.user.delete({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
    }
    mapToUserResponse(user) {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map