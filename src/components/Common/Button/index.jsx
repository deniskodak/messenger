import React from 'react'
import { background, textColor, transition } from '../../../Styles'

const Button = ({ title, onClick }) => {

    const bgClasses = `${background.coloredBtnDefault} ${background.coloredBtnHover} ${background.coloredBtnFocus} ${background.coloredBtnActive}`

	return (
		<button
			onClick={onClick}
			className={`rounded-xl border border-slate-300 hover:border-teal-300 focus:border-teal-300 px-4 py-1 font-bold outline-none ${bgClasses} ${textColor.button} ${transition.color} ${textColor.buttonHover}`}>
			{title}
		</button>
	)
}

export default Button
