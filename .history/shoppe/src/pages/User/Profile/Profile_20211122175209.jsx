import React from 'react'
import * as S from './profile.style.js'

export default function Profile() {
	return (
		<S.Profile>
			<S.ProfileHeader>
				<S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
				<S.ProfileHeaderSubtitle>
					{' '}
					Quản lí thông tin hồ sơ để bảo mật tài khoản
				</S.ProfileHeaderSubtitle>
			</S.ProfileHeader>
			<S.ProfileInfo>
				<S.ProfileLeft>
					<S.InputLabel>
						<S.InputLabelLabel>Email</S.InputLabelLabel>
						<S.InputLabelContent>
							<S.InputLabelContentText></S.InputLabelContentText>
						</S.InputLabelContentText>
					</S.InputLabel>
				</S.ProfileLeft>
			</S.ProfileInfo>
		</S.Profile>
	)
}
