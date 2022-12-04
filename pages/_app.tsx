import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../shared/context/app/AppContext";
import Head from "next/head";
import Layout from "../shared/components/layout/Layout";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="../public/favicon.ico" />
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
			<Layout>
				<div className={roboto.className}>
					<Component {...pageProps} />
				</div>
			</Layout>
		</AppContextProvider>
	);
}
