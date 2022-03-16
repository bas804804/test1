import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '319294e754msh946ea5bfbe88be3p1b0337jsne169a2a19c73'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi ({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}`)
                
            }),

            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
              }),
          
        })


})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     headers: {
//         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//       }
// };
