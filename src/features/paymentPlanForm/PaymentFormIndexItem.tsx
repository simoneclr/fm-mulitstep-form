interface Props {
	index: number;
	title: string;
	isActive: boolean;
}

function PaymentFormIndexItem({index, title, isActive}: Props) {
	return (
		<li>
			<span className={`
				h-8 grid place-content-center leading-[0] aspect-square rounded-full font-medium border-2
				${isActive ? 
					"text-marine-blue bg-light-blue border-light-blue" 
					: 
					"text-white bg-transparent border-white"
				}
			`}>
				{index + 1}
			</span>
		</li>
	)
}

export default PaymentFormIndexItem
