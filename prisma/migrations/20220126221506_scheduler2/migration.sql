/*
  Warnings:

  - Added the required column `activity_description` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Availability_username_key";

-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "activity_description" TEXT NOT NULL;
