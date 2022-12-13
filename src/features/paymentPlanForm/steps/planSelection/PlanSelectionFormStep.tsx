import { ReactComponent as IconArcade } from "../../../../assets/images/icon-arcade.svg"
import { ReactComponent as IconAdvanced } from "../../../../assets/images/icon-advanced.svg"
import { ReactComponent as IconPro } from "../../../../assets/images/icon-pro.svg"

import PaymentFormStepHeader from "../../styles/PaymentFormStepHeader"
import RadioButtonCard from "../../../../components/inputs/RadioButtonCard"
import LabelledToggle from "../../../../components/inputs/LabelledToggle"

enum PLAN_RADIO_VALUES {
	arcade = "PLAN_RADIO_ARCADE",
	advanced = "PLAN_RADIO_ADVANCED",
	pro = "PLAN_RADIO_PRO"
}

function PlanSelectionFormStep() {
	return (
		<div className="flex flex-col gap-4">
			<PaymentFormStepHeader
				title="Select your plan"
				subtitle="You have the option of monthly or yearly billing."
			/>

			<div className="flex flex-col gap-3">
				<RadioButtonCard
					name="plan"
					value={PLAN_RADIO_VALUES.arcade}
					Icon={IconArcade}
					title="arcade"
					description="$9/mo"
				/>

				<RadioButtonCard
					name="plan"
					value={PLAN_RADIO_VALUES.advanced}
					Icon={IconAdvanced}
					title="advanced"
					description="$12/mo"
				/>

				<RadioButtonCard
					name="plan"
					value={PLAN_RADIO_VALUES.pro}
					Icon={IconPro}
					title="pro"
					description="$15/mo"
				/>
			</div>

			<LabelledToggle labelUnchecked="Monthly" labelChecked="Yearly"/>
		</div>
	)
}

export default PlanSelectionFormStep
