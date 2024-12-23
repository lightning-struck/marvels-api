import React from 'react'
import cn from 'classnames'
import s from './addModal.module.scss'
type AddModalProps = {
	setShow: (value: boolean) => void
	isShow: boolean
}
export const AddModal: React.FC<AddModalProps> = ({ setShow, isShow }) => {
	return (
		<div className={cn(s.wrapper, isShow && s.wrapper_show)}>
			<div className={s.title_wrapper}>
				<button onClick={() => setShow(false)} className={s.close}>
					<svg viewBox='0 0 32 32'>
						<path d='M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'></path>
					</svg>
				</button>
				<h3 className={s.title}>Add New Hero</h3>
				<img className={s.image_icon} alt='icon' src={'/images/icon.png'} />
			</div>
			<form className={s.form}>
				<div className={s.forms}>
					<input
						type='text'
						required
						className={s.input}
						placeholder='Type entity name...'
					/>
					<input
						type='text'
						required
						className={s.input}
						placeholder='Type real name or full name of entity...'
					/>
					<div className={s.form_file}>
						<span>Add your image source:</span>
						<input
							type='file'
							required
							className={s.input}
							placeholder='Type real name or full name of entity...'
						/>
					</div>
				</div>
				<button className={s.submit} type='submit'>
					Send
				</button>
			</form>
		</div>
	)
}
