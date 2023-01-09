import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { FcGoogle } from 'react-icons/fc'
import withBreakpoints from 'react-breakpoints/lib/withBreakpoints'

import Input from '../Common/Input'
import Button from '../Common/Button'
import Loader from '../Common/Loader'

import { user } from '../../store/atom'
import { loginWithEmailAndPassword, registrationWithGoogle } from '../../api/auth'
import { INPUTS_STATUS } from '../../utils/const'

const { success, initial } = INPUTS_STATUS

const LoginForm = ({currentBreakpoint}) => {
	const [userData, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState({ value: '', status: initial })
	const [password, setPassword] = useState({ value: '', status: initial })
	const [isLoading, setIsLoading] = useState(false)

	const commonInputClasses = 'w-full mb-4'

	const validateFields = () => {
		const isEmailInvalid = email.status !== success
		const isPasswordInvalid = password.status !== success
		if (isEmailInvalid || isPasswordInvalid)
			return false

		return true
	}

	const handleClick = async () => {
		const areFieldsValid = validateFields()
		if (!areFieldsValid) return false
		setIsLoading(true)
		try {
			const user = await loginWithEmailAndPassword(
				email.value,
				password.value,
			)
			setUserData(user)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	const handleGoogleBtnClick = async () => {
		setIsLoading(true)
		try {
			await registrationWithGoogle(currentBreakpoint)
		} catch (error) {
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form>
			<Loader loading={isLoading}>
				<Input
					value={email.value}
					onChange={setEmail}
					label="Email"
					placeholder="Type your email"
					additionalWindClasses={commonInputClasses}
					type="email"
				/>
				<Input
					type="password"
					value={password.value}
					onChange={setPassword}
					label="Password"
					placeholder="Type your password"
					additionalWindClasses={commonInputClasses}
				/>
				<Button title="Sign in" onClick={handleClick} />
				<span className="mx-4 text-slate-300 font-semibold">Or</span>
				<Button
					title="Sign with"
					icon={<FcGoogle className="inline ml-1 w-4 h-4" />}
					onClick={handleGoogleBtnClick} />
			</Loader>
		</form>
	)
}

export default withBreakpoints(LoginForm)
