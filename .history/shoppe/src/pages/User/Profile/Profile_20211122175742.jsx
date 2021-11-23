import React from 'react'
import InputText from 'src/components/InputText/InputText'
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
							<S.InputLabelContentText>king@gmail.com</S.InputLabelContentText>
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Tên</S.InputLabelLabel>
						<S.InputLabelContent>
							<InputText name="name" type="text" />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
						<S.InputLabelContent>
							<InputText name="phone" type="text" />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
						<S.InputLabelContent>
							<InputText name="address" type="text" />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
						<S.InputLabelContent></S.InputLabelContent>
					</S.InputLabel>
					<S.Submit>
						<S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
					</S.Submit>
				</S.ProfileLeft>
				<S.ProfileRight>
					<S.AvatarUploader>
						<S.Avatar>
							<img src="https://cf.shopee.vn/file" alt="" />
						</S.Avatar>
					</S.AvatarUploader>
				</S.ProfileRight>
			</S.ProfileInfo>
		</S.Profile>
	)
}
