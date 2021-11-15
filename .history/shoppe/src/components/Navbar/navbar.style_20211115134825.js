import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const Navbar = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1rem 0;
`
export const NavMenu = styled.div`
	display: flex;
	margin-bottom: 0;
	li {
		list-style: none;
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

export const PopoverEnterAnimation = keyframes`
	0% {
		transform: scale(0);
		opacity: 0
	}
	to {
		transform: scale(1);
		opacity: 1
	}
`

export const Drawer = styled.div`
	bottom: 0;
	right: 0;
	position: absolute;
	will-change: transform;
	animation: ${PopoverEnterAnimation} 0.2s linear;
	opacity: 1;
	z-index: 1000;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.09);
	:before {
		position: absolute;
		content: '';
		top: -10px;
		left: 0px;
		height: 10px;
		opacity: 0;
		width: 100%;
	}
`
export const PopoverArrow = styled.div`
	border-bottom: 10px solid rgb(255, 255, 255);
	border-left: 14px solid transparent;
	border-right: 14px solid transparent;
	top: -10px;
	position: absolute;
	right: 6px;
	width: 0;
	height: 0;
`
export const PopoverContent = styled.div`
	box-shadow: 0 1px 3.124px 0 rgb(0 0 0 /20%);
	border-radius: 0.125rem;
	overflow: hidden;
	background-color: #fff;
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
export const UserButton = styled.button`
	color: rgba(0, 0, 0, 0.8);
	padding: 1rem 0 1rem 1.5rem;
	display: block;
	outline: none;
	border: none;
	background-color: #fff;
	width: 100%;
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
	margin-left: 0;
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
