interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	title: string;
	description: string;
	additionalInfo?: string;
}

function RadioButtonCard({Icon, title, description, additionalInfo, ...nativeRadioProps}: Props) {
	return (
		<label className="relative" htmlFor={nativeRadioProps.id}>
			<input type="radio" {...nativeRadioProps}
				className="peer cursor-pointer appearance-none absolute inset-0 outline-none"
			/>
			
			<div className="
				grid grid-cols-[min-content_auto] items-center gap-x-4 p-4
				border-2 border-light-gray rounded-lg
				peer-checked:border-indigo-800 peer-checked:bg-alabaster
			">

				<Icon className=""/>

				<div className="flex flex-col gap-px leading-none">
					<span className="capitalize text-marine-blue font-medium">
						{title}
					</span>

					<span className="text-cool-gray text-sm">
						{description}
					</span>
				</div>

				{/* Used to leave a blank cell in the grid */}
				<div className="invisible" aria-hidden></div>

				{
					additionalInfo &&
					<span className="text-marine-blue text-xs font-medium">
						{additionalInfo}
					</span>
				}
			</div>
		</label>
	)
}

export default RadioButtonCard
