
import { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom'
import { sidebarItems } from '../../data/sidebarItems'
import styles from './sidebar.module.scss'
import { SidebarItem } from './SidebarItem/SidebarItem'

export const Sidebar = () => {
	const [active, setActive] = useState('Users')
	const location = useLocation()
	useEffect(() => { location.pathname !== '/' && setActive('') }, [location.pathname])

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__top}>
				<img className={styles.sidebar__topImage} src="/assets/sidebar/logo.png" alt="" />
				<div className={styles.sidebar__topTitle} >Dashboard</div>
				<img src="/assets/sidebar/ideas.svg" alt="" />
			</div>
			{sidebarItems.map(i => <SidebarItem onClick={() => setActive(i.label)}
				icon={i.icon} key={i.label} label={i.label} border={'Settings'} active={active} />)}
		</div>
	)
}
