import { useGetUsersQuery } from '../../../redux/services/userService'
import MyLoader from '../../_UI-elements/MyLoader/MyLoader'
import styles from './users.module.scss'
import { UsersCategories } from './UsersCategories/UsersCategories'
import { UsersHeader } from './UsersHeader/UsersHeader'
import { UsersItem } from './UsersItem/UsersItem'


export const Users = () => {

	const { data, error, isLoading, isFetching } = useGetUsersQuery('')

	return (
		<section className={styles.users}>
			<UsersHeader />
			<div className="main__usersContent">
				<UsersCategories />
				{error && <div className={styles.error__message}>Fail with fetching data</div>}
				{isLoading || isFetching
					? [...new Array(10)].map((_, i) => <MyLoader key={i} />)
					: <>
						{data?.map((user) => <UsersItem key={user.id} name={user.name} adress={user.address.city} company={user.company.name} id={user.id}
							companySpeciality={user.company.bs} email={user.email} site={user.website} />)}
					</>
				}

			</div>
		</section>
	)
}
