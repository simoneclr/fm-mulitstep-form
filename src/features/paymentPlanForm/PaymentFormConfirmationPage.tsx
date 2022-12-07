import { ReactComponent as ThankYouIcon } from "../../assets/images/icon-thank-you.svg"

import PaymentFormStepTitle from "./styles/PaymentFormStepTitle"

function PaymentFormConfirmationPage() {
	return (
		<div className="flex flex-col items-center pt-8 pb-12 gap-2 text-center">

			<ThankYouIcon className="h-12 mb-2"/>

			<PaymentFormStepTitle>
				Thank You!
			</PaymentFormStepTitle>

			<p className="text-cool-gray">
				Thanks for confirming your subscription! We hope you have fun using our platform. 
				If you ever need support, please feel free to email us at support@loremgaming.com.
			</p>
		</div>
	)
}

export default PaymentFormConfirmationPage
