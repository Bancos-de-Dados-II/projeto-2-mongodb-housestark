-- CreateTable
CREATE TABLE "Agricultor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "tamanhoTerreno" TEXT NOT NULL,
    "posicaoXTerreno" TEXT NOT NULL,
    "posicaoYTerreno" TEXT NOT NULL,

    CONSTRAINT "Agricultor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agricultor_email_key" ON "Agricultor"("email");
