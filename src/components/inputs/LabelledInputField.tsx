interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
}

function LabelledInputField({labelText, ...nativeInputProps}: Props) {
	return (
		<label htmlFor={nativeInputProps.id}>
			<span className="block mb-1 text-sm text-marine-blue">
				{labelText ? labelText: nativeInputProps.name}
			</span>

			<input className="
				text-marine-blue font-medium placeholder:text-cool-gray
				w-full p-2 border-2 border-light-gray rounded outline-none focus:border-marine-blue
			" {...nativeInputProps}/>
		</label>
	)
}

export default LabelledInputField
