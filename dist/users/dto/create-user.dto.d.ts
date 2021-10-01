import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    name?: string;
    email: string;
}
