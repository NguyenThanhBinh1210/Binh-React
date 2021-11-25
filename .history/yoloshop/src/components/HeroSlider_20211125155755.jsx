import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
	const data = props.data
	// const activeSlider = 0
	const [activeSlider, setActiveSlider] = useState(0)
	const nextSlide = () => {
		const _index = activeSlider + 1 === data.length ? 0 : activeSlider + 1
		setActiveSlider(_index)
	}
	const prevSlide = () => {
		const _index = activeSlider - 1 === data.length ? 0 : activeSlider + 1
		setActiveSlider(_index)
	}
	return (
		<div className="hero-slider">
			{data.map((item, index) => (
				<HeroSliderItem
					key={index}
					item={item}
					active={index === activeSlider}
				/>
			))}
			{props.control ? (
				<div className="hero-slider__control">
					<div className="hero-slider__control__item">
						<i className="bx bx-chevron-left"></i>
					</div>
					<div className="hero-slider__control__item">
						<div className="index">
							{activeSlider + 1}/{data.length}
						</div>
					</div>

					<div className="hero-slider__control__item">
						<i className="bx bx-chevron-right"></i>
					</div>
				</div>
			) : null}
		</div>
	)
}

HeroSlider.propTypes = {
	data: PropTypes.array.isRequired,
	control: PropTypes.bool
}

const HeroSliderItem = props => (
	<div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
		<div className="hero-slider__item__info">
			<div
				className={`hero-slider__item__info__title color-${props.item.color}`}
			>
				<span> {props.item.title}</span>
			</div>
			<div className="hero-slider__item__info__description">
				<span> {props.item.description}</span>
			</div>
			<div className="hero-slider__item__info__btn">
				<Link to={props.item.path}>
					<button>Xem chi tiết</button>
				</Link>
			</div>
		</div>
		<div className="hero-slider__item__image">
			<div className={`shape bg-${props.item.color}`}></div>
			<img src={props.item.img} alt={props.item.title} />
		</div>
	</div>
)

export default HeroSlider
