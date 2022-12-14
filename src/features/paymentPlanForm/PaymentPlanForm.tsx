import { SyntheticEvent } from "react"

import BillingOptions from "./types/billingOptions.enum"
import PlanOptions from "./types/planOptions.enum"

import useValidatedInputField from "../../hooks/useValidatedInputField"
import useRadioGroup from "../../hooks/useRadioGroup"
import useToggle from "../../hooks/useToggle"
import useCheckbox from "../../hooks/useCheckbox"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"
import PaymentFormConfirmationPage from "./PaymentFormConfirmationPage"
import PaymentFormIndex from "./PaymentFormIndex"
import PaymentFormNavigation from "./PaymentFormNavigation"

import PersonalInfoFormStep from "./steps/PersonalInfoFormStep"
import PlanSelectionFormStep from "./steps/PlanSelectionFormStep"
import AddOnsSelectionStep from "./steps/AddOnsSelectionStep"

import { mockValidate } from "./validation/mockValidation"

function PaymentPlanForm() {

	// Personal Info step state management
	const nameController = useValidatedInputField<string>(mockValidate, "")
	const emailController = useValidatedInputField<string>(mockValidate, "")
	const phoneController = useValidatedInputField<string>(mockValidate, "")

	// Plan Selection step state management
	const planController = useRadioGroup<PlanOptions>(PlanOptions.arcade)
	const billingController = useToggle<BillingOptions>(BillingOptions.monthly, BillingOptions.yearly, false)

	// Add-ons step state management
	const addOnlineServices = useCheckbox()
	const addLargerStorage = useCheckbox()
	const addCustomProfile = useCheckbox()

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		console.log("Name: ", nameController.value)
		console.log("Email address: ", emailController.value)
		console.log("Phone number: ", phoneController.value)

		console.log("Selected Plan: ", planController.selectedValue)
		console.log("Billing: ", billingController.value)

		console.log("Optionals:")
		console.log(" -Online Services: ", addOnlineServices.checked)
		console.log(" -Larger Storage: ", addLargerStorage.checked)
		console.log(" -Customizable Profile: ", addCustomProfile.checked)
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

			<PlanSelectionFormStep
				planController={planController}
				billingController={billingController}
			/>

			<AddOnsSelectionStep
				addOnlineServices={addOnlineServices}
				addLargerStorage={addLargerStorage}
				addCustomProfile={addCustomProfile}
			/>

			<div>
				Summary:
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
