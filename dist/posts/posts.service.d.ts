import { PrismaService } from '../prisma/prisma.service';
import { Post } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): Promise<Post | null>;
    findAll(): Promise<Post[]>;
    getPublishedPosts(): Promise<Post[]>;
    create(dto: CreatePostDto): Promise<Post>;
    update(id: number, dto: UpdatePostDto): Promise<Post>;
    remove(id: number): Promise<Post>;
}
