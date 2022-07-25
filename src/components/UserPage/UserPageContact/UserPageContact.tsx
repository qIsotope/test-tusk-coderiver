import styles from './userPageContact.module.scss'

interface IUserPageContact {
	label: string
	value: string | undefined
	link?: boolean
	adress?: boolean
	restAdress?: string
}

export const UserPageContact = (props: IUserPageContact) => {


	return (
		<div className={styles.user__contact}>
			<span>{props.label}</span>

			{!props.value || props.value === undefined || props.value === 'undefined, undefined,'
				? <div>Loading...</div>
				: <>
					{
						props.link
							? <a href={`http://${props.value}`} target="_blank"> {props.value}</a>
							: <> {props.value}</>
					}
					{props.adress && <div>{props.restAdress}</div>}
				</>
			}
		</div>
	)
}
