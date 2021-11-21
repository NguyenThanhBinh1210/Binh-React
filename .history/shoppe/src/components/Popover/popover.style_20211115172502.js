import styled, { keyframes } from 'styled-components'

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
	bottom: -300px;
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
