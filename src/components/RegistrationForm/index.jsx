import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import Input from '../Common/Input'
import Button from '../Common/Button'
import { user } from '../../store/atom'
import { INPUTS_STATUS } from '../../utils/const'
import {registrationWithEmail} from '../../api/auth'
const { error, success, initial } = INPUTS_STATUS

const RegistrationForm = () => {
	const [userData, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState({value: '', status: initial})
	const [password, setPassword] = useState({value: '', status: initial})
	const [confirmPassword, setConfirmPassword] = useState({value: '', status: initial})
	const commonInputClasses = 'w-full mb-4'

	const validateFields = () => {
		const isEmailInvalid = email.status !== success;
		const isPasswordInvalid = password.status !== success;
		const isConfirmPasswordInvalid = confirmPassword.status !== success;
		console.log(isEmailInvalid, isPasswordInvalid, isConfirmPasswordInvalid, 'statuses')		
		if(isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid) return false

		return true
	}

	const handleClick = async () => {
		const areFieldsValid = validateFields()
		if(!areFieldsValid) return false
		const user = await registrationWithEmail(email.value, password.value)
		setUserData(user)
	}

	const comparePasswords = (text) => {
		return text === password.value
	}

	const handleConfirmChange = ({ value }) => {
		const isPasswordEqual = comparePasswords(value)
		const confirmStatus = isPasswordEqual ? success : error
		console.log(confirmStatus, 'confirm')
		setConfirmPassword({value, status: confirmStatus})
	}

	return (
		<form>
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
		</form>
	)
}

export default RegistrationForm
