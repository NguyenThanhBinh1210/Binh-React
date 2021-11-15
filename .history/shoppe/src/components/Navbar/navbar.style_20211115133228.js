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
	top: 100%;
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
	}
`
export const PopoverArrow = styled.div``
export const PopoverContent = styled.div``
export const UserLink = styled(Link)``
export const UserButton = styled.button``
export const User = styled.div``
export const UserImage = styled.img``
export const UserName = styled.div`
	${'' /* position: relative; */}
`