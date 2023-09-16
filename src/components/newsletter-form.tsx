"use client";

import { sendNewsletterConfirmationEmailAction } from "@/app/api/(server-actions)/send-newsletter-confirmation-email-action";
import { subscribeToNewsletterAction } from "@/app/api/(server-actions)/subscribe-to-newsletter-action";
import { newsletterFormStore } from "@/store/newsletter-form-store";
import NewsletterFormSchema from "@/zod/newsletter-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./button";
import EmailInput from "./email-input";
import LoadingIcon from "./loading-icon";

export interface NewsletterFormProps {}

export default function NewsletterForm({}: NewsletterFormProps) {
  const { setData, status, updateStatus } = newsletterFormStore();
  console.log(status);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof NewsletterFormSchema>) => {
    updateStatus("pending");
    const subscribeToNewsletter = await subscribeToNewsletterAction(data.email);
    const sendNewsletterConfirmationEmail =
      await sendNewsletterConfirmationEmailAction(data.email);
    console.log(sendNewsletterConfirmationEmail);
    console.log(subscribeToNewsletter);
    if (!Boolean(subscribeToNewsletter)) return updateStatus("error");
    if (!Boolean(sendNewsletterConfirmationEmail)) return updateStatus("error");
    setData(data.email);
    updateStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <EmailInput
        disabled={status === "pending"}
        register={register}
        registerTag="email"
        required
        errorMessage={errors.email?.message}
      />

      <Button disabled={status === "pending"} type="submit">
        {status === "pending" ? (
          <LoadingIcon className="w-5 h-5" />
        ) : (
          "Subscribe to monthly newsletter"
        )}
      </Button>
    </form>
  );
}
