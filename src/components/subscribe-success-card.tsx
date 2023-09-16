"use client";

import { newsletterFormStore } from "@/store/newsletter-form-store";
import Button from "./button";
import Card from "./card";
import IconSuccess from "./icon-success";

export interface SuccessCardProps {}

export default function SuccessCard({}: SuccessCardProps) {
  const { updateStatus, data } = newsletterFormStore();
  console.log(data);
  return (
    <Card size="fit" className="text-darkSlateGrey">
      <div className="flex flex-col gap-5 p-16 max-w-lg">
        <IconSuccess />
        <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
        <p className="text-darkSlateGrey text-sm">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{data as string}</span>. Please follow the
          instructions in the email to complete your subscription.
        </p>
        <Button
          onClick={() => {
            updateStatus("idle");
          }}
        >
          Dismiss message
        </Button>
      </div>
    </Card>
  );
}
