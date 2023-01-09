import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { withBreakpoints } from 'react-breakpoints'
import { FcGoogle } from 'react-icons/fc'

import Input from '../Common/Input'
import Button from '../Common/Button'
import Loader from '../Common/Loader'

import { user } from '../../store/atom'
import { INPUTS_STATUS } from '../../utils/const'
import {
	registrationWithEmailAndPassword,
	registrationWithGoogle,
} from '../../api/auth'

const { error, success, initial } = INPUTS_STATUS

const RegistrationForm = ({ currentBreakpoint }) => {
	const [userData, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState({ value: '', status: initial })
	const [password, setPassword] = useState({ value: '', status: initial })
	const [confirmPassword, setConfirmPassword] = useState({
		value: '',
		status: initial,
	})
	const [isLoading, setIsLoading] = useState(false)

	const commonInputClasses = 'w-full mb-4'

	const validateFields = () => {
		const isEmailInvalid = email.status !== success
		const isPasswordInvalid = password.status !== success
		const isConfirmPasswordInvalid = confirmPassword.status !== success
		if (isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid)
			return false

		return true
	}

	const handleClick = async () => {
		const areFieldsValid = validateFields()
		if (!areFieldsValid) return false
		setIsLoading(true)
		try {
			const user = await registrationWithEmailAndPassword(
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

	const comparePasswords = (text) => {
		return text === password.value
	}

	const handleConfirmChange = ({ value }) => {
		const isPasswordEqual = comparePasswords(value)
		const confirmStatus = isPasswordEqual ? success : error
		console.log(confirmStatus, 'confirm')
		setConfirmPassword({ value, status: confirmStatus })
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
				<Input
					type="password"
					value={confirmPassword.value}
					onChange={handleConfirmChange}
					status={confirmPassword.status}
					label="Confirm password"
					placeholder="Type your password again"
					additionalWindClasses={commonInputClasses}
				/>
				<Button title="Sign up" onClick={handleClick} />
				<span className="mx-4 text-slate-300 font-semibold">Or</span>
				<Button
					title="Sign with"
					icon={<FcGoogle className="inline ml-1 w-4 h-4" />}
					onClick={handleGoogleBtnClick} />
			</Loader>
		</form>
	)
}

export default withBreakpoints(RegistrationForm)
