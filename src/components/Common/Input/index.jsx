import React, { useState, useEffect } from 'react'

const Input = ({ value, onChange, placeholder = 'Search', additionalWindClasses = "" }) => {
	const [text, setText] = useState(value || '')

	useEffect(() => {
		setText(value)
	}, [value])

	const handleChange = ({ target }) => {
		setText(target.value)
		onChange && onChange(target.value)
	}

	return (
		<input
			class={`grow border-2 border-slate-200 outline-0 px-4 py-1 rounded-xl hover:border-sky-400 focus:border-sky-400 ${additionalWindClasses}`}
			value={text}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
