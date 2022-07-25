import styles from './headerBotItem.module.scss'
interface IHedaerBotItem {
	value: string;
	label: string;
	active: string;
	onClick: () => void;
}

export const HeaderBotItem = (props: IHedaerBotItem) => {
	const classnames = require('classnames')
	return (
		<div className={classnames(styles.header__botItem, { [styles.header__itemActive]: props.label === props.active })}
			onClick={props.onClick}
		>
			<div className={styles.item__title}>
				{props.label}
			</div>
			<div className={styles.item__digit}>
				{props.value}
			</div>
		</div>
	)
}
