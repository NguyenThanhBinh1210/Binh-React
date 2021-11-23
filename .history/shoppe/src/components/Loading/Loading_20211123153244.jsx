import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const styleLoading = styled(LinearProgress)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`

export default function Loading() {
	return <LinearProgress />
}
