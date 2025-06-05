/*
  Warnings:

  - Added the required column `client` to the `Portofolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Portofolio" ADD COLUMN     "client" TEXT NOT NULL;
