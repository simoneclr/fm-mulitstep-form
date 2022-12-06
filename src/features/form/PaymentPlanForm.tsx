import React, { SyntheticEvent, useState } from "react"

import MultiStepForm from "../../components/multiStepForm/MultiStepForm"

function PaymentPlanForm() {

	const [one, setOne] = useState("")
	const [two, setTwo] = useState("")
	const [three, setThree] = useState("")

	const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOne(e.target.value)
	}

	const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTwo(e.target.value)
	}

	const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
		setThree(e.target.value)
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()

		alert(`${one} ${two} ${three}`)
	}

	return (
		<MultiStepForm onSubmit={handleSubmit}>
			<input type="text" value={one} onChange={handleChangeOne} 
				required autoFocus className="p-2 border border-zinc-600"/>

			<input type="text" value={two} onChange={handleChangeTwo} 
				required autoFocus className="p-2 border border-zinc-600"/>

			<input type="text" value={three} onChange={handleChangeThree} 
				required autoFocus className="p-2 border border-zinc-600"/>

			<div>
				Summary:
				<ul>
					<li>{one}</li>
					<li>{two}</li>
					<li>{three}</li>
				</ul>
			</div>
		</MultiStepForm>
	)
}

export default PaymentPlanForm
