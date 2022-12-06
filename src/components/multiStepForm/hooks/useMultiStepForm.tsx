import { FormEvent, useCallback, useState } from "react"

function useMultiStepForm(totalSteps: number, onSubmit: React.FormEventHandler<HTMLFormElement>) {
	const [step, setStep] = useState(0)
	const [success, setSuccess] = useState(false)

	const prevStep = useCallback(() => {
		setStep(prev => Math.max(prev - 1, 0))
	}, [setStep])

	const nextStep = useCallback((e: FormEvent<HTMLFormElement>) => {
		if (step < totalSteps - 1) {
			setStep(prev => prev + 1)
		} else {
			onSubmit(e)
			setSuccess(true)
		}
	}, [totalSteps, step, setStep, setSuccess, onSubmit])

	return {
		step,
		isFinalStep: step === totalSteps - 1,
		success,
		prevStep,
		nextStep,
	}
}

export default useMultiStepForm
