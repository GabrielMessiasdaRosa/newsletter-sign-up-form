-- CreateTable
CREATE TABLE "Reader" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "newsletterSubscriptionId" TEXT NOT NULL,

    CONSTRAINT "Reader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsletterSubscription" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "NewsletterSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reader_id_key" ON "Reader"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_email_key" ON "Reader"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscription_id_key" ON "NewsletterSubscription"("id");

-- AddForeignKey
ALTER TABLE "Reader" ADD CONSTRAINT "Reader_newsletterSubscriptionId_fkey" FOREIGN KEY ("newsletterSubscriptionId") REFERENCES "NewsletterSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
