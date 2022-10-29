import { Session } from 'next-auth';

export interface GraphQLContext {
    session: Session | any  // should be null but not working
    // prisma
    // pubsub
}