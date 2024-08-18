"use client";
import React, { useEffect, useState } from "react";
import { useMode } from "@/context/ModeContext";

function handleTheme(mode) {
	const body = document.querySelector("body");

	if (mode === "dark") {
		body?.classList.add("dark");
	} else {
		body?.classList.remove("dark");
	}
}

function ModeSwitch() {
	const { toggleMode,mode } = useMode();

	useEffect(() => {
		handleTheme(mode);
  }, [mode]);
  
	return (
		<div>
			<div className="mode-switcher" onClick={toggleMode}>
				<img
					className="w-[18px] fa-icon"
					src={mode === "dark" ? "/icons/moon-solid.svg" : "/icons/sun-solid.svg"}
					alt=""
				/>
			</div>
		</div>
	);
}

export default ModeSwitch;
