import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: { name: "Test" } });
  // const user = await prisma.user.update(data: {where:""})
  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
