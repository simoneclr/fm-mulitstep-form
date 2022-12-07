import ButtonCTA from "../../components/buttons/ButtonCTA";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";

interface Props {
	currentStep: number;
	totalSteps: number;
	prevStep: () => void;
}

function PaymentFormNavigation({currentStep, totalSteps, prevStep}: Props) {
	return (
		<div className="
			flex justify-between items-center
			fixed inset-x-0 bottom-0 bg-white p-4
		">
			{ currentStep > 0 &&
				<ButtonSecondary type="button" onClick={prevStep}>
					Go Back
				</ButtonSecondary>
			}

			{/* Avoids breaking layout's justify-between when the Go Back button is oìnot visible on screen */}
			<div className="invisible" aria-hidden></div>

			{ currentStep === totalSteps - 1 ?
				<ButtonCTA type="submit">
					Confirm
				</ButtonCTA>

				:

				<ButtonPrimary type="submit">
					Next Step
				</ButtonPrimary>
			}
		</div>
	)
}

export default PaymentFormNavigation
