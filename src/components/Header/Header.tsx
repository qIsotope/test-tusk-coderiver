import styles from './header.module.scss'
import { HeaderBot } from './HeaderBot/HeaderBot'
import { HeaderTop } from './HeaderTop/HeaderTop'


export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderBot />
		</header>
	)
}
