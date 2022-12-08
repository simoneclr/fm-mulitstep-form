import { ReactComponent as IconArcade } from "../../../../assets/images/icon-arcade.svg"
import { ReactComponent as IconAdvanced } from "../../../../assets/images/icon-advanced.svg"
import { ReactComponent as IconPro } from "../../../../assets/images/icon-pro.svg"

import PaymentFormStepTitle from "../../styles/PaymentFormStepTitle"
import RadioButtonCard from "../../../../components/inputs/RadioButtonCard"

enum PLAN_RADIO_VALUES {
	arcade = "PLAN_RADIO_ARCADE",
	advanced = "PLAN_RADIO_ADVANCED",
	pro = "PLAN_RADIO_PRO"
}

function PlanSelectionFormStep() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<PaymentFormStepTitle>
					Select your plan
				</PaymentFormStepTitle>

				<p className="text-cool-gray mt-1">
					You have the option of monthly or yearly billing.
				</p>
			</div>

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
		</div>
	)
}

export default PlanSelectionFormStep