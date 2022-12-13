import { ReactComponent as IconCheckmark } from "../../assets/images/icon-checkmark.svg"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	description: string;
	price: string;

}

function CheckboxCard({title, description, price, ...nativeCheckboxProps}: Props) {
	return (
		<label htmlFor={nativeCheckboxProps.id} className="relative">
			<input 
				type="checkbox" {...nativeCheckboxProps}
				className="peer cursor-pointer appearance-none absolute inset-0 outline-none"
			/>
			
			<div className="
				grid grid-cols-[min-content_auto_min-content] items-center gap-x-3 p-3
				border-2 border-light-gray rounded-lg
				peer-checked:border-indigo-800 peer-checked:bg-alabaster stroke-transparent peer-checked:stroke-white
			">

				<div className={`
					h-5 w-5 border rounded grid place-items-center
					${nativeCheckboxProps.checked ? "bg-purplish-blue border-purplish-blue" : "border-cool-gray"}
				`}>
					<IconCheckmark className="stroke-inherit"/>
				</div>

				<div className="flex flex-col gap-1 leading-none">
					<span className="capitalize text-marine-blue font-medium">
						{title}
					</span>

					<span className="text-cool-gray text-xs">
						{description}
					</span>
				</div>

				<span className="text-purplish-blue text-sm">
					{price}
				</span>
			</div>			
		</label>
	)
}

export default CheckboxCard
