import styles from './usersItem.module.scss'
import { ItemUser } from './ItemUser.tsx/ItemUser'
import { ItemCompany } from './ItemCompany/ItemCompany'
import { ItemContacts } from './ItemContacts/ItemContacts'
import { ItemDistance } from './ItemDistance/ItemDistance'
import useFetching from '../../../../hooks/useFetching'
import { IUserPhoto } from '../../../../types/userPhotosTypes'
import { distanceData } from '../../../../data/distanceData'
import { getRandomNumber } from '../../../../utils/getRandomNumber'



interface IUsersItem {
	id: number;
	name: string
	adress: string
	company: string
	companySpeciality: string
	email: string
	site: string
}

export const UsersItem = (props: IUsersItem) => {


	const { data, error } = useFetching<IUserPhoto>('https://random-data-api.com/api/users/random_user')


	return (
		<div className={styles.users__item}>
			<ItemUser name={props.name} adress={props.adress} photo={data?.avatar} error={error} id={props.id} />
			<ItemCompany company={props.company} companySpeciality={props.companySpeciality} />
			<ItemContacts email={props.email} site={props.site} />
			<ItemDistance button={distanceData[getRandomNumber(0, 2)]} />
		</div>
	)

}
