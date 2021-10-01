import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(): Promise<import(".prisma/client").Post[]>;
    getPublishedPosts(): Promise<import(".prisma/client").Post[]>;
    findOne(id: string): Promise<import(".prisma/client").Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import(".prisma/client").Post>;
    publishPost(id: string): Promise<import(".prisma/client").Post>;
    remove(id: string): Promise<import(".prisma/client").Post>;
}
