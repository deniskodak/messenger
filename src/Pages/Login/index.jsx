import React, { useState } from 'react'

import LoginForm from '../../components/LoginForm'
import Container from '../../components/Common/Container'
import FullLogo from '../../components/Common/Logo'
import FullLetterBubbles from '../../components/Common/Animation/FullLetterBubbles'
import RegistrationForm from '../../components/RegistrationForm'

const TABS = {
	log: 'login',
	reg: 'registration',
}

const Login = () => {
	const [currentTab, setCurrentTab] = useState(TABS.log)
	const labelClasses = {
		textClasses: 'text-4xl',
		bgClasses: 'rounded-xl',
		iconClasses: '-right-8 -top-7',
	}

	const currentForms = {
		[TABS.log]: {
			form: <LoginForm />,
			buttonTitle: 'Create an account',
			buttonOnClick: () => setCurrentTab(TABS.reg),
		},
		[TABS.reg]: {
			form: <RegistrationForm />,
			buttonTitle: 'Already have account?',
			buttonOnClick: () => setCurrentTab(TABS.log),
		},
	}

	const iconClasses = 'h-60 w-full md:w-1/2'

	return (
		<div className="gradient_animation">
			<FullLetterBubbles/>
			<Container>
				<div className="md:flex flex-wrap lg:h-screen lg:items-center ">
					<div className=" p-4 text-center md:flex md:items-center md:w-full lg:flex-col lg:w-1/2 xl:w-1/3 xl:ml-auto">
						<FullLogo
							iconClasses={iconClasses}
							labelClasses={labelClasses}
						/>
					</div>
					<div className="p-4 md:mx-auto md:w-10/12 lg:w-1/2 xl:w-1/3 xl:ml-4">
						{currentForms[currentTab].form}
					</div>
					<div className="text-center md:w-full pt-2 pb-4">
						<button
							onClick={currentForms[currentTab].buttonOnClick}
							className="underline text-slate-300 text-sm md:text-base">
							{currentForms[currentTab].buttonTitle}
						</button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Login
