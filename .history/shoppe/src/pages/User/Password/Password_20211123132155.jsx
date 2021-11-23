import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'

export default function Password() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError
	} = useForm({
		defaultValues: {
			old_password: '',
			new_password: '',
			confirm_new_password: ''
		}
	})
	const dispatch = useDispatch()

	const update = async data => {
		const body = {
			old_password: data.password,
			new_password: data.new_password
		}
		console.log(body)
	}
	return (
		<S.Profile>
			<S.ProfileHeader>
				<S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
				<S.ProfileHeaderSubtitle>
					Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
				</S.ProfileHeaderSubtitle>
			</S.ProfileHeader>
			<PasswordContent onSubmit={handleSubmit(update)}>
				<S.InputLabel>
					<S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
					<S.InputLabelContent>
						<Controller
							name="old_password"
							control={control}
							rules={rules.password}
						/>
						<InputPassword name="old_password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.InputLabel>
					<S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
					<S.InputLabelContent>
						<InputPassword name="new_password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.InputLabel>
					<S.InputLabelLabel>Nhập lại mật khẩu mới</S.InputLabelLabel>
					<S.InputLabelContent>
						<InputPassword name="confirm_new_password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.Submit>
					<S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
				</S.Submit>
			</PasswordContent>
		</S.Profile>
	)
}
