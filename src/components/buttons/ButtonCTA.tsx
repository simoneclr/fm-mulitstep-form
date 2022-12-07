import { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function ButtonCTA({children, className, ...nativeProps}: Props) {
	return (
		<button className="px-4 py-2 text-white bg-purplish-blue hover:opacity-90 rounded" {...nativeProps}>
			{children}
		</button>
	)
}

export default ButtonCTA
