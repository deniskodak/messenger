import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

import Input from '../Common/Input'
import Button from '../Common/Button'
import { user } from '../../store/atom'

const LoginForm = () => {
	const [userData, setUserData] = useRecoilState(user)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const commonInputClasses = 'w-full mb-4'

    const handleClick = () => {
        setUserData({email: email, password: password})
    }

	return (
		<form>
			<Input
				value={email}
				onChange={setEmail}
				placeholder="Type your email"
				additionalWindClasses={commonInputClasses}
				label="Email"
                />
			<Input
				value={password}
				onChange={setPassword}
				placeholder="Type your password"
				additionalWindClasses={commonInputClasses}
				label="Password"
                />
            <Button title="Sign in" onClick={handleClick} />
		</form>
	)
}

export default LoginForm