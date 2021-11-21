import React from 'react'
const status = useSelector(state => state.app.status)
const dispatch = useDispatch()
const history = useNavigate()
useEffect(() => {
	if (status === 401) {
		dispatch(unauthorize())
		history(path.login)
	}
}, [dispatch, status, history])

export default function Authorization() {
	return <div></div>
}
