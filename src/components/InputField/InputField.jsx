import React from 'react'
import styles from './InputField.module.css'
function InputField({ type = 'text', value, handleChange, placeholder, label}) {
	return (
		<div className={styles.Rb__field}>
			<label>{label}</label>
			<input type={type} name={label} value={value} onChange={handleChange} placeholder={placeholder} />
		</div>
	)
}

export default InputField;