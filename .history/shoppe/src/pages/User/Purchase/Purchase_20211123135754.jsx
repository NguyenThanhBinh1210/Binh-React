import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { purchaseStatus } from 'src/constants.status'
import { getPurchases } from '../user.slice'
import useQuery from 'src/hooks/useQuery'
import { unwrapResult } from '@reduxjs/toolkit'
import { path } from 'src/constants/path.js'
import qs from 'query-string'

import * as S from './purchase.style'

export default function Purchase() {
	const [purchases, setPurchases] = useState([])
	const dispatch = useDispatch()
	const query = useQuery()
	const status = useMemo(() => query.status || purchaseStatus.all, [query])
	useEffect(() => {
		dispatch(getPurchases(status))
			.then(unwrapResult)
			.then(res => {
				setPurchases(res.data)
			})
	}, [status, dispatch])

	const handleActive = value => () => Number(value) === Number(status)
	return (
		<div>
			<S.PurchaseTabs>
				<S.PurchaseTabItem
					to={path.purchase}
					isActive={handleActive(purchaseStatus.all)}
				>
					Tất cả
				</S.PurchaseTabItem>
				<S.PurchaseTabItem to={{
					pathname: path.purchase,
					search: `?${}`
				}}>Chờ xác nhận</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Chờ lấy hàng</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đang vận chuyển</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đã giao</S.PurchaseTabItem>
				<S.PurchaseTabItem to="">Đã hủy</S.PurchaseTabItem>
			</S.PurchaseTabs>
			<S.PurchaseList>
				<S.OrderCard>
					<S.OrderCardContent>
						<S.OrderCardDetail>
							<img
								src="https://cf.shopee.vn/file/0c6b05420dd5d32f15ccbc212796fe3a_tn"
								alt=""
							/>
							<S.OrderContent>
								<S.OrderName>
									Áo Sweater Nam Nữ Coffeee, Áo Hoodie form rộng unisex ST55
								</S.OrderName>
								<S.OrderQuantity>x 1</S.OrderQuantity>
							</S.OrderContent>
						</S.OrderCardDetail>
						<S.OrderCardPrice>đ1000</S.OrderCardPrice>
					</S.OrderCardContent>
					<S.OrderCardButtonsContainer>
						<S.PurchaseButton to="" light={1}>
							Xem sản phẩm
						</S.PurchaseButton>
						<S.TotalPrice>
							<S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
							<S.TotalPricePrice>đ2000</S.TotalPricePrice>
						</S.TotalPrice>
					</S.OrderCardButtonsContainer>
				</S.OrderCard>
			</S.PurchaseList>
		</div>
	)
}
