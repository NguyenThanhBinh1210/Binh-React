import React from 'react'
import InputText from 'src/components/InputText/InputText'
import * as S from './profile.style'
import range from 'lodash/range'

export default function Profile() {
	return (
		<S.Profile>
			<S.ProfileHeader>
				<S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
				<S.ProfileHeaderSubtitle>
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
						<S.InputLabelContent>
							<S.DateSelect>
								<S.SelectDate
									title="Ngày"
									options={range(1, 32).map(item => ({
										name: item,
										value: item
									}))}
								/>
								<S.SelectDate
									title="Tháng"
									options={range(0, 12).map(item => ({
										name: item + 1,
										value: item
									}))}
								/>
								<S.SelectDate
									title="Ngày"
									options={range(1900, 2021).map(item => ({
										name: item,
										value: item
									}))}
								/>
							</S.DateSelect>
						</S.InputLabelContent>
					</S.InputLabel>
					<S.Submit>
						<S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
					</S.Submit>
				</S.ProfileLeft>
				<S.ProfileRight>
					<S.AvatarUploader>
						<S.Avatar>
							<img
								src="https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-6/223976073_1507111056297837_3279921896508334407_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hi9PHkNE8DsAX_ktkRP&_nc_ht=scontent.fdad3-2.fna&oh=5886d57a511e31089da483e0ad22f69f&oe=619FAE54"
								alt=""
							/>
						</S.Avatar>
						<S.InputFile type="file" accept=".jpg,.jpeg,.png" />
						<S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
						<S.AvatarUploaderTextContainer>
							<div>Dung lượng tối đa là 1mb</div>
							<div>Định dạng:.JPG, .JPEG, .PNG </div>
						</S.AvatarUploaderTextContainer>
					</S.AvatarUploader>
				</S.ProfileRight>
			</S.ProfileInfo>
		</S.Profile>
	)
}
