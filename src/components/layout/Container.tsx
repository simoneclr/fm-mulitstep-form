import React, { ReactNode } from "react"

interface Props {
	children: ReactNode;
}

function Container({children}: Props) {
	return (
		<div className="max-w-[1440px] mx-auto px-4">
			{children}
		</div>
	)
}

export default Container
