import React from 'react'
import { BsFillEnvelopeFill, BsFillChatLeftTextFill } from 'react-icons/bs'

export const Label = ({ textClasses, bgClasses, iconClasses  }) => {
	return (
		<h1
			className={`text-sky-800 font-bold tracking-wide font-mono text-4xl ${textClasses}`}>
			Quick
			<span className={`bg-sky-800 text-white px-2 rounded-xl relative ${bgClasses}`}>
				Messenger
				<BsFillChatLeftTextFill className={`absolute fill-sky-800 -right-8 -top-7 ${iconClasses}`} />
			</span>
		</h1>
	)
}

export const Icon = ({ iconClasses }) => (
	<BsFillEnvelopeFill
		className={`h-60 w-full md:w-1/2 fill-sky-400 ${iconClasses}`}
	/>
)

const FullLogo = ({labelClasses, iconClasses}) => {
	return (
		<>
			<Icon iconClasses={iconClasses}/>
			<Label {...labelClasses}/>
		</>
	)
}

export default FullLogo
