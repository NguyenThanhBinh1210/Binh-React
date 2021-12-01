import Reactfrom 'react'

const InputText = ({ ...props }) => {
	return (
		<div className="form-control">
			<input {...props} />
		</div>
	)
}

export default InputText
