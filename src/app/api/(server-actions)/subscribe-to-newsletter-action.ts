"use server";

import prisma from "../_db/prisma";

export async function subscribeToNewsletterAction(email: string) {
  const res = await prisma.newsletterSubscription.update({
    where: {
      id: process.env.NEWSLETTER_ID!,
    },
    include: {
      reader: true,
    },
    data: {
      reader: {
        connectOrCreate: {
          create: {
            email,
          },
          where: {
            email,
          },
        },
      },
    },
  });
  return res;
}
