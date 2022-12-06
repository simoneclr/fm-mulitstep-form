import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function FormStep({children}: Props) {
	return (
		<div className="bg-white p-8">
			{children}
		</div>
	)
}

export default FormStep
