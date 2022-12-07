import React, { FormEvent, ReactNode } from "react"

import useMultiStepForm from "./hooks/useMultiStepForm"

import FormStep from "./FormStep"

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
	renderFormIndex: (currentStep: number, totalSteps: number) => JSX.Element;
	renderFormNavigation: (currentStep: number, totalSteps: number, prevStep: () => void) => JSX.Element;
	renderConfirmation: () => JSX.Element;
	children: ReactNode;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function MultiStepForm({
	renderFormIndex, renderFormNavigation, renderConfirmation, 
	children, onSubmit, ...rest}: Props
) {

	const {
		step,
		success,
		prevStep,
		nextStep
	} = useMultiStepForm(React.Children.count(children), onSubmit)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		nextStep(e)
	}

	return (
		<>
			{renderFormIndex(step, React.Children.count(children))}

			{
				success ? 

				renderConfirmation()

				:

				<form onSubmit={handleSubmit} {...rest}>
					<FormStep>
						{React.Children.toArray(children)[step]}
					</FormStep>
						
					{renderFormNavigation(step, React.Children.count(children), prevStep)}
				</form>
			}			
		</>		
	)
}

export default MultiStepForm
