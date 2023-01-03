import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import Input from '../Common/Input'
import Button from '../Common/Button'
import { user } from '../../store/atom'

const RegistrationForm = () => {
	const [userData, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const commonInputClasses = 'w-full mb-4'

	const handleClick = () => {
		setUserData({ email: email, password: password })
	}

	return (
		<form>
			<Input
				value={email}
				onChange={setEmail}
				label="Email"
				placeholder="Type your email"
				additionalWindClasses={commonInputClasses}
			/>
			<Input
                type="password"
				value={password}
				onChange={setPassword}
				label="Password"
				placeholder="Type your password"
				additionalWindClasses={commonInputClasses}
			/>
			<Input
                type="password"
				value={confirmPassword}
				onChange={setConfirmPassword}
				label="Confirm password"
				placeholder="Type your password again"
				additionalWindClasses={commonInputClasses}
			/>
			<Button title="Sign up" onClick={handleClick} />
		</form>
	)
}

export default RegistrationForm
