/*
  Warnings:

  - Made the column `review` on table `avaliations` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `bio` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avaliations" ALTER COLUMN "review" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT NOT NULL;
