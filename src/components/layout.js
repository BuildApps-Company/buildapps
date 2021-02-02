import React from 'react';
import { Footer } from "./footer";

export function Layout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}