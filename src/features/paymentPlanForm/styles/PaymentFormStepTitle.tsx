function PaymentFormStepTitle({children, ...nativeProps}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2 className="text-marine-blue text-2xl font-bold" {...nativeProps}>
			{children}
		</h2>
	)
}

export default PaymentFormStepTitle
