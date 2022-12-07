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
		<div className="flex justify-between items-center gap-8">
			{ currentStep > 0 &&
				<ButtonSecondary type="button" onClick={prevStep}>
					Go Back
				</ButtonSecondary>
			}

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
