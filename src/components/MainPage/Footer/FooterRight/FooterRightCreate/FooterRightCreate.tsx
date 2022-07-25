import { FaPlus } from 'react-icons/fa'
import styles from './footerRightCreate.module.scss'

export const FooterRightCreate = () => {
	return (
		<div className={styles.footer__rightCreate}>
			<div className={styles.footer__createTitle}>
				Create new task
			</div>
			<div className={styles.footer__createIcon}>
				<FaPlus />
			</div>
		</div>
	)
}
