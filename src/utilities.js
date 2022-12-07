import { gql, useQuery } from '@apollo/client'

const GET_ALL_THERAPISTS = gql`
    query {
        therapists {
            id
            name
            labels
            practices {
                name
            }
        }
    }
`
// address
// phoneNumber
// imageURL

export const useTherapists = () => {
    const { data, error, loading } = useQuery(GET_ALL_THERAPISTS)

    return { data, error, loading }
}