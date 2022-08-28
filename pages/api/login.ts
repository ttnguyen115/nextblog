import Cookies from 'cookies';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'POST') {
		return res.status(404).json({ message: 'method not supported' });
	}

	return new Promise((resolve) => {
		// don't send cookies to API server
		req.headers.cookie = '';

		const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = '';
			proxyRes.on('data', (chunk) => {
				body += chunk;
			});
			proxyRes.on('end', () => {
				try {
					const { accessToken, expiredAt } = JSON.parse(body);

					// convert token to cookies
					const cookies = new Cookies(req, res, {
						secure: process.env.NODE_ENV !== 'development',
					});
					cookies.set('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiredAt),
					});

					(res as NextApiResponse)
						.status(200)
						.json({ message: 'Login successfully!' });
				} catch (error) {
					(res as NextApiResponse)
						.status(500)
						.json({ message: 'Something went wrong!' });
				}

				resolve(true);
			});
		};

		proxy.once('proxyRes', handleLoginResponse);
		proxy.web(req, res, {
			target: `${process.env.API_URL}`,
			changeOrigin: true,
			selfHandleResponse: true,
		});
	});
}
