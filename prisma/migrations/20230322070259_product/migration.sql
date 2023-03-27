/*
  Warnings:

  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - Added the required column `name` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;
