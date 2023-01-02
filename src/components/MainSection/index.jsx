import React, { useMemo } from 'react'
import { withBreakpoints } from 'react-breakpoints'
import { useRecoilValue } from 'recoil'
import { selectedChanel } from '../../store/atom'
import LeftSidebar from '../LeftSidebar'
import RightSidebar from '../RightSidebar'

const MainSection = ({ breakpoints, currentBreakpoint }) => {
	const selectedChanelId = useRecoilValue(selectedChanel)
	const isMobileDevice = breakpoints[currentBreakpoint] < breakpoints.tablet

	const props = isMobileDevice
		? {
				isRightShown: selectedChanelId,
				isLeftShown: !selectedChanelId,
		  }
		: { isRightShown: true, isLeftShown: true }

	return (
		<section class="flex grow">
			<LeftSidebar {...props} />
			<RightSidebar {...props} breakpoint={currentBreakpoint}/>
		</section>
	)
}

export default withBreakpoints(MainSection)
