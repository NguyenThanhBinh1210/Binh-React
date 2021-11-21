import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from 'src/assets/styles/utils'

export const StyleHeader = styled.header`
	background-image: linear-gradient(-180deg, #f53d2d, #f63);
	margin-bottom: 3rem;
	width: 100%;
	min-width: max-content;
`
export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
`
export const Logo = styled(Link)`
	margin-right: 4rem;
	svg {
		width: 162px;
		height: 50px;
		fill: #fff;
	}
`
export const StyleForm = styled.form`
	flex-grow: 1;
	display: flex;
	flex-wrap: wrap;
	padding: 4px;
	background: #fff;
	border-radius: 2px;
	height: 4rem;
`
export const StyleInput = styled.input`
	flex-grow: 1;
	border: 0;
	padding-left: 1rem;
`
export const StyleButton = styled(Button)`
	padding-left: 20px;
	padding-right: 20px;
	height: auto;
	svg {
		color: #fff;
		fill: currentColor;
	}
`
export const Cart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto 5rem;
`
export const CartContainer = styled.div`
	position: relative;
`
export const CartIcon = styled(Link)`
	padding: 10px;
	display: inline-block;
	position: relative;
	svg {
		color: #fff;
		stroke: #fff;
		fill: currentColor;
		width: 26px;
		height: 26px;
	}
`
export const CartNumberBadge = styled.div`
	position: absolute;
	border-radius: 4rem;
	min-width: 11px;
	padding: 0px 5px;
	text-align: center;
	border: 2px solid #ee4d2d;
	color: #ee4d2d;
	background-color: #fff;
	line-height: 1;
	top: 2px;
	right: 2px;
`
export const PopoverContent = styled.div``
export const PopoverTitle = styled.div``
export const MiniProductCart = styled.div``
export const MiniProductCartImg = styled.div``
export const MiniProductCartTitle = styled.div``
export const MiniProductCartPrice = styled.div``
export const PopoverFooter = styled.div``
export const MoreProduct = styled.div``
export const ButtonShowCart = styled.div``
