function ButtonSecondary(nativeProps: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className="text-cool-gray font-medium hover:text-marine-blue" {...nativeProps}>
			{nativeProps.children}
		</button>
	)
}

export default ButtonSecondary
