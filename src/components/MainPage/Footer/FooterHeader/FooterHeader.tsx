import styles from './footerHeader.module.scss'

interface IFooterHeader {
	title: string
	buttonName: string
}

export const FooterHeader = (props: IFooterHeader) => {
	return (
		<div className={styles.footer__header}>
			<div className={styles.footer__title}>
				{props.title}
			</div>
			<div className={styles.left__button}>
				{props.buttonName}
			</div>
		</div>
	)
}
