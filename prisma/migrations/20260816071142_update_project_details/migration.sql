/*
  Warnings:

  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "name",
ADD COLUMN     "budget" TEXT,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "service" TEXT NOT NULL,
ADD COLUMN     "timeline" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
