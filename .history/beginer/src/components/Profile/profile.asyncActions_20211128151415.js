import { getUserApi } from '../../api'
import {
	getUserFullfilled,
	getUserPending,
	getUserRejected
} from './profile.action'

export const getUser = () => dispatch => {
	dispatch(getUserPending())
	getUserApi()
		.then(res => {
			dispatch(getUserFullfilled(res))
		})
		.catch(err => {
			dispatch(getUserRejected(err))
		})
}
