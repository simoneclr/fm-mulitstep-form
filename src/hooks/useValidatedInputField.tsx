import { useCallback, useState } from "react"

import { FormValidationResult } from "../types/FormValidationResult.type"

function useValidatedInputField<T> (
	validate: (value: T) => FormValidationResult,
	initialValue: T
): ValidatedFieldController<T> {
	const [value, setValue] = useState<T>(initialValue)
	const [isValid, setIsValid] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState("")

	const performValidation = useCallback(() => {
		let {isValid, message} = validate(value)

		setIsValid(isValid)
		setErrorMessage(message)
	}, [validate, value, setIsValid, setErrorMessage]) 

	return {
		value,
		setValue,
		performValidation,
		isValid,
		errorMessage
	}
}

export interface ValidatedFieldController<T> {
	value: T;
	setValue: (value: T) => void;
	performValidation: () => void;
	isValid: boolean;
	errorMessage: string;
}

export default useValidatedInputField
