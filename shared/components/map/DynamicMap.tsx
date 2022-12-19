import dynamic from "next/dynamic";
import React from "react";

const DynamicMap = dynamic(() => import("./Map").then((m) => m.InternalMap), { ssr: false });

export const Map = () => {
	return <DynamicMap></DynamicMap>;
};
