import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
	const [search, setSearch] = useState('')

	const handleSearch = ({ target }) =>
		setSearch(target.value)

	return (
		<div className="flex p-2">
			<button className="rounded-full mr-2 w-10 h-10 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-200">
				<GiHamburgerMenu className="w-6 w-6 mx-auto" />
			</button>
			<input
				class="grow border-2 border-slate-200 outline-0 px-4 rounded-xl w-4/5 hover:border-sky-400 focus:border-sky-400"
				value={search}
				onChange={handleSearch}
				placeholder="Search"
			/>
		</div>
	)
}

export default Header
