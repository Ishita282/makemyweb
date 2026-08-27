/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Testimonial` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Testimonial_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Testimonial_userId_key" ON "Testimonial"("userId");
