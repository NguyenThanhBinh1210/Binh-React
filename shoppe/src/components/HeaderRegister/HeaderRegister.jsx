import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './headerRegister.style'
import PropTypes from 'prop-types'
import { path } from 'src/constants/path'

export default function HeaderRegister({ title }) {
	return (
		<S.Header>
			<S.Container className="container">
				<S.HeaderBrand>
					<S.HeaderIcon to={path.home}>KingShop</S.HeaderIcon>
					<S.HeaderTitle>{title}</S.HeaderTitle>
				</S.HeaderBrand>
				<Link to="" className="link">
					Cần trợ giúp
				</Link>
			</S.Container>
		</S.Header>
	)
}
HeaderRegister.propTypes = {
	title: PropTypes.string
}
