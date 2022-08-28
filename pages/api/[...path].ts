import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	return new Promise((resolve) => {
		// convert cookies to header authorization
		const cookies = new Cookies(req, res);
		const accessToken = cookies.get('access_token');
		if (accessToken) {
			req.headers.Authorization = `Bearer ${accessToken}`;
		}

		// don't send cookies to API server
		req.headers.cookie = '';

		proxy.web(req, res, {
			target: `${process.env.API_URL}`,
			changeOrigin: true,
			selfHandleResponse: false,
		});

		proxy.once('proxyRes', () => resolve(true));
	});
}
