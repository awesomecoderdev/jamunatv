/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: [
			"jamuna.tv",
			"www.jamuna.tv",
			"localhost",
			"secure.gravatar.com",
		],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
