import React from "react"

import { ReactComponent as IconArcade } from "../../../../assets/images/icon-arcade.svg"
import { ReactComponent as IconAdvanced } from "../../../../assets/images/icon-advanced.svg"
import { ReactComponent as IconPro } from "../../../../assets/images/icon-pro.svg"

import PlanOptions from "../../types/planOptions.enum"
import BillingOptions from "../../types/billingOptions.enum"

import { RadioGroupController } from "../../../../hooks/useRadioGroup"
import { ToggleController } from "../../../../hooks/useToggle"

import PaymentFormStepHeader from "../../styles/PaymentFormStepHeader"
import RadioButtonCard from "../../../../components/inputs/RadioButtonCard"
import LabelledToggle from "../../../../components/inputs/LabelledToggle"

interface Props {
	planController: RadioGroupController<PlanOptions>;
	billingController: ToggleController<BillingOptions>;
}

function PlanSelectionFormStep({planController, billingController}: Props) {

	const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		planController.setSelected((e.target.value) as PlanOptions)
	}

	return (
		<div className="flex flex-col gap-4">
			<PaymentFormStepHeader
				title="Select your plan"
				subtitle="You have the option of monthly or yearly billing."
			/>

			<div className="flex flex-col gap-3">
				<RadioButtonCard
					checked={planController.isSelected(PlanOptions.arcade)}
					onChange={handlePlanChange}
					name="plan"
					value={PlanOptions.arcade}
					Icon={IconArcade}
					title="arcade"
					description="$9/mo"
				/>

				<RadioButtonCard
					checked={planController.isSelected(PlanOptions.advanced)}
					onChange={handlePlanChange}
					name="plan"
					value={PlanOptions.advanced}
					Icon={IconAdvanced}
					title="advanced"
					description="$12/mo"
				/>

				<RadioButtonCard
					checked={planController.isSelected(PlanOptions.pro)}
					onChange={handlePlanChange}
					name="plan"
					value={PlanOptions.pro}
					Icon={IconPro}
					title="pro"
					description="$15/mo"
				/>
			</div>

			<LabelledToggle
				checked={billingController.isToggled}
				onChange={billingController.toggle}
				labelUnchecked="Monthly"
				labelChecked="Yearly"
			/>
		</div>
	)
}

export default PlanSelectionFormStep
