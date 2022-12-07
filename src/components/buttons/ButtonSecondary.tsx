import { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

function ButtonSecondary({children, className, ...nativeProps}: Props) {
	return (
		<button className="text-cool-gray font-medium hover:text-marine-blue" {...nativeProps}>
			{children}
		</button>
	)
}

export default ButtonSecondary
