'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { useState } from 'react'
import cn from 'classnames'
import { ICharacter } from './types/character.interface'
import { AddModal } from './components/AddModal/AddModal'
export default function Home() {
	const [showSidebar, setShowSidebar] = useState<boolean>(false)
	const [character, setCharacter] = useState<ICharacter>()
	const [showAddModal, setShowAddModal] = useState<boolean>(false)
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<button
					onClick={() => setShowSidebar(true)}
					className={cn(styles.burger, showSidebar && styles.burger_active)}
				>
					Heroes
				</button>
				<button
					onClick={() => setShowAddModal(true)}
					className={styles.add_hero}
				>
					<svg viewBox='0 0 32 32'>
						<path d='M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z'></path>
					</svg>
				</button>
				<h1 className={styles.title}>Spider-Man Heroes</h1>
				<Sidebar
					character={character}
					setCharacter={setCharacter}
					setOpen={setShowSidebar}
					isOpen={showSidebar}
				/>
				<div className={styles.bg}>
					<Image fill alt='bg' src={'/images/bg.jpg'} />
				</div>
				<div className={styles.detail_hero}>
					{character && (
						<img
							className={styles.detail_hero_image}
							src={character?.image}
							alt={character?.name}
						/>
					)}
					{character && (
						<div className={styles.detail_hero_content}>
							<h2 className={styles.detail_hero_title}>{character?.name}</h2>
							<p className={styles.detail_hero_description}>
								Full Name: {character?.fullName}
							</p>
						</div>
					)}
				</div>
				<div
					onClick={() => setShowAddModal(false)}
					className={cn(styles.layout, !showAddModal && styles.layout_hidden)}
				></div>
				<AddModal isShow={showAddModal} setShow={setShowAddModal} />
			</main>

			<footer className={styles.footer}></footer>
		</div>
	)
}
