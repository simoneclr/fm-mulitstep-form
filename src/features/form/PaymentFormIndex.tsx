import PaymentFormIndexItem from "./PaymentFormIndexItem";

interface Props {
	currentStep: number;
	totalSteps: number;
}

function PaymentFormIndex({currentStep, totalSteps}: Props) {

	const steps = new Array(totalSteps).fill(0).map((el, i) => i)

	return (
		<div className="bg-sidebar-mobile 
			absolute inset-x-0 top-0 h-36 -z-10 flex flex-col items-center
		">
			<ul className="py-8 flex items-center gap-4">
				{steps.map(step => 
					<PaymentFormIndexItem key={step} index={step} title={""} isActive={(step === currentStep)}/>
				)}
			</ul>
		</div>
	)
}

export default PaymentFormIndex
