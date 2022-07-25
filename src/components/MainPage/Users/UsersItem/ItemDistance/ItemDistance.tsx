import { FaEllipsisV } from 'react-icons/fa'

import styles from './itemDistance.module.scss'





export const ItemDistance = ({ button }: { button: string }) => {
	const classnames = require('classnames')
	return (
		<div className={styles.item__userDistance}>
			<span className={classnames(styles.user__distanceValue,
				{ [styles.low]: button === 'low' },
				{ [styles.normal]: button === 'normal' }

			)}>
				{button}
			</span>
			<div className={styles.item__userButton}>
				<FaEllipsisV />
			</div>
		</div>
	)
}
