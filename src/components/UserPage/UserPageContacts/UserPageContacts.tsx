import { IUsers } from '../../../types/usersTypes'
import { UserPageContact } from '../UserPageContact/UserPageContact'
import styles from './userPageContacts.module.scss'

interface IUserPageContacts{
	data: IUsers | undefined
}


export const UserPageContacts = (props:IUserPageContacts) => {
	const firstAdress = `${props.data?.address.street}, ${props.data?.address.suite},`
	const restAdress = `${props.data?.address.city}, ${props.data?.address.zipcode}`
	return (
		<div className={styles.user__contacts}>
			<UserPageContact label='Adress' value={firstAdress} adress restAdress={restAdress} />
			<UserPageContact label='Phone' value={props.data?.phone} />
			<UserPageContact label='Website' value={props.data?.website} link />
		</div>
	)
}
