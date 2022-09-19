import axios from 'axios';
import { graphql } from 'gatsby';

const API_KEY = process.env.GATSBY_API_KEY;
const API_URL = process.env.GATSBY_API_URL;

export const sendRequestToAPI = (query, variables) => {
	return axios({
		url: 'http://localhost:1337/graphql',
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.GATSBY_API_KEY}`,
		},
		data: JSON.stringify({
			query,
			variables: variables,
		}),
	});
};
