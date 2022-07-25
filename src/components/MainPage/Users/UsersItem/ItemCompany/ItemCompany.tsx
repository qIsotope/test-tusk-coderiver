import styles from './itemCompany.module.scss'

interface IItemCompany {
	companySpeciality: string;
	company: string;
}

export const ItemCompany = (props: IItemCompany) => {
	return (
		<div className={styles.item__userCompany}>
			<div className={styles.user__infoTitle}>
				{props.company}
			</div>
			<div className={styles.user__infoSubtitle}>
				{props.companySpeciality}
			</div>
		</div>
	)
}
