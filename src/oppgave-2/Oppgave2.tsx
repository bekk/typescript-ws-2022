
import { Input } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Hvem = () =>{
    return (
        <div>
            <Heading as="h2">Hvem er du?</Heading>
            <Text>Hva heter du?</Text>
            <Input/>
        </div>
    )
}

export default Hvem;