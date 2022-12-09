import { gql, useQuery } from '@apollo/client';

const GET_ALL_THERAPISTS = gql`
    query {
        therapists {
            id
            address
            phoneNumber
            name
            labels
            imageUrl
            bio
            practice {
                id
                name
                websiteUrl
            }
        }
    }
`;

export const useTherapists = () => {
    const { data, error, loading } = useQuery(GET_ALL_THERAPISTS);

    return { data, error, loading };
};