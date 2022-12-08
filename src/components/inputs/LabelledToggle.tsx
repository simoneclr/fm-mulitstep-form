import { ReactNode } from "react";

import Toggle from "./Toggle";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	labelUnchecked: string;
	labelChecked: string;
}

function LabelledToggle({labelUnchecked, labelChecked, ...nativeCheckboxProps}: Props) {
	return (
		<div className="flex justify-center items-center gap-4 p-2 rounded-lg bg-alabaster">
			<ToggleLabel toggled={!nativeCheckboxProps.checked}>
				{labelUnchecked}
			</ToggleLabel>

			<Toggle {...nativeCheckboxProps}/>

			<ToggleLabel toggled={nativeCheckboxProps.checked}>
				{labelChecked}
			</ToggleLabel>
		</div>
	)
}

const ToggleLabel = ({toggled, children}: {toggled?: boolean, children: ReactNode}) => {
	return (
		<span className={`font-medium ${toggled ? "text-marine-blue" : "text-cool-gray"}`}>
			{children}
		</span>
	)
}

export default LabelledToggle
