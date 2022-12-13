interface Props {
	title: string;
	subtitle: string;
}

function PaymentFormStepHeader({title, subtitle}: Props) {
	return (
		<div>
			<h2 className="text-marine-blue text-2xl font-bold">
				{title}
			</h2>

			<p className="text-cool-gray mt-1">
				{subtitle}
			</p>
		</div>
	)
}

export default PaymentFormStepHeader
