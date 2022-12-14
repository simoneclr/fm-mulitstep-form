import { CheckboxController } from "../../../hooks/useCheckbox";

import CheckboxCard from "../../../components/inputs/CheckboxCard";
import PaymentFormStepHeader from "../styles/PaymentFormStepHeader";

interface Props {
	addOnlineServices: CheckboxController;
	addLargerStorage: CheckboxController;
	addCustomProfile: CheckboxController;
}

function AddOnsSelectionStep({addOnlineServices, addLargerStorage, addCustomProfile}: Props) {
	return (
		<div className="flex flex-col gap-4">
			<PaymentFormStepHeader
				title="Pick add-ons"
				subtitle="Add-ons help enhance your gaming experience."
			/>

			<CheckboxCard
				checked={addOnlineServices.checked}
				onChange={addOnlineServices.toggle}
				title="Online Service"
				description="Access to multiplayer games"
				price="+1$/mo"
			/>

			<CheckboxCard
				checked={addLargerStorage.checked}
				onChange={addLargerStorage.toggle}				
				title="Larger Storage"
				description="Extra 1TB of cloud save"
				price="+2$/mo"
			/>
			
			<CheckboxCard
				checked={addCustomProfile.checked}
				onChange={addCustomProfile.toggle}				
				title="Customizable Profile"
				description="Custom theme on your profile"
				price="+2$/mo"
			/>
		</div>
	)
}

export default AddOnsSelectionStep
