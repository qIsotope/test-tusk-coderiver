import styles from './footerItemLeft.module.scss'
interface IFooterLeftItem {
	label: string
	value: string

}

export const FooterLeftItem = (props: IFooterLeftItem) => {
	return (
		<div className={styles.left__item}>
			<div className={styles.left__itemCaption}>
				{props.label}
			</div>
			<div className={styles.left__itemValue}>
				{props.value}
			</div>
		</div>
	)
}
