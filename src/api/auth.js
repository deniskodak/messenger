import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './firebase'

export const registrationWithEmail = async (email, password) => {
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password)
		return user
	} catch (error) {
		const errorCode = error.code
		const errorMessage = error.message
		console.error(errorCode, errorMessage)
	}
}
