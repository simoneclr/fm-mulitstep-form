import { SyntheticEvent } from "react"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"
import PaymentFormConfirmationPage from "./PaymentFormConfirmationPage"
import PaymentFormIndex from "./PaymentFormIndex"
import PaymentFormNavigation from "./PaymentFormNavigation"

import PersonalInfoFormStep from "./steps/personalInfo/PersonalInfoFormStep"
import PlanSelectionFormStep from "./steps/planSelection/PlanSelectionFormStep"
import AddOnsSelectionStep from "./steps/addOnsSelection/AddOnsSelectionStep"

function PaymentPlanForm() {
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
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
			
			<PersonalInfoFormStep/>

			<PlanSelectionFormStep/>

			<AddOnsSelectionStep/>

			<div>
				Summary:
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
