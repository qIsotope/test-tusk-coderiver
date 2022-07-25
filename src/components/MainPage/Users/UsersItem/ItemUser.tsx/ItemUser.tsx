import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../../../hooks/redux-hooks';
import { updateURL } from '../../../../../redux/slices/userSlice';
import styles from './userItemUser.module.scss'

interface IItemUser {
	name: string;
	adress: string;
	photo: string | undefined;
	id: number;
	error: Error | undefined;
}

export const ItemUser = (props: IItemUser) => {
	const dispatch = useAppDispatch()

	const updateImg = () => {
		if (props.photo) {
			dispatch(updateURL(props.photo))
			localStorage.setItem('image', props.photo)
		}
	}
	return (
		<div className={styles.item__user}>
			<div className={styles.item__userImage}>
				{!props.photo || props.error
					? <img src='/assets/placeholder.jpg' alt="" />
					: <img src={props.photo} alt="" />
				}
			</div>
			<div className={styles.user__info}>
				<NavLink onClick={updateImg} to={'/users/' + props.id} className={styles.user__infoTitle}>
					{props.name}
				</NavLink>
				<div className={styles.user__infoSubtitle}>
					{props.adress}
				</div>
			</div>
		</div>
	)
}
