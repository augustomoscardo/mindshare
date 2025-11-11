import { prismaClient } from "../../prisma/prisma";
import { CreateIdeaInput, type UpdateIdeaInput } from "../dtos/input/idea.input";

export class IdeaService {
  async createIdea(data: CreateIdeaInput, authorId: string) {
    return prismaClient.idea.create({
      data: {
        title: data.title,
        description: data.description,
        authorId: authorId
      }
    })
  }

  async updateIdea(id: string, data: UpdateIdeaInput) {

    const idea = await prismaClient.idea.findUnique({
      where: { id }
    })

    if (!idea) throw new Error("Ideia não encontrada");

    return prismaClient.idea.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description
      }
    })
  }
}