"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import Card from "./card";

export interface UnsubscribeSuccessCardProps {}

export default function UnsubscribeSuccessCard({}: UnsubscribeSuccessCardProps) {
  const router = useRouter();
  return (
    <Card size="fit" className="text-darkSlateGrey">
      <div className="flex flex-col gap-5 p-16 max-w-lg">
        <span className="w-full text-center text-7xl">&#128542;</span>{" "}
        <h1 className="text-4xl font-bold">Sorry to see you go!</h1>
        <p className="text-darkSlateGrey text-sm">
          You have been unsubscribed from our newsletter. Consider subscribing
          again in the future!
        </p>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Dismiss message
        </Button>
      </div>
    </Card>
  );
}
