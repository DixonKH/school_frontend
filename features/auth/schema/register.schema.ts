import { authRole } from '@/shared/types/enum';
import {z} from 'zod';

export const registerSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.nativeEnum(authRole),
})

export type RegisterSchema = z.infer<typeof registerSchema>;