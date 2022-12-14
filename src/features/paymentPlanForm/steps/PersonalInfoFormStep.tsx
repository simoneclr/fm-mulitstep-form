import React from "react";

import { ValidatedFieldController } from "../../../hooks/useValidatedInputField"

import LabelledInputField from "../../../components/inputs/LabelledInputField"
import PaymentFormStepHeader from "../styles/PaymentFormStepHeader"

interface Props {
	nameController: ValidatedFieldController<string>;
	emailController: ValidatedFieldController<string>;
	phoneController: ValidatedFieldController<string>;
}

function PersonalInfoFormStep({nameController, emailController, phoneController}: Props) {

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		nameController.setValue(e.target.value)
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		emailController.setValue(e.target.value)
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		phoneController.setValue(e.target.value)
	}

	return (
		<div className="flex flex-col items-stretch gap-4">
			<PaymentFormStepHeader
				title="Personal Info"
				subtitle="Please provide your name, email address, and phone number."
			/>

			<LabelledInputField
				value={nameController.value}
				onChange={handleNameChange}
				onBlur={nameController.performValidation}
				labelText="Name"
				type="text"
				id="name"
				name="name"
				placeholder="e.g. Stephen King"
				autoFocus
			/>

			<LabelledInputField
				value={emailController.value}
				onChange={handleEmailChange}
				onBlur={emailController.performValidation}
				labelText="Email Address"
				type="email"
				id="email-address"
				name="email-address"
				placeholder="e.g. stephenking@lorem.com"
			/>

			<LabelledInputField
				value={phoneController.value}
				onChange={handlePhoneChange}
				onBlur={phoneController.performValidation}
				labelText="Phone Number"
				type="tel"
				id="phone-number"
				name="phone-number"
				placeholder="e.g. +1 234 567 890"
			/>
		</div>
	)
}

export default PersonalInfoFormStep
