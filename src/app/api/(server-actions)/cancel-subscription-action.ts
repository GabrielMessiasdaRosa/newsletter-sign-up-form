"use server";

import prisma from "../_db/prisma";

export async function cancelSubcriptionAction(email: string) {
  const reader = await prisma.reader.findFirst({
    where: {
      email,
    },
  });

  if (reader) {
    const res = await prisma.newsletterSubscription.update({
      where: {
        id: process.env.NEWSLETTER_ID!,
      },
      data: {
        reader: {
          disconnect: {
            email,
          },
        },
      },
    });
    await prisma.reader.delete({
      where: {
        email,
      },
    });
    return res;
  } else {
    return undefined;
  }
}
