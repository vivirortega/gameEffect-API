/*
  Warnings:

  - Made the column `gamelist` on table `gamelist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "gamelist" ALTER COLUMN "gamelist" SET NOT NULL;
