import { FaCheck } from 'react-icons/fa'
import styles from './footerRightItem.module.scss'


export const FooterRightItem = ({ title, buttonName, button, active, onClick }:
	{ title: string, buttonName: string, button: string, active: string, onClick: () => void }) => {
	const classnames = require('classnames')

	return (
		<div className={styles.footer__RightItem}>
			<div className={styles.footer__wrapper} onClick={onClick}  >
				<div className={classnames(styles.footer__checkbox,
					{ [styles.footer__checkboxActive]: title === active })}>
					<FaCheck />
				</div>
				<div className={styles.footer__RightItemTitle}>
					{title}
				</div>
			</div>
			<div className={classnames(styles.footer__RightItemValue,
				{ [styles.footer__buttonGreen]: button === 'green' },
				{ [styles.footer__buttonWhite]: button === 'white' }
			)}>
				{buttonName}
			</div>
		</div >
	)
}
