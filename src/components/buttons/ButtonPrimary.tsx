import { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function ButtonPrimary({children, className, ...nativeProps}: Props) {
	return (
		<button className="px-4 py-2 text-white bg-marine-blue hover:opacity-90 rounded" {...nativeProps}>
			{children}
		</button>
	)
}

export default ButtonPrimary
