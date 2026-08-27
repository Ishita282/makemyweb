-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Review_approved_idx" ON "Review"("approved");
