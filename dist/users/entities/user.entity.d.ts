import { Prisma } from '.prisma/client';
export declare class User implements Prisma.UserUncheckedCreateInput {
    id?: number;
    name?: string;
    email: string;
}
