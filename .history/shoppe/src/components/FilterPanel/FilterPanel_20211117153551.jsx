import React from 'react'
import { NavLink } from 'react-router-dom'
import { path } from 'src/constants/path'
import RatingStar from '../RatingStar/RatingStar'
import * as S from './filterPanel.style'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
import useQuery from 'src/hooks/useQuery'
import { Controller, useForm } from 'react-hook-form'

export default function FilterPanel({ categories, filters }) {
	const navigate = useNavigate()
	const query = useQuery()
	const {
		control,
		handleSubmit,
		getValues,
		formState: { errors },
		clearErrors,
		reset,
		setValue
	} = useForm({
		defaultValues: {
			minPrice: filters.minPrice || '',
			maxPrice: filters.maxPrice || ''
		}
	})
	const validPrice = () => {
		const minPrice = getValues('minPrice')
		const maxPrice = getValues('maxPrice')
	}
	return (
		<div>
			<S.CategoryTitleLink to={path.home}>
				<svg
					viewBox="0 0 12 10"
					className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate"
				>
					<g fillRule="evenodd" stroke="none" strokeWidth={1}>
						<g transform="translate(-373 -208)">
							<g transform="translate(155 191)">
								<g transform="translate(218 17)">
									<path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
									<path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
									<path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
								</g>
							</g>
						</g>
					</g>
				</svg>
				Tất cả danh mục
			</S.CategoryTitleLink>
			<S.CategoryList>
				{categories.map(category => (
					<S.CategoryItem key={category._id}>
						<NavLink to={path.home + `?category=${category._id}`}>
							{category.name}
						</NavLink>
					</S.CategoryItem>
				))}
			</S.CategoryList>
			<S.CategoryTitle>
				<svg
					enableBackground="new 0 0 15 15"
					viewBox="0 0 15 15"
					x={0}
					y={0}
					className="shopee-svg-icon "
				>
					<g>
						<polyline
							fill="none"
							points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeMiterlimit={10}
						/>
					</g>
				</svg>
				Bộ lọc tìm kiếm
			</S.CategoryTitle>

			<S.FilterGroup>
				<S.FilterGroupHeader>Khoản giá</S.FilterGroupHeader>
				<S.PriceRange>
					<S.PriceRangeGroup>
						<Controller
							name="minPrice"
							control={control}
							rules={{ validate: { validPrice } }}
						/>
						<S.PriceRangeInput placeholder="Từ" />
						<S.PriceRangeLine />
						<S.PriceRangeInput placeholder="Đến" />
					</S.PriceRangeGroup>
					<S.PriceErrorMessage>
						Vui lòng điền khoản giá phù hợp
					</S.PriceErrorMessage>
					<S.PriceRangeButton>Áp dụng</S.PriceRangeButton>
				</S.PriceRange>
			</S.FilterGroup>

			<S.FilterGroup>
				<S.FilterGroupHeader>Đánh giá</S.FilterGroupHeader>
				<RatingStar />
			</S.FilterGroup>
			<S.RemoveFilterButton>Xóa tất cả</S.RemoveFilterButton>
		</div>
	)
}

FilterPanel.propTypes = {
	categories: PropTypes.array.isRequired,
	filters: PropTypes.object.isRequired
}