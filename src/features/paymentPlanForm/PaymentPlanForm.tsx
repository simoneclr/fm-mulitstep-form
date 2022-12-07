import React, { SyntheticEvent, useState } from "react"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"
import PaymentFormConfirmationPage from "./PaymentFormConfirmationPage"
import PaymentFormIndex from "./PaymentFormIndex"
import PaymentFormNavigation from "./PaymentFormNavigation"

function PaymentPlanForm() {

	const [one, setOne] = useState("")
	const [two, setTwo] = useState("")
	const [three, setThree] = useState("")

	const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOne(e.target.value)
	}

	const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTwo(e.target.value)
	}

	const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
		setThree(e.target.value)
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		alert(`${one} ${two} ${three}`)
	}

	return (
		<MultiStepForm className="bg-white p-6 w-full rounded-lg"
			renderFormIndex={(currentStep, totalSteps) => 
				<PaymentFormIndex currentStep={currentStep} totalSteps={totalSteps}/>
			}

			renderFormNavigation={(currentStep, totalSteps, prevStep) => 
				<PaymentFormNavigation currentStep={currentStep} totalSteps={totalSteps} prevStep={prevStep}/>
			}

			renderConfirmation={() => <PaymentFormConfirmationPage/>}
			
			onSubmit={handleSubmit}
		>
			<input type="text" value={one} onChange={handleChangeOne} 
				autoFocus className="p-2 border border-zinc-600"/>

			<input type="text" value={two} onChange={handleChangeTwo} 
				autoFocus className="p-2 border border-zinc-600"/>

			<input type="text" value={three} onChange={handleChangeThree} 
				autoFocus className="p-2 border border-zinc-600"/>

			<div>
				Summary:
				<ul>
					<li>{one}</li>
					<li>{two}</li>
					<li>{three}</li>
				</ul>
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
