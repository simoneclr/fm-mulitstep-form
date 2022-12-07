function ButtonPrimary(nativeProps: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className="px-4 py-2 text-white bg-marine-blue hover:opacity-90 rounded" {...nativeProps}>
			{nativeProps.children}
		</button>
	)
}

export default ButtonPrimary
