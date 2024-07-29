import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'alexandrumihai47@yahoo.com',
      password: '123456',
      name: 'Alexandru Mihai',
    },
  });

  await prisma.invoice.createMany({
    data: [
      {
        vendor_name: 'Vendor John',
        amount: 112,
        due_date: new Date('2024-09-23'),
        description: 'Invoice 1 EXAMPLE',
        user_id: user.id,
        paid: false,
      },
      {
        vendor_name: 'Vendor Alex',
        amount: 230,
        due_date: new Date('2024-08-15'),
        description: 'Invoice 2 EXAMPLE',
        user_id: user.id,
        paid: true,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
