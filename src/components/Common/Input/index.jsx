import React, { useState, useEffect } from 'react'

const Input = ({
	type = "text",
	value,
	onChange,
	placeholder = 'Search',
	additionalWindClasses = '',
	label,
}) => {
	const [text, setText] = useState(value || '')

	useEffect(() => {
		setText(value)
	}, [value])

	const handleChange = ({ target }) => {
		setText(target.value)
		onChange && onChange(target.value)
	}

	return (
		<>
			<label>
				{label ? <span className="block mb-1 font-semibold text-slate-500">{label}</span> : null}
				<input
					class={`grow border-2 border-slate-200 outline-0 px-4 py-1 rounded-xl hover:border-sky-400 focus:border-sky-400 ${additionalWindClasses}`}
					value={text}
					type={type}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			</label>
		</>
	)
}

export default Input
