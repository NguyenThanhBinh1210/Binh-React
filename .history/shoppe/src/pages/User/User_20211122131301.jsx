import React from 'react'
import * as S from './user.style.js'

export default function User() {
	return (
		<div>
			<S.Container className="container">
				<S.Sidebar>
					<S.Brief>
						<S.BriefAvatar to="">
							<img src="" alt="" />
						</S.BriefAvatar>
					</S.Brief>
				</S.Sidebar>
				<S.Main></S.Main>
			</S.Container>
		</div>
	)
}
