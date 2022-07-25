import { FaEllipsisV } from 'react-icons/fa'
import styles from './itemDistance.module.scss'

export const ItemDistance = () => {
	return (
		<div className={styles.item__userDistance}>
			<span className={styles.user__distanceValue}>
				High
			</span>
			<div className={styles.item__userButton}>
				<FaEllipsisV />
			</div>
		</div>
	)
}
