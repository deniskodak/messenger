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
				placeholder="Email"
				additionalWindClasses={commonInputClasses}
                />
			<Input
				value={password}
				onChange={setPassword}
				placeholder="Password"
				additionalWindClasses={commonInputClasses}
                />
            <Button title="Sign in" onClick={handleClick} />
		</form>
	)
}

export default LoginForm
