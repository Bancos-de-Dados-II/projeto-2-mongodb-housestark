import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createFarmer = async (req: Request, res: Response) => {
    try {
        const { nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno } = req.body;
        if (nome && email && telefone && tamanhoTerreno && posicaoXTerreno && posicaoYTerreno) {
            const farmer = await prisma.$executeRaw<Farmer[]>`
                INSERT INTO "Agricultor" ("nome", "email", "telefone", "tamanhoTerreno", "localizacao")
                VALUES (${nome}, ${email}, ${telefone}, ${tamanhoTerreno}, ST_SetSRID(ST_MakePoint(${posicaoXTerreno}, ${posicaoYTerreno}), 4326))
            `
            res.status(201).json({ "message": "Agricultor criado com sucesso!" });
        } else {
            res.status(400).json({ "message": "Todos os campos devem ser preenchidos!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAllFarmers = async (req: Request, res: Response) => {
    try {
        const farmers = await prisma.$queryRaw<Farmer[]>`
            SELECT 
                "id", 
                "nome", 
                "email", 
                "telefone", 
                "tamanhoTerreno", 
                ST_AsGeoJSON("localizacao") AS localizacao 
            FROM "Agricultor"
        `;

        if (farmers.length > 0) {
            const formattedFarmers = farmers.map((farmer: any) => ({
                ...farmer,
                localizacao: JSON.parse(farmer.localizacao),
            }));
            res.status(200).json(formattedFarmers);
        } else {
            res.status(404).json({ "message": "Nenhum agricultor encontrado!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getFarmerById = async (req: Request, res: Response) => {
    try {

        const farmerId = parseInt(req.params.id);

        const farmerObject = await prisma.$queryRaw<Farmer[]>`
            SELECT 
                "id", 
                "nome", 
                "email", 
                "telefone", 
                "tamanhoTerreno", 
                ST_AsGeoJSON("localizacao") AS localizacao 
            FROM "Agricultor"
            WHERE "id" = ${farmerId}
        `;

        const farmer = farmerObject[0];

        if (farmer) {
            const formattedFarmer = {
                ...farmer,
                localizacao: JSON.parse(farmer.localizacao), 
            };
            res.status(200).json(formattedFarmer);
        } else {
            res.status(404).json({ message: "Nenhum agricultor encontrado!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateFarmer = async (req: Request, res: Response) => {
    try {
        const { nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno } = req.body;

        if (!nome || !email || !telefone || !tamanhoTerreno || !posicaoXTerreno || !posicaoYTerreno) {
            res.status(400).json({ message: "Todos os campos devem ser preenchidos!" });
        }

        const x = parseFloat(posicaoXTerreno);
        const y = parseFloat(posicaoYTerreno);
        const id = parseInt(req.params.id);

        if (isNaN(x) || isNaN(y) || isNaN(id)) {
            res.status(400).json({ message: "As coordenadas e o ID devem ser números válidos!" });
        }

        const farmer = await prisma.$executeRaw<Farmer[]>`
            UPDATE "Agricultor"
            SET 
                "nome" = ${nome},
                "email" = ${email},
                "telefone" = ${telefone},
                "tamanhoTerreno" = ${tamanhoTerreno},
                "localizacao" = ST_SetSRID(ST_MakePoint(${x}, ${y}), 4326)
            WHERE "id" = ${id}
        `;

        if (farmer > 0) {
            res.status(200).json({ message: "Agricultor atualizado com sucesso!" });
        } else {
            res.status(404).json({ message: "Agricultor não encontrado!" });
        }
    } catch (error) {
        console.error("Erro ao atualizar agricultor:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const deleteFarmer = async (req: Request, res: Response) => {
    try {

        const farmer = await prisma.agricultor.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        if (farmer != null) {
            const farmer = await prisma.agricultor.delete({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.status(200).json({ "message": "Agricultor excluido com sucesso!" });
        } else {
            res.status(404).json({ "message": "Agricultor nao encontrado!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}