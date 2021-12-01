import React, { useCallback, useEffect, useState } from 'react'

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

	useEffect(() => {
		if (props.auto) {
			const sliderAuto = setInterval(() => {
				nextSlide()
			}, timeOut)
			return () => {
				clearInterval(sliderAuto)
			}
		}
	}, [nextSlide, timeOut, props])
	return (
		<div>
			<img
				src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Slide_2.jpg"
				alt=""
			/>
		</div>
	)
}

const HeaderSliderItem = props => (
	;<div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
		<div className="hero-slider__item__image">
			<div className={`shape bg-${props.item.color}`}></div>
			<img src={props.item.img} alt={props.item.title} />
		</div>
	</div>
)

export default HeaderSlide
