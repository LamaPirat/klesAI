// @ts-nocheck
import axios from 'axios';
import { API_KEY } from '$env/static/private';

export async function post(req) {
	const { prompt } = req.body;
	try {
		const response = await axios.post(
			'https://api.openai.com/v1/images/generations',
			{
				prompt,
				n: 1,
				size: '1024x1024'
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${API_KEY}`
				}
			}
		);
		const image_url = response.data.data[0].url;
		return { body: { image_url } };
	} catch (error) {
		console.log(error.response.data);
		return { status: 500, body: { error: 'An error occurred' } };
	}
}
