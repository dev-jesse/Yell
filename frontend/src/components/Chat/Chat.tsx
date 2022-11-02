import { Flex } from '@chakra-ui/react'
import { Session } from 'next-auth'
import ConversationsWrapper from './Conversations/ConversationsWrapper'
import FeedWrapper from './Feed/FeedWrapper'


interface ChatProps {
    session: Session
}

const Chat: React.FC<ChatProps> = ({ session }) => {
    return (
        <div>
            <Flex height='100vh'>
                <ConversationsWrapper session={session} />
                <FeedWrapper session={session} />
            </Flex>
        </div>
    )
}

export default Chat
