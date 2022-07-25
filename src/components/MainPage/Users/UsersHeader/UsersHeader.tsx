import { FaSortAmountUp } from 'react-icons/fa'
import styles from './usersHeader.module.scss'

export const UsersHeader = () => {
	return (
		<div className={styles.main__usersHeader}>
			<div className={styles.users__headerTitle}>
				All users
			</div>
			<div className={styles.users__headerSort}>
				<FaSortAmountUp />
				Sort
			</div>
		</div>
	)
}
