import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'

export const Navbar = styled.div`
	font-size: 13px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
`
export const NavMenu = styled.div`
	display: flex;
	margin-bottom: 0;
	justify-content: center;
	align-items: center;
	li:not(:last-child) {
		margin-right: 8px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	li:nth-child(2) {
		margin-left: 10px;
	}
	li {
		cursor: pointer;
		list-style: none;
		&:hover {
			color: hsla(0, 0%, 100%, 0.7);
		}
	}
	li:last-child {
		border-left: 1px solid #fff;
	}
`

export const NavLink = styled(Link)`
	color: #fff;
	margin-left: 1rem;
	margin-right: 1rem;
	&:hover {
		color: hsla(0, 0%, 100%, 0.7);
	}
`

export const UserLink = styled(Link)`
	color: rgba(0, 0, 0, 0.8);
	padding: 1rem 0 1rem 1.5rem;
	display: block;
	&:hover {
		background-color: #fafafa;
		color: #00bfa5;
	}
`

// Link -> Button
export const UserButton = styled.button`
	color: rgba(0, 0, 0, 0.8);
	padding: 1rem 0 1rem 1.5rem;
	display: block;
	outline: none;
	border: none;
	background-color: #fff;
	width: 100%;
	text-align: left;
	&:hover {
		background-color: #fafafa;
		color: #00bfa5;
	}
`
export const User = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	color: #fff;
	cursor: pointer;
	margin-left: 10px;
	margin-right: 0;
	${Drawer} {
		width: 15rem;
		top: 135%;
	}
`
export const UserImage = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 100rem;
	object-fit: cover;
`
export const UserName = styled.div`
	padding-left: 5px;
	max-width: 15rem;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const NavConnection = styled.div``
export const ConnectLink = styled(Link)`
	color: #fff;
	margin-right: 10px;
	padding-right: 10px;
	:hover {
		color: hsla(0, 0%, 100%, 0.7);
	}
	&:not(:last-child) {
		border-right: 1px solid hsla(0, 0%, 100%, 0.7);
	}
`
