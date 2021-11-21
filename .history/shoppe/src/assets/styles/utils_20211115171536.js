import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	background-color: #ee4d2d;
	border-radius: 2px;
	border: 0;
	color: #fff;
	padding: 1px 6px;
	transition: background 0.2s linear;
	&:hover {
		background-color: #f05d40;
	}
`

export const ButtonLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3rem;
	background: #ee4d2d;
	border-radius: 2px;
	border: 0;
	color: #fff;
	padding: 1px 6px;
	transition: 0.2s background ease;
	&:hover {
		background: #f05d40;
	}
`