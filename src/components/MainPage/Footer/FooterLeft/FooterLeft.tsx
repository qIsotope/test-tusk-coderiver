import { footerLeftData } from '../../../../data/footerLeftData'
import { FooterHeader } from '../FooterHeader/FooterHeader'
import { FooterSubtitle } from '../FooterSubtitle/FooterSubtitle'
import styles from './footerLeft.module.scss'
import { FooterLeftItem } from './FooterLeftItem/FooterLeftItem'


export const FooterLeft = () => {
	return (
		<div className={styles.footer__left}>
			<FooterHeader title='Unresolved tickets' buttonName='View details' />
			<FooterSubtitle subtitle='Group:' value='Support' />
			{footerLeftData.map(i => <FooterLeftItem key={i.label} label={i.label} value={i.value} />)}
		</div>
	)
}
