"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const ModeContext = createContext(undefined);

export const ModeProvider = ({ children }) => {
	const [mode, setMode] = useState("dark");

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		const savedMode = localStorage.getItem("mode");
		if (savedMode) {
			setMode(savedMode);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("mode", mode);
	}, [mode]);

	return (
		<ModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ModeContext.Provider>
	);
};

export const useMode = () => {
	const context = useContext(ModeContext);
	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}
	return context;
};
