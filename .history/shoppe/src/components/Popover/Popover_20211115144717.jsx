import React, { Fragment } from 'react'
import * as S from './popover.style'
import PropTypes from 'props-types'
export default function Popover({ active, children }) {
	return (
		<Fragment>
			{active && (
				<S.Drawer>
					<S.PopoverArrow />
					<S.PopoverContent>{children}</S.PopoverContent>
				</S.Drawer>
			)}
		</Fragment>
	)
}
