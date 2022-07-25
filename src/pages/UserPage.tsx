import { useParams } from "react-router-dom";
import { UserPageContacts } from "../components/UserPage/UserPageContacts/UserPageContacts";
import { UserPageHeader } from "../components/UserPage/UserPageHeader/UserPageHeader";
import { useGetUserByIdQuery } from "../redux/services/userService";
import styles from '../components/UserPage/userPage.module.scss';


export const UserPage = () => {
	const params = useParams()
	const { data } = useGetUserByIdQuery(Number(params.id))



	return (
		<div className={styles.user__page}>
			<div className={styles.user__pageBackground}></div>
			<UserPageHeader name={data?.name} profession={data?.company.catchPhrase} />
			<UserPageContacts data={data} />
		</div>
	)
}
