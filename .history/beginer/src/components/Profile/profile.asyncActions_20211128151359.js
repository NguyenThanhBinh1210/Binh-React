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
