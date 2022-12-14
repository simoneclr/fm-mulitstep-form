import { useCallback, useState } from "react";

function useCheckbox(): CheckboxController {
	const [checked, setChecked] = useState(false)

	const toggle = useCallback(() => {
		setChecked(prev => !prev)
	}, [setChecked])

	return {
		checked,
		toggle
	}
}

export interface CheckboxController {
	checked: boolean;
	toggle: () => void;
}

export default useCheckbox
