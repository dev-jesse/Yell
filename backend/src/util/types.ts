import { ISODateString } from 'next-auth';
import { PrismaClient } from '@prisma/client';

export interface GraphQLContext {
    session: Session | null // should be null but not working
    prisma: PrismaClient
    // pubsub
}

export interface Session {
    user: User
    expires: ISODateString
}

export interface User {
    id: string
    username: string
    email: string
    emailVerified: boolean
    image: string
    name: string
}

export interface CreateUsernameResponse {
    success?: boolean
    error?: string
}