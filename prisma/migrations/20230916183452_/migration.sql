/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Reader` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reader_id_key" ON "Reader"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reader_email_key" ON "Reader"("email");
