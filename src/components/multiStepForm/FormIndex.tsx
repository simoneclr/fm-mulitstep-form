import { ReactNode } from "react"

interface FormIndexProps {
	children: ReactNode
}

function FormIndex({children}: FormIndexProps) {
	return (
		<ul className="flex items-center gap-4">
			{children}
		</ul>
	)
}

interface FormIndexItemProps {
	index: number;
	active: boolean;
}

FormIndex.Item = ({active, index}: FormIndexItemProps) => {
	return (
		<li className={`${active && "bg-lime-400"}`}>
			{index + 1}
		</li>
	)
}

export default FormIndex
