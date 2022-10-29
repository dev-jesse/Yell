import { Session } from 'next-auth';
import { signIn } from 'next-auth/react'
import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserOperations from '../../graphql/operations/user'

interface IAuthProps {
    session: Session | null
    reloadSession: () => void
}

const Auth: React.FunctionComponent<IAuthProps> = ({
    session,
    reloadSession
}) => {
    const [username, setUsername] = useState('')

    const [createUsername, { data, loading, error }] = useMutation(
        UserOperations.Mutations.createUsername
    )

    const onSubmit = async () => {
        try {
            await createUsername({ variables: { username } })
        } catch (error) {
            console.log("onSubmit error", error)
        }
    }

    return (
        <Center height='100vh' border='1px solid red'>
            <Stack spacing={8} align='center'>
                {session ? (
                    <>
                        <Text fontSize='3xl'>Create a username</Text>
                        <Input
                            placeholder='Enter a Username'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <Button width='100%' onClick={onSubmit}>Save</Button>
                    </>
                ) : (
                    <>
                        <Text fontSize='3xl'>Yell</Text>
                        <Button onClick={() => signIn('google')} leftIcon={<Image height='20px' src='/images/googlelogo.png' />}>
                            Continue with Google
                        </Button>
                    </>
                )
                }
            </Stack >
        </Center >
    )
};

export default Auth;
