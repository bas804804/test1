import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsApiHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '319294e754msh946ea5bfbe88be3p1b0337jsne169a2a19c73'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) =>({ url, headers: newsApiHeader })

export const cryptoNewsApi = createApi ({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})



export const { useGetCryptoNewsQuery } = cryptoNewsApi;

