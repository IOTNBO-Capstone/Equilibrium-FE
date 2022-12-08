import { gql, useQuery } from '@apollo/client';

const GET_ALL_THERAPISTS = gql`
    query {
        therapists {
            id
            address
            phoneNumber
            name
            labels
            imageURL
            practices {
                name
            }
        }
    }
`;

// const GET_INDIVIDUAL_THERAPIST = gql`
//     query {
//         therapists {
//             id
//             address
//             phoneNumber
//             name
//             labels
//             imageURL
//             bio
//             practices {
//                 name
//                 websiteUrl
//             }
//         }
//     }
// `;

export const useTherapists = () => {
    const { data, error, loading } = useQuery(GET_ALL_THERAPISTS);

    return { data, error, loading };
};


// export const useIndividual = () => {
//     const { data, error, loading } = useQuery(GET_INDIVIDUAL_THERAPIST);

//     return { data, error, loading };
// };