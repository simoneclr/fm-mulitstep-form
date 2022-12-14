import { useCallback, useState } from "react"

function useToggle<T> (
	falseOption: T,
	trueOption: T,
	initialState: boolean
): ToggleController<T> {
	const [toggled, setToggled] = useState<boolean>(initialState)

	const toggleValue = useCallback(() => {
		setToggled(prev => !prev)
	}, [setToggled])

	return {
		isToggled: toggled,
		value: toggled ? trueOption : falseOption,
		toggle: toggleValue
	}
}

export interface ToggleController<T> {
	isToggled: boolean;
	value: T;
	toggle: () => void;
}

export default useToggle
