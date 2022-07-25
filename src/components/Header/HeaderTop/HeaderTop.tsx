import { FaSearch } from 'react-icons/fa'
import styles from './headerTop.module.scss'


export const HeaderTop = () => {
	return (
		<div className={styles.header__top}>
			<div className={styles.header__topName}>
				Users
			</div>
			<div className={styles.header__right}>
				<div className={styles.header__topIcons}>
					<FaSearch />
					<img src="assets/header/bell.svg" alt="" />
				</div>
				<div className={styles.header__topProfile}>
					<span>Jones Ferdinand</span>
					<div className={styles.header__imgContainer}>
						<img src="/assets/header/man.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}
