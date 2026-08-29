-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "customization" JSONB,
ADD COLUMN     "customized" BOOLEAN NOT NULL DEFAULT false;
