/*
  Warnings:

  - You are about to drop the column `posicaoXTerreno` on the `Agricultor` table. All the data in the column will be lost.
  - You are about to drop the column `posicaoYTerreno` on the `Agricultor` table. All the data in the column will be lost.
  - Added the required column `localizacao` to the `Agricultor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- AlterTable
ALTER TABLE "Agricultor" DROP COLUMN "posicaoXTerreno",
DROP COLUMN "posicaoYTerreno",
ADD COLUMN     "localizacao" geography(Point, 4326) NOT NULL;
