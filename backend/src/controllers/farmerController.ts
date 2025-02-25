import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createFarmer = async (req: Request, res: Response) => {
    try {
        const { nome, email, telefone, tamanhoTerreno, posicaoXTerreno, posicaoYTerreno } = req.body;
        if (nome && email && telefone && tamanhoTerreno && posicaoXTerreno && posicaoYTerreno) {
            const farmer = await prisma.agricultor.create({
                data: {
                    nome,
                    email,
                    telefone,
                    tamanhoTerreno,
                    localizacao: {
                        type: "Point",
                        coordinates: [
                            parseFloat(posicaoYTerreno),     // A ordem é invertida pois a geolocalização usa a ordem (longitude, latitude) ao invés de (latitude, longitude)
                            parseFloat(posicaoXTerreno),  
                        ]
                    },
                },
            })
            res.status(201).json({ "message": "Agricultor criado com sucesso!" });
            return;
        } else {
            res.status(400).json({ "message": "Todos os campos devem ser preenchidos!" });
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
}

export const getAllFarmers = async (req: Request, res: Response) => {
    try {
        const farmers = await prisma.agricultor.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                tamanhoTerreno: true,
                localizacao: true,
            },
        });

        if (farmers.length > 0) {
            res.status(200).json(farmers);
            return;
        }

        res.status(404).json({ "message": "Nenhum agricultor encontrado!" });
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
        return;
    }
};

import { ObjectId } from "mongodb";

export const getFarmerById = async (req: Request, res: Response) => {
    try {
        const farmerId = req.params.id;

        // Verifica se o ID é um ObjectId válido antes da consulta
        if (!ObjectId.isValid(farmerId)) {
            res.status(400).json({ error: "ID inválido" });
            return;
        }

        const farmer = await prisma.agricultor.findUnique({
            where: {
                id: farmerId
            },
        });

        if (farmer) {
            res.status(200).json(farmer);
            return;
        }

        res.status(404).json({ message: "Nenhum agricultor encontrado!" });
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
        return;
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