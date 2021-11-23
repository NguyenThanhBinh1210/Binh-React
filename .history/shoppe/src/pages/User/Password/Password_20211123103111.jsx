import React from 'react'
import * as S from '../Profile/profile.style '
import { PasswordContent } from './password.style'

export default function Password() {
	return (
		<S.Profle>
			<S.ProfileHeader>
				<S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
				<S.ProfileHeaderSubtitle>
					Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
				</S.ProfileHeaderSubtitle>
				<PasswordContent>
					<S.InputLabel>
						<S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
					</S.InputLabel>
				</PasswordContent>
			</S.ProfileHeader>
		</S.Profle>
	)
}
