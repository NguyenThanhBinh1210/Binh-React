import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './counter.reducer'
export default function Counter() {
	// useSelector dùng để lấy dữ liệu trên redux và gán vào count
	const count = useSelector(state => state.counter.count)
	// useDispatch dùng để gửi sự tay đổi lên redux
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(decrease())}>Giam</button>
			<div>{count}</div>
			<button onClick={() => dispatch(increase())}>Tang</button>
		</div>
	)
}

// const mapStateToProps = state => ({
// 	count: state.counter.count
// })

// const mapDispatchTopProps = {
// 	increase,
// 	decrease
// }

// export default connect(mapStateToProps, mapDispatchTopProps)(Counter)
