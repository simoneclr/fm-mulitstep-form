function Toggle(nativeCheckboxProps: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input 
			type="checkbox"
			className="
				appearance-none h-4 w-8 bg-marine-blue rounded-full
				relative flex items-center
				before:block before:aspect-square before:h-[10px] before:bg-white before:rounded-full
				before:absolute before:translate-x-[3px]
				checked:before:left-auto checked:before:translate-x-[19px]
				before:transition-transform before:delay-200
			"
			{...nativeCheckboxProps}
		/>
	)
}

export default Toggle
