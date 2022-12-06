import React, { FormEvent, ReactNode } from "react"

import useMultiStepForm from "./hooks/useMultiStepForm"

import FormIndex from "./FormIndex"
import FormNavigation from "./FormNavigation"
import FormStep from "./FormStep"

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function MultiStepForm({children, onSubmit, ...rest}: Props) {

	const {
		step,
		isFinalStep,
		success,
		prevStep,
		nextStep
	} = useMultiStepForm(React.Children.count(children), onSubmit)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		nextStep(e)
	}

	return (
		<div>
			<FormIndex>
				{React.Children.map(children, (child, i) => 
					<FormIndex.Item index={i} active={step === i}/>
				)}
			</FormIndex>

			{
				success ? 

				<div>
					Thank You!
				</div>

				:

				<form onSubmit={handleSubmit} {...rest}>
					<FormStep>
						{React.Children.toArray(children)[step]}
					</FormStep>
						
					<FormNavigation prevStep={prevStep}	isFinalStep={isFinalStep}/>
				</form>
			}			
		</div>		
	)
}

export default MultiStepForm
