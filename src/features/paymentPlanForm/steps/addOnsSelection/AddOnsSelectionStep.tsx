import CheckboxCard from "../../../../components/inputs/CheckboxCard";
import PaymentFormStepTitle from "../../styles/PaymentFormStepTitle";

function AddOnsSelectionStep() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<PaymentFormStepTitle>
					Pick add-ons
				</PaymentFormStepTitle>

				<p className="text-cool-gray mt-1">
					Add-ons help enhance your gaming experience.
				</p>
			</div>

			<CheckboxCard title="Online Service" description="Access to multiplayer games" price="+1$/mo"/>

			<CheckboxCard title="Larger Storage" description="Extra 1TB of cloud save" price="+2$/mo"/>
			
			<CheckboxCard title="Customizable Profile" description="Custom theme on your profile" price="+2$/mo"/>
		</div>
	)
}

export default AddOnsSelectionStep
