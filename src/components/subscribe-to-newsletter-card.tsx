"use client";

import { newsletterFormStore } from "@/store/newsletter-form-store";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./card";
import IconList from "./icon-list";
import Illustrations from "./illustrations";
import NewsletterForm from "./newsletter-form";
import SuccessCard from "./subscribe-success-card";

export interface SubscribeToNewsletterCardProps {}

export default function SubscribeToNewsletterCard({}: SubscribeToNewsletterCardProps) {
  const { status } = newsletterFormStore();
  return (
    <>
      <AnimatePresence>
        {status !== "success" && (
          <motion.div
            initial={{ display: "none", opacity: 0, y: 100 }}
            animate={{ display: "flex", opacity: 1, y: 0 }}
            exit={{ display: "none" }}
          >
            <Card className="w-screen flex-col-reverse md:flex-row h-screen text-darkSlateGrey  sm:w-[950px] md:p-6 justify-between md:h-[660px] rounded-none md:rounded-[38px]">
              <div className="md:w-1/2 w-80 h-full md:px-8 py-6 flex flex-col gap-y-4 md:gap-y-8 justify-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Stay updated!
                </h1>
                <p>
                  Join 60,000 + product managers receiving monthly updates on:
                </p>
                <ul className="font-normal flex flex-col gap-1 md:gap-2">
                  {updatesList.map((update) => {
                    return (
                      <li key={update.id} className="flex gap-4">
                        <IconList />
                        <span>{update.title}</span>
                      </li>
                    );
                  })}
                </ul>
                <NewsletterForm />
              </div>
              <div className="bg-tomato  rounded-2xl">
                <Illustrations />
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{
              display: "none",
              opacity: 0,
              y: 100,
            }}
            animate={{
              display: "flex",
              opacity: 1,
              y: 0,
            }}
            exit={{ display: "none" }}
          >
            <SuccessCard />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
const updatesList = [
  {
    id: 1,
    title: "Product discovery and building what metters",
  },
  {
    id: 2,
    title: "Measuring to ensure updates are a success",
  },
  {
    id: 3,
    title: "And much more!",
  },
];
