import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from 'src/components/Checkbox/Checkbox'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController.jsx'
import { formatMoney } from 'src/utils/helper.js'
import {
	deletePurchases,
	getCartPurchases,
	updatePurchases
} from './cart.slice.js'
import * as S from './cart.style.js'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'

export default function Cart() {
	const purchases = useSelector(state => state.cart.purchases)
	const [localPurchases, setLocalPurchases] = useState(() =>
		createNextState(purchases, draft => {
			draft.forEach(purchase => {
				purchase.disabled = false
				purchase.checked = false
			})
		})
	)
	const dispatch = useDispatch()

	const isCheckedAll = localPurchases.every(purchase => purchase.checked)
	const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
	const totalCheckedPurchases = checkedPurchases.length
	const totalCheckedPurchasesPrice = checkedPurchases.reduce(
		(result, current) => {
			return result + current.product.price * current.buy_count
		},
		0
	)
	const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce(
		(result, current) => {
			return (
				result +
				(current.product.price_before_discount - current.product.price) *
					current.buy_count
			)
		},
		0
	)

	useEffect(() => {
		setLocalPurchases(localPurchases => {
			const localPurchasesObject = keyBy(localPurchases, '_id')
			return createNextState(purchases, draft => {
				draft.forEach(purchase => {
					purchase.disabled = false
					purchase.checked = Boolean(
						localPurchasesObject[purchase._id]?.checked
					)
				})
			})
		})
	}, [purchases])

	const handleInputQuantity = indexPurchase => value => {
		const newLocalPurchases = createNextState(localPurchases, draft => {
			draft[indexPurchase].buy_count = value
		})
		setLocalPurchases(newLocalPurchases)
	}

	const handleBlurQuantity = indexPurchase => async value => {
		const purchase = localPurchases[indexPurchase]
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft[indexPurchase].disabled = true
			})
		)
		await dispatch(
			updatePurchases({
				product_id: purchase.product._id,
				buy_count: value
			})
		).then(unwrapResult)
		await dispatch(getCartPurchases()).then(unwrapResult)
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft[indexPurchase].disabled = false
			})
		)
	}

	const handleIncreaseAndDecrease = indexPurchase => async value => {
		const purchase = localPurchases[indexPurchase]
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft[indexPurchase].disabled = true
				draft[indexPurchase].buy_count = value
			})
		)

		await dispatch(
			updatePurchases({
				product_id: purchase.product._id,
				buy_count: value
			})
		).then(unwrapResult)
		await dispatch(getCartPurchases()).then(unwrapResult)
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft[indexPurchase].disabled = false
			})
		)
	}

	const handleCheck = indexPurchase => value => {
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft[indexPurchase].checked = value
			})
		)
	}

	const handleCheckAll = () => {
		setLocalPurchases(localPurchases =>
			createNextState(localPurchases, draft => {
				draft.forEach(purchase => {
					purchase.checked = !isCheckedAll
				})
			})
		)
	}

	const handleRemove = indexPurchase => async () => {
		const purchase_id = localStorage[indexPurchase]._id
		await dispatch(deletePurchases([purchase_id])).then(unwrapResult)
		await dispatch(getCartPurchases()).then(unwrapResult)
		toast.success('Đã xóa đơn hàng', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		})
	}

	return (
		<div className="container">
			<div>
				<S.ProductHeader>
					<S.ProductHeaderCheckbox>
						<Checkbox onChange={handleCheckAll} checked={isCheckedAll} />
					</S.ProductHeaderCheckbox>
					<S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
					<S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
					<S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
					<S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
					<S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
				</S.ProductHeader>
				<S.ProductSection>
					{localPurchases.map((purchase, index) => (
						<S.CartItem key={purchase._id}>
							<S.CartItemCheckbox>
								<Checkbox
									checked={purchase.checked}
									onChange={handleCheck(index)}
								/>
							</S.CartItemCheckbox>
							<S.CartItemOverview>
								<S.CartItemOverviewImage to="">
									<img src={purchase.product.image} alt="" />
								</S.CartItemOverviewImage>
								<S.CartItemOverviewNameWrapper>
									<S.CartItemOverviewName to="">
										{purchase.product.name}
									</S.CartItemOverviewName>
								</S.CartItemOverviewNameWrapper>
							</S.CartItemOverview>
							<S.CartItemUnitPrice>
								<span>
									đ{formatMoney(purchase.product.price_before_discount)}
								</span>
								<span>đ{formatMoney(purchase.product.price)}</span>
							</S.CartItemUnitPrice>
							<S.CartItemQuantity>
								<ProductQuantityController
									max={purchase.product.quantity}
									value={purchase.buy_count}
									disabled={purchase.disabled}
									onInput={handleInputQuantity(index)}
									onBlur={handleBlurQuantity(index)}
									onIncrease={handleIncreaseAndDecrease(index)}
									onDecrease={handleIncreaseAndDecrease(index)}
								/>
							</S.CartItemQuantity>
							<S.CartItemTotalPrice>
								<span>
									đ{formatMoney(purchase.product.price * purchase.buy_count)}
								</span>
							</S.CartItemTotalPrice>
							<S.CartItemAction>
								<S.CartItemActionButton>Xóa</S.CartItemActionButton>
							</S.CartItemAction>
						</S.CartItem>
					))}
				</S.ProductSection>
			</div>
			<S.CartFooter>
				<S.CartFooterCheckbox>
					<Checkbox onChange={handleCheckAll} checked={isCheckedAll} />
				</S.CartFooterCheckbox>
				<S.CartFooterButton onClick={handleCheckAll}>
					Chọn tất cả ({purchases.length})
				</S.CartFooterButton>
				<S.CartFooterButton>Xóa</S.CartFooterButton>
				<S.CartFooterSpaceBetween />
				<S.CartFooterPrice>
					<S.CartFooterPriceTop>
						<div>Tổng thanh toán({totalCheckedPurchases} sản phẩm):</div>
						<div>đ{formatMoney(totalCheckedPurchasesPrice)}</div>
					</S.CartFooterPriceTop>
					<S.CartFooterPriceBot>
						<div>Tiết kiệm</div>
						<div>đ{formatMoney(totalCheckedPurchasesSavingPrice)}</div>
					</S.CartFooterPriceBot>
				</S.CartFooterPrice>
				<S.CartFooterCheckout>Mua hàng</S.CartFooterCheckout>
			</S.CartFooter>
		</div>
	)
}
