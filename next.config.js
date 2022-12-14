/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		// The locales you want to support in your app
		locales: ["en", "pl"],
		// The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
		defaultLocale: "pl",
		localeDetection: true,
	},
};

module.exports = nextConfig;
