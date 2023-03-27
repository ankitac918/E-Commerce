-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
