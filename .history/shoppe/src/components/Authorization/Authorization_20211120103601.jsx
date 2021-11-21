import React from 'react'

export default function Authorization() {
	const status = useSelector(state => state.app.status)
	const dispatch = useDispatch()
	const history = useNavigate()
	useEffect(() => {
		if (status === 401) {
			dispatch(unauthorize())
			history(path.login)
		}
	}, [dispatch, status, history])

	return null
}
