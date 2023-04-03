/*
  Warnings:

  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "token" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "locationType" TEXT,
ADD COLUMN     "userId" TEXT,
ADD COLUMN     "zipCode" TEXT,
ALTER COLUMN "productId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "address",
DROP COLUMN "city";
