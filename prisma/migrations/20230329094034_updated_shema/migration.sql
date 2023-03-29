/*
  Warnings:

  - You are about to drop the column `first_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `hash_pass` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `hashPassword` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "first_name",
DROP COLUMN "hash_pass",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "hashPassword" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT;
