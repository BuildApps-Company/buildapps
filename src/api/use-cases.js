import axios from 'axios';
import { graphql } from 'gatsby';

const API_KEY = process.env.GATSBY_API_KEY;
const API_URL = process.env.GATSBY_API_URL;

export const sendRequestToAPI = (query, variables) => {
	// console.log(data);
	return axios({
		url: 'http://localhost:1337/graphql',
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer df5811934307423a19ba5006682dc50e928d6a5a11aa1dc9aaedaaab35de43c2a6cb44d2de008c3ea3553981efb3e37b234dfc84726f99040d6075bb4d4a54308c5e2088e46f7d26211246589e78205a9f721417557104af7137b87be4253552490911c916efd327018d9f39edd1bc8c1cc50c6217963e55bf5d843e82a87e5b`,
		},
		data: JSON.stringify({
			query,
			variables: variables,
		}),
	});
};
