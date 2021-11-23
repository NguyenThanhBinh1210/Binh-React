import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const StyleLoading = styled(LinearProgress)`
	position: fixed !important;
	top: 0;
	left: 0;
	right: 0;
`

export default function Loading() {
	const loading = useSelector(state => state.app.loading)
	return <StyleLoading color="secondary" />
}
