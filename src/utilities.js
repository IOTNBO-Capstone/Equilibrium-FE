import { gql, useQuery } from '@apollo/client'

const GET_ALL_THERAPISTS = gql`
    query {
        therapists {
            id
            name
            address
            phoneNumber
            imageURL
            labels
            practices {
                name
            }
        }
    }
`

export const useUsers = () => {
    const { data, error, loading } = useQuery(GET_ALL_THERAPISTS)

    return { data, error, loading }
}