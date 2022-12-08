import React, { SyntheticEvent, useState } from "react"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"
import PaymentFormConfirmationPage from "./PaymentFormConfirmationPage"
import PaymentFormIndex from "./PaymentFormIndex"
import PaymentFormNavigation from "./PaymentFormNavigation"

import PersonalInfoFormStep from "./steps/personalInfo/PersonalInfoFormStep"
import PlanSelectionFormStep from "./steps/planSelection/PlanSelectionFormStep"

function PaymentPlanForm() {

	const [three, setThree] = useState("")

	const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
		setThree(e.target.value)
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		alert(`${three}`)
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
			
			{/* <PersonalInfoFormStep/> */}

			<PlanSelectionFormStep/>

			<input type="text" value={three} onChange={handleChangeThree} 
				autoFocus className="p-2 border border-zinc-600"/>

			<div>
				Summary:
				<ul>
					<li>{three}</li>
				</ul>
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
