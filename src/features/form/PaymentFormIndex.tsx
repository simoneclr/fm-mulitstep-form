interface Props {
	currentStep: number;
	totalSteps: number;
}

function PaymentFormIndex({currentStep, totalSteps}: Props) {

	const steps = new Array(totalSteps).fill(0).map((el, i) => i)

	return (
		<ul className="flex items-center gap-4">
			{steps.map(step => <li key={step} className={`${currentStep === step && "bg-lime-400"}`}>{step + 1}</li>)}
		</ul>
	)
}

export default PaymentFormIndex
