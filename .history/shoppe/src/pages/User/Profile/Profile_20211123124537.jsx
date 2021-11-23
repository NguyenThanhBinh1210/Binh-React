import React from 'react'
import InputText from 'src/components/InputText/InputText'
import * as S from './profile.style'
import range from 'lodash/range'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getDate, getMonth, getYear, isExists } from 'date-fns'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { updateMe } from 'src/pages/Auth/auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export default function Profile() {
	const profile = useSelector(state => state.auth.profile)
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		setError
	} = useForm({
		defaultValues: {
			name: profile.name || '',
			phone: profile.phone || '',
			address: profile.address || '',
			date: profile.date_of_birth
				? getDate(new Date(profile.data_of_birth))
				: '',
			month: profile.date_of_birth
				? getMonth(new Date(profile.data_of_birth))
				: '',
			year: profile.date_of_birth
				? getYear(new Date(profile.data_of_birth))
				: ''
		}
	})

	const dispatch = useDispatch()

	const update = async data => {
		const body = {
			name: data.name,
			phone: data.phone,
			address: data.address,
			date_of_birth: new Date(data.year, data.month, data.year).toISOString()
		}
		try {
			const res = await dispatch(updateMe(body)).then(unwrapResult)
			toast.success('Cập nhật thông tin thành công rồi ạ', {
				position: 'top-center'
			})
		} catch (err) {}
	}

	const validateDate = () =>
		isExists(
			Number(getValues('year')),
			Number(getValues('month')),
			Number(getValues('day'))
		) || 'Ngày sinh không đúng'
	return (
		<S.Profile>
			<S.ProfileHeader>
				<S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
				<S.ProfileHeaderSubtitle>
					Quản lí thông tin hồ sơ để bảo mật tài khoản
				</S.ProfileHeaderSubtitle>
			</S.ProfileHeader>
			<S.ProfileInfo>
				<S.ProfileLeft onSubmit={handleSubmit(update)}>
					<S.InputLabel>
						<S.InputLabelLabel>Email</S.InputLabelLabel>
						<S.InputLabelContent>
							<S.InputLabelContentText>{profile.email}</S.InputLabelContentText>
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Tên</S.InputLabelLabel>
						<S.InputLabelContent>
							<Controller
								name="name"
								control={control}
								rules={rules.name}
								render={({ field }) => (
									<InputText
										name="name"
										type="text"
										onChange={field.onChange}
										value={getValues('name')}
									/>
								)}
							/>
							<ErrorMessage name="name" errors={errors} />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
						<S.InputLabelContent>
							<Controller
								name="phone"
								control={control}
								rules={rules.phone}
								render={({ field }) => (
									<InputText
										name="phone"
										type="text"
										onChange={field.onChange}
										value={getValues('phone')}
									/>
								)}
							/>
							<ErrorMessage name="phone" errors={errors} />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
						<S.InputLabelContent>
							<Controller
								name="address"
								control={control}
								rules={rules.address}
								render={({ field }) => (
									<InputText
										name="address"
										type="text"
										onChange={field.onChange}
										value={getValues('address')}
									/>
								)}
							/>
							<ErrorMessage name="address" errors={errors} />
						</S.InputLabelContent>
					</S.InputLabel>
					<S.InputLabel>
						<S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
						<S.InputLabelContent>
							<S.DateSelect>
								<Controller
									name="date"
									control={control}
									rules={{
										validate: {
											date: validateDate
										}
									}}
									render={({ field }) => (
										<S.SelectDate
											title="Ngày"
											options={range(1, 32).map(item => ({
												name: item,
												value: item
											}))}
											onChange={field.onChange}
											value={getValues('date')}
										/>
									)}
								/>
								<Controller
									name="month"
									control={control}
									rules={{
										validate: {
											date: validateDate
										}
									}}
									render={({ field }) => (
										<S.SelectDate
											title="Tháng"
											options={range(0, 12).map(item => ({
												name: item + 1,
												value: item
											}))}
											onChange={field.onChange}
											value={getValues('month')}
										/>
									)}
								/>
								<Controller
									name="year"
									control={control}
									rules={{
										validate: {
											date: validateDate
										}
									}}
									render={({ field }) => (
										<S.SelectDate
											title="Năm"
											options={range(1900, 2021).map(item => ({
												name: item,
												value: item
											}))}
											onChange={field.onChange}
											value={getValues('year')}
										/>
									)}
								/>
							</S.DateSelect>
						</S.InputLabelContent>
						<S.ErrorMessage>
							<ErrorMessage name="date" errors={errors} />
						</S.ErrorMessage>
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
