import React from 'react'

const HeaderSlide = props => {
	const data = props.data
	const [activeSlider, setActiveSlider] = useState(0)

	const nextSlide = useCallback(() => {
		const _index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
		setActiveSlider(_index)
	}, [activeSlider, data])

	const prevSlide = () => {
		const _index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1
		setActiveSlider(_index)
	}
	const timeOut = props.timeOut ? props.timeOut : 3000

	return (
		<div>
			<img
				src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Slide_2.jpg"
				alt=""
			/>
		</div>
	)
}

export default HeaderSlide
