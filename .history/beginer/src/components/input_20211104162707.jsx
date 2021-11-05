import React from 'react'

export default function Input({ type, value, onChange, ...props }) {
	return <input type={type === 'number' ? 'text' : type}></input>
}
