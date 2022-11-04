import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({ data: { name: "Test" } });
  // const user = await prisma.user.update(data: {where:""})
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Megg",
  //       email: "mero@dsclable.co.kr",
  //       age: 32,
  //     },
  //     {
  //       name: "Mero",
  //       email: "meroo@dsclable.co.kr",
  //       age: 32,
  //     },
  //   ],
  // });

  // const user02 = await prisma.user.findUnique({
  //   where: {
  //     email: "mero@dsclable.co.kr",
  //   },
  // });

  // const user = await prisma.user.findUnique({
  //   where: {
  //     age_name: {
  //       age: 3,
  //       name: "Megg",
  //     },
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "Mero",
  //   },
  //   orderBy: {
  //     age: "asc"
  //   },
  //   take: 2, // pagination
  //   skip: 1, // 첫 n개 빼고 보여주기
  // });
  const num = 10;

  const user02 = await prisma.user.update({
    where: {
      email: "mero@dsclabel.co.kr",
    },
    data: {
      age: {
        increment: num,
      },
    },
  });
  const user01 = await prisma.user.findMany();
  console.log(user01);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
