-- DropForeignKey
ALTER TABLE "Reader" DROP CONSTRAINT "Reader_newsletterSubscriptionId_fkey";

-- DropIndex
DROP INDEX "Reader_email_key";

-- DropIndex
DROP INDEX "Reader_id_key";

-- AddForeignKey
ALTER TABLE "Reader" ADD CONSTRAINT "Reader_newsletterSubscriptionId_fkey" FOREIGN KEY ("newsletterSubscriptionId") REFERENCES "NewsletterSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
