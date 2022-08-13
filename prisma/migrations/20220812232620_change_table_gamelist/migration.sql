/*
  Warnings:

  - You are about to drop the column `gamelist` on the `avaliations` table. All the data in the column will be lost.
  - You are about to drop the column `isPlayed` on the `avaliations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "avaliations" DROP COLUMN "gamelist",
DROP COLUMN "isPlayed";

-- AlterTable
ALTER TABLE "gamelist" ADD COLUMN     "gamelist" BOOLEAN;
