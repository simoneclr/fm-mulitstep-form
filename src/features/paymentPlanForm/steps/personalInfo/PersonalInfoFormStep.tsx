import LabelledInputField from "../../../../components/inputs/LabelledInputField"
import PaymentFormStepTitle from "../../styles/PaymentFormStepTitle"

function PersonalInfoFormStep() {
	return (
		<div className="flex flex-col items-stretch gap-4">
			<div>
				<PaymentFormStepTitle>
					Personal Info
				</PaymentFormStepTitle>

				<p className="text-cool-gray mt-1">
					Please provide your name, email address, and phone number.
				</p>
			</div>

			<LabelledInputField 
				labelText="Name"
				type="text"
				id="name"
				name="name"
				placeholder="e.g. Stephen King"
				autoFocus
			/>

			<LabelledInputField
				labelText="Email Address"
				type="email"
				id="email-address"
				name="email-address"
				placeholder="e.g. stephenking@lorem.com"
			/>

			<LabelledInputField
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
