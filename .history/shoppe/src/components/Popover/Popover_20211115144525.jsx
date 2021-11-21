import React from 'react'

export default function Popover({ children }) {
	return (
		<S.Drawer>
			<S.PopoverArrow />
			<S.PopoverContent>{children}</S.PopoverContent>
		</S.Drawer>
	)
}
