import { useState } from 'react'
import { headerBotItems } from '../../../data/headerBotItems'
import styles from './headerBot.module.scss'
import { HeaderBotItem } from './HeaderBotItem/HeaderBotItem'


export const HeaderBot = () => {

	const [active, setActive] = useState('Online')

	return (
		<div className={styles.header__bot}>
			{headerBotItems.map(i => <HeaderBotItem key={i.label} label={i.label} value={i.value} active={active} onClick={() => setActive(i.label)}/>)}

		</div>
	)
}
