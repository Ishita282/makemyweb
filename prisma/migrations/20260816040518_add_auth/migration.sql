/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_userId_idx";

-- DropIndex
DROP INDEX "Session_userId_idx";

-- DropIndex
DROP INDEX "User_email_idx";

-- DropIndex
DROP INDEX "User_phone_idx";

-- DropIndex
DROP INDEX "User_phone_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "expires_at" INTEGER,
ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "phone",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
