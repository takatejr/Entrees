import React, { memo, SetStateAction, useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

export type AsideProps = {};

const NAVIGATION_TABS = [
	{
		title: "Home",
		icon: "home",
		link: "/home",
		children: [
			{
				title: "Home1",
				link: "/",
			},
			{
				title: "Home2",
				link: "/",
			},
			{
				title: "Home3",
				link: "/",
			},
		],
	},
	{
		title: "Login",
		link: "/login",
		icon: "login",
		children: [
			{
				title: "login1",
				link: "/login",
			},
			{
				title: "login2",
				link: "/login",
			},
		],
	},
];

export const Nav = memo<AsideProps>(() => {
	const [activeTab, setActiveTab] = useState<SetStateAction<number>>(0);
	const router = useRouter();

	useEffect(() => {
		handleChangeUrl();
	}, [router.asPath]);

	const handleChangeUrl = (): void => {
		NAVIGATION_TABS.forEach(({ link }, index) => {
			if (router.asPath.toLowerCase().includes(link.toLowerCase())) {
				setActiveTab(index);
			}
		});
	};

	const handleTabChange = (index: number): void => {
		setActiveTab(index);
	};

	return (
		<nav className={styles.aside}>
			<figure className="pt-10 pl-10">obrazek</figure>
			<ul className=""></ul>
		</nav>
	);
});

Nav.displayName = "Nav";

export default Nav;
