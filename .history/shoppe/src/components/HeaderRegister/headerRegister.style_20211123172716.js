import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
	box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
	width: 100%;
	min-width: max-content;
`

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem 2rem;
`

export const HeaderBrand = styled.div`
	display: flex;
	align-items: flex-end;
`

export const HeaderIcon = styled(Link)`
	margin-top: 0.5rem;
	font-size: 3rem;
	font-weight: bold;
	color: #ee4d2d;
`

export const HeaderTitle = styled.div`
	color: #222;
	font-size: 2.4rem;
	margin-left: 1.2rem;
`
