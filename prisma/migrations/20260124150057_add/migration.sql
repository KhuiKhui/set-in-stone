/*
  Warnings:

  - Added the required column `index` to the `Spreadsheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spreadsheet" ADD COLUMN     "index" INTEGER NOT NULL;
