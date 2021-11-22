import React from 'react'
import * as S from './user.style.js'

export default function User() {
	return (
		<div>
			<S.Container className="container">
				<S.Sidebar>
					<S.Brief>
						<S.BriefAvatar to="">
							<img
								src="https://cf.shopee.vn/file/f9d28d9bb95ebcb62a7f2803b5bfd29e_tn"
								alt=""
							/>
						</S.BriefAvatar>
					</S.Brief>
				</S.Sidebar>
				<S.Main></S.Main>
			</S.Container>
		</div>
	)
}
