import React from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import * as S from './navbar.style'
export default function Navbar() {
	const [activePopover, setActivePopover]
	const authenticated = useAuthenticated()
	const profile = useSelector(state => state.auth.profile)
	return (
		<S.Navbar>
			<S.NabMenu>
				{authenticated && (
					<li>
						<S.User>
							<S.UserImage src="https://cf.shopee.vn/file/f9d28d9bb95ebcb62a7f2803b5bfd29e_tn"></S.UserImage>
							<S.UserName>{profile.name || profile.email}</S.UserName>
						</S.User>
					</li>
				)}
				{!authenticated &&(

				)}
			</S.NabMenu>
		</S.Navbar>
	)
}
