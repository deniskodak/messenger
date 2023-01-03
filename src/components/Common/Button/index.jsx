import React from 'react'
import { background, textColor } from '../../../Styles'

const Button = ({ title, onClick }) => {

    const bgClasses = `${background.coloredBtnDefault} ${background.coloredBtnHover} ${background.coloredBtnFocus} ${background.coloredBtnActive}`

	return (
		<button
			onClick={onClick}
			className={`rounded-xl px-4 py-1 font-semibold outline-none ${bgClasses} ${textColor.white}`}>
			{title}
		</button>
	)
}

export default Button
