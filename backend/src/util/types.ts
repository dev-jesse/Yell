import { Session } from 'next-auth';
import { PrismaClient } from '@prisma/client';

export interface GraphQLContext {
    session: Session | any  // should be null but not working
    prisma: PrismaClient
    // pubsub
}