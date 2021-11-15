import styled from 'styled-components'

export const Footer = styled.footer`
	font-size: 1.4rem;
	color: rgba(0, 0, 0, 0.65);
	padding: 4.2rem 0 3.7rem;
	background-color: #f5f5f5;
	width: 100%;
	min-width: max-content;
`

export const Footer1 = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 6rem;
`

export const Language = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		padding: 0 0.3125rem;
		cursor: pointer;
		&:not(:last-child) {
			border-right: 1px solid rgba(0, 0, 0, 0.2);
		}
	}
`

export const Footer2 = styled.div`
	font-size: 1.2rem;
	text-align: center;
	div {
		line-height: 2;
		&:first-child {
			margin-bottom: 1.5rem;
		}
	}
`

export const Footer3 = styled.div`
	justify-content: center;
	display: flex;
	div:not(:last-child) {
		padding-right: 3rem;
		margin-right: 3rem;
		border-right: 1px solid rgba(0, 0, 0, 0.2);
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
`

export const Footer4 = styled.div`
	.footer-vn-vn_registered_red-png {
		background-size: 617.5% 393.3333333333333%;
		background-position: 34.13848631239936% 84.0909090909091%;
	}
	.footer-vn-background {
		background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde….png);
	}
`
