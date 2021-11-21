import React from 'react'
import * as S from './popover.style'

export default function Popover({ active, children }) {
	return (
		<S.Drawer>
			<S.PopoverArrow />
			<S.PopoverContent>{children}</S.PopoverContent>
		</S.Drawer>
	)
}
