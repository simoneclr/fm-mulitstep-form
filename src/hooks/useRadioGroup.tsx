import { useCallback, useState } from "react"

function useRadioGroup<T> (initialValue: T): RadioGroupController<T> {
	const [selectedValue, setSelectedValue] = useState<T>(initialValue)

	const isSelected = useCallback((value: T) => {
		return value === selectedValue
	}, [selectedValue])

	return {
		selectedValue,
		isSelected,
		setSelected: setSelectedValue
	}
}

export interface RadioGroupController<T> {
	selectedValue: T;
	isSelected: (value: T) => boolean;
	setSelected: (value: T) => void;
}

export default useRadioGroup
