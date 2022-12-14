import CheckboxCard from "../../../components/inputs/CheckboxCard";
import PaymentFormStepHeader from "../styles/PaymentFormStepHeader";

function AddOnsSelectionStep() {
	return (
		<div className="flex flex-col gap-4">
			<PaymentFormStepHeader
				title="Pick add-ons"
				subtitle="Add-ons help enhance your gaming experience."
			/>

			<CheckboxCard title="Online Service" description="Access to multiplayer games" price="+1$/mo"/>

			<CheckboxCard title="Larger Storage" description="Extra 1TB of cloud save" price="+2$/mo"/>
			
			<CheckboxCard title="Customizable Profile" description="Custom theme on your profile" price="+2$/mo"/>
		</div>
	)
}

export default AddOnsSelectionStep
