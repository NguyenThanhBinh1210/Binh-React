import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import { updateMe } from 'src/pages/Auth/auth.slice'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'

export default function Password() {
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError,
		reset
	} = useForm({
		defaultValues: {
			password: '',
			new_password: '',
			confirm_new_password: ''
		}
	})
	const dispatch = useDispatch()

	const update = async data => {
		const body = {
			password: data.password,
			new_password: data.new_password
		}
		try {
			await dispatch(updateMe(body)).then(unwrapResult)
			reset()
			toast.success('Đổi mật khẩu thành công rồi ạ!', {
				position: 'top-center',
				autoClose: 3000,
				theme: 'colored'
			})
		} catch (err) {
			if (err.status === 422) {
				for (const key in err.data) {
					setError(key, {
						type: 'server',
						message: err.data[key]
					})
				}
				toast.error('Mật khẩu không đúng kìa, cập nhật lại giúp em ạ!', {
					position: 'top-center',
					autoClose: 3000,
					theme: 'colored'
				})
			}
		}
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
							name="password"
							control={control}
							rules={rules.password}
							render={({ field }) => (
								<InputPassword
									name="password"
									onChange={field.onChange}
									value={getValues('password')}
								/>
							)}
						/>
						<ErrorMessage errors={errors} name="password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.InputLabel>
					<S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
					<S.InputLabelContent>
						<Controller
							name="new_password"
							control={control}
							rules={rules.password}
							render={({ field }) => (
								<InputPassword
									name="new_password"
									onChange={field.onChange}
									value={getValues('new_password')}
								/>
							)}
						/>
						<ErrorMessage errors={errors} name="new_password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.InputLabel>
					<S.InputLabelLabel>Nhập lại mật khẩu mới</S.InputLabelLabel>
					<S.InputLabelContent>
						<Controller
							name="confirm_new_password"
							control={control}
							rules={{
								...rules.password,
								validate: {
									samePassword: v =>
										v === getValues('new_password') ||
										'Nhập lại mật khẩu không khớp'
								}
							}}
							render={({ field }) => (
								<InputPassword
									name="confirm_new_password"
									onChange={field.onChange}
									value={getValues('confirm_new_password')}
								/>
							)}
						/>
						<ErrorMessage errors={errors} name="confirm_new_password" />
					</S.InputLabelContent>
				</S.InputLabel>
				<S.Submit>
					<S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
				</S.Submit>
			</PasswordContent>
		</S.Profile>
	)
}
