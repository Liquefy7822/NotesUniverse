/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Note } from "@prisma/client";

export class NoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NoteCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteCountArgs>
  ): Promise<number> {
    return this.prisma.note.count(args);
  }

  async findMany<T extends Prisma.NoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteFindManyArgs>
  ): Promise<Note[]> {
    return this.prisma.note.findMany(args);
  }
  async findOne<T extends Prisma.NoteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteFindUniqueArgs>
  ): Promise<Note | null> {
    return this.prisma.note.findUnique(args);
  }
  async create<T extends Prisma.NoteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteCreateArgs>
  ): Promise<Note> {
    return this.prisma.note.create<T>(args);
  }
  async update<T extends Prisma.NoteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteUpdateArgs>
  ): Promise<Note> {
    return this.prisma.note.update<T>(args);
  }
  async delete<T extends Prisma.NoteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NoteDeleteArgs>
  ): Promise<Note> {
    return this.prisma.note.delete(args);
  }
}
