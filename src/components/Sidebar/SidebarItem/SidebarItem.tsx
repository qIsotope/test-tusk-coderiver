import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebarItem.module.scss'

interface ISidebarItem {
	icon: ReactNode;
	label: string
	border: string
	active: string
	onClick: () => void
}


export const SidebarItem = (props: ISidebarItem) => {
	const classnames = require('classnames');
	return (
		<>
			{
				props.label === 'Users'
					? < NavLink to=''
						className={classnames(styles.sidebar__item, { [styles.item__settings]: props.label === props.border },
							{ [styles.item__active]: props.label === props.active })
						}
						onClick={props.onClick}
					>
						<div className={styles.sidebar__itemIcon}>
							{props.icon}
						</div>
						<div className={styles.sidebar__itemLabel}>
							{props.label}
						</div>
					</NavLink >

					: < div
						className={classnames(styles.sidebar__item, { [styles.item__settings]: props.label === props.border },
							{ [styles.item__active]: props.label === props.active })
						}
						onClick={props.onClick}
					>
						<div className={styles.sidebar__itemIcon}>
							{props.icon}
						</div>
						<div className={styles.sidebar__itemLabel}>
							{props.label}
						</div>
					</div >
			}
		</>
	)
}


