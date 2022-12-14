import { SyntheticEvent } from "react"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"
import PaymentFormConfirmationPage from "./PaymentFormConfirmationPage"
import PaymentFormIndex from "./PaymentFormIndex"
import PaymentFormNavigation from "./PaymentFormNavigation"

import PersonalInfoFormStep from "./steps/personalInfo/PersonalInfoFormStep"
import PlanSelectionFormStep from "./steps/planSelection/PlanSelectionFormStep"
import AddOnsSelectionStep from "./steps/addOnsSelection/AddOnsSelectionStep"
import useValidatedInputField from "../../hooks/useValidatedInputField"
import { mockValidate } from "./validation/mockValidation"

function PaymentPlanForm() {

	// Personal Info step state management
	const nameController = useValidatedInputField<string>(mockValidate, "")
	const emailController = useValidatedInputField<string>(mockValidate, "")
	const phoneController = useValidatedInputField<string>(mockValidate, "")

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		console.log("Name: ", nameController.value)
		console.log("Email address: ", emailController.value)
		console.log("Phone number: ", phoneController.value)
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
			
			<PersonalInfoFormStep
				nameController={nameController}
				emailController={emailController}
				phoneController={phoneController}
			/>

			<PlanSelectionFormStep/>

			<AddOnsSelectionStep/>

			<div>
				Summary:
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
