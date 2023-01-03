import React from 'react'
import { BsFillEnvelopeFill, BsFillChatLeftTextFill } from 'react-icons/bs'

const LargeLogo = () => {
	return (
		<>
			<BsFillEnvelopeFill className="h-60 w-full md:w-1/2 fill-sky-400" />
			<h1 className="text-sky-800 font-bold tracking-wide	font-mono text-4xl">
				Quick
				<span className="bg-sky-800 text-white px-2 rounded-xl relative">
					Messenger
					<BsFillChatLeftTextFill className="absolute fill-sky-800 -right-8 -top-7" />
				</span>
			</h1>
		</>
	)
}

export default LargeLogo
