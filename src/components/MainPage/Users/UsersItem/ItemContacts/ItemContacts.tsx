import styles from './itemContacts.module.scss'

interface IItemContacts {
	email: string;
	site: string;
}

export const ItemContacts = (props: IItemContacts) => {
	return (
		<div className={styles.item__userEmail}>
			<div className={styles.user__infoTitle}>
				{props.email}
			</div>
			<div className={styles.user__infoSubtitle}>
				{props.site}
			</div>
		</div>
	)
}
