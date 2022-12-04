import React, { memo, ReactNode, useEffect, useState } from "react";
import styles from "./Layout.module.scss";
import clsx from "clsx";
import Header from "./header/Header";
import Nav from "./aside/Nav";
import { useAppContext } from "../../context/app/AppContext";

export type LayoutProps = {
	children: ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
	const {
		utils: { theme },
	} = useAppContext();
	const [isContextMenu, toggleContextMenu] = useState<boolean>(false);
	const [listeners, setListeners] = useState(null);

	const [session, setSession] = useState(null);

	return (
		<main className={clsx(styles.main, theme)}>
			<Header />
			<div className="h-full">{children}</div>
		</main>
	);
});

Layout.displayName = "Layout";

export default Layout;
