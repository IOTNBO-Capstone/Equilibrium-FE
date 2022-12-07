import { gql, useQuery } from '@apollo/client'

const GET_ALL_THERAPISTS = gql`
    query {
        therapists {
            id
            name
            labels
            imageURL
            practices {
                name
            }
        }
    }
`
// address
// phoneNumber

export const useTherapists = () => {
    const { data, error, loading } = useQuery(GET_ALL_THERAPISTS)

    return { data, error, loading }
}