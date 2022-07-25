import styles from './usersCategories.module.scss'


export const UsersCategories = () => {
	return (
		<div className={styles.users__contentCategories}>
			<div className={styles.categories__itemDetails}>
				User details
			</div>
			<div className={styles.categories__itemCompany}>
				Company name
			</div>
			<div className={styles.categories__itemEmail}>
				Email
			</div>
			<div className={styles.categories__itemDistance}>
				Distance
			</div>
		</div>
	)
}
