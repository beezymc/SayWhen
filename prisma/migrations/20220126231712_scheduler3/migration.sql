/*
  Warnings:

  - You are about to drop the column `time` on the `Activity` table. All the data in the column will be lost.
  - Added the required column `from` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "time",
ADD COLUMN     "from" INTEGER NOT NULL,
ADD COLUMN     "to" INTEGER NOT NULL;
