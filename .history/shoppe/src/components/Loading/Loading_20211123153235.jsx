import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const styleLoading = styled(LinearProgress)`
	position: fixed;
`

export default function Loading() {
	return <LinearProgress />
}
