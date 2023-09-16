import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oh no!",
};

export default function RemoveSubscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
