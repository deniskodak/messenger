import React from 'react'

import LoginForm from '../../components/LoginForm'
import Container from '../../components/Common/Container'
import FullLogo from '../../components/Common/Logo'

const Login = () => {
	const labelClasses = {
        textClasses: 'text-4xl',
        bgClasses: 'rounded-xl',
        iconClasses: '-right-8 -top-7'
    }

	const iconClasses = 'h-60 w-full md:w-1/2'

	return (
		<div>
			<Container>
				<div className="md:flex flex-wrap lg:h-screen lg:items-center">
					<div className="p-4 text-center md:flex md:items-center md:w-full lg:flex-col lg:w-1/2 xl:w-1/3 xl:ml-auto">
						<FullLogo iconClasses={iconClasses} labelClasses={labelClasses}/>
					</div>
					<div className="p-4 md:mx-auto md:w-10/12 lg:w-1/2 xl:w-1/3 xl:ml-4">
						<LoginForm />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Login
