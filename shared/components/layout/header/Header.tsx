import Link from "next/link";
import React, { memo } from "react";
import styles from "./Header.module.scss";

export type navbarItemProps = {
	title: string;
	link: string;
};

const NAVBAR_ITEMS: navbarItemProps[] = [
	{ link: "/", title: "Home" },
	{ link: "/find-entries", title: "Entries" },
	{ link: "/find-practice", title: "Practice" },
];

export const Header = memo(() => {
	return (
		<header className={styles.container}>
			<div className="text-3xl">Entrees</div>
			<nav className="w-4/5 text-xl">
				<ul className="w-full h-full flex flex-row gap-8 justify-end">
					{NAVBAR_ITEMS.map((item) => (
						<li key={item.title} className="mt-auto">
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
});

Header.displayName = "Header";

export default Header;
