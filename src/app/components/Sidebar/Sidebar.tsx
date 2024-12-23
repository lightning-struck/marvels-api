'use client'
import React from 'react'
import s from './sidebar.module.scss'
import cn from 'classnames'
import { ICharacter } from '@/app/types/character.interface'
type SidebarProps = {
	isOpen: boolean
	setOpen: (value: boolean) => void
	setCharacter: (value: ICharacter) => void
	character: ICharacter | undefined
}
const list: ICharacter[] = [
	{
		id: 1,
		name: 'Green Goblin',
		image: '/images/goblin.jpg',
		fullName: 'Norman Osborn',
	},
	{
		id: 2,
		name: 'Doctor Octopus',
		image: '/images/otto.jpg',
		fullName: 'Otto Octavius',
	},
	{
		id: 3,
		name: 'Venom',
		image: '/images/venom.jpg',
		fullName: 'Eddy Broke',
	},
]
export const Sidebar: React.FC<SidebarProps> = ({
	isOpen,
	setOpen,
	setCharacter,
	character,
}) => {
	return (
		<div className={cn(s.sidebar_wrapper, !isOpen && s.sidebar_wrapper_hidden)}>
			<div className={s.sidebar_title_wrapper}>
				<h2 className={s.sidebar_title}>Heroes</h2>
				<button onClick={() => setOpen(false)} className={s.sidebar_close}>
					<svg viewBox='0 0 32 32'>
						<path d='M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z'></path>
					</svg>
				</button>
			</div>

			<div className={s.sidebar_list}>
				{list.map(hero => (
					<button
						onClick={() => setCharacter(hero)}
						className={cn(
							s.sidebar_btn,
							character?.id === hero.id && s.sidebar_btn_active
						)}
						key={hero.id}
					>
						{hero.name}
					</button>
				))}
			</div>
		</div>
	)
}
