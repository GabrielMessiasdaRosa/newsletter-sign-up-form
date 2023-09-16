"use client";

import { cancelSubcriptionAction } from "@/app/api/(server-actions)/cancel-subscription-action";
import { unsubscribeStore } from "@/store/unsubscribe-store";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Button from "./button";
import Card from "./card";
import LoadingIcon from "./loading-icon";
import UnsubscribeSuccessCard from "./unsubscribe-success-card";

export interface UnsubscribeCardProps {}

export default function UnsubscribeCard({}: UnsubscribeCardProps) {
  const searchParams = useSearchParams();
  const { status, updateStatus } = unsubscribeStore();
  const email = searchParams.get("email");

  return (
    <>
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ display: "none", opacity: 0, y: 100 }}
            animate={{ display: "flex", opacity: 1, y: 0 }}
            exit={{ display: "none" }}
          >
            <UnsubscribeSuccessCard />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {status !== "success" && (
          <motion.div
            initial={{ display: "none", opacity: 0, y: 100 }}
            animate={{ display: "flex", opacity: 1, y: 0 }}
            exit={{ display: "none" }}
          >
            <Card
              size="lg"
              className="text-darkSlateGrey items-center justify-center p-8"
            >
              <div className="flex flex-col justify-center gap-y-4">
                <h1 className="text-4xl font-bold">Unsubscribe?</h1>
                <p className="text-darkSlateGrey text-sm">
                  Are you sure you want to unsubscribe?
                </p>
                <p>
                  <span className="font-bold">Email:</span> {email}
                </p>
                <p className="text-darkSlateGrey text-sm">
                  You will no longer receive any emails from us.
                </p>
                <Button
                  className="bg-rose-500 hover:bg-rose-600 transition-all duration-300"
                  onClick={async () => {
                    updateStatus("pending");
                    const res = await cancelSubcriptionAction(email!);
                    if (!res) {
                      updateStatus("error");
                      toast.error("You are not subscribed!");
                      return;
                    }
                    updateStatus("success");
                  }}
                >
                  {" "}
                  {status === "pending" ? (
                    <LoadingIcon className="w-5 h-5" />
                  ) : (
                    "Unsubscribe"
                  )}
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster />
    </>
  );
}
