interface Props {
	isFinalStep: boolean;
	prevStep: () => void;
}

function PaymentFormNavigation({isFinalStep, prevStep}: Props) {
	return (
		<div className="flex justify-between items-center gap-8">
			<button type="button" onClick={prevStep}>
				Go Back
			</button>

			<button type="submit">
				{isFinalStep ? "Confirm" : "Next step"}
			</button>
		</div>
	)
}

export default PaymentFormNavigation
