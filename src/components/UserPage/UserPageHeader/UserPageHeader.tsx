import { useAppSelector } from '../../../hooks/redux-hooks'
import styles from './userPageHeader.module.scss'

interface IUserPageHeader {
	name: string | undefined
	profession: string | undefined
}

export const UserPageHeader = (props: IUserPageHeader) => {

	const photo = useAppSelector(state => state.user.URL)

	return (
		<div className={styles.user__header}>
			<div className={styles.user__image}>
				{photo
					? <img src={photo} alt="" />
					: <img src='/assets/placeholder.jpg' alt="" />
				}

			</div>
			<div className={styles.user__name}>
				{props.name || 'Loading...'}
			</div>
			<div className={styles.user__proffesion}>
				{props.profession || 'Loading...'}
			</div>

		</div>
	)
}
