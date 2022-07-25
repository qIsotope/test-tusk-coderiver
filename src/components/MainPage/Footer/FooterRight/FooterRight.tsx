import { useState } from 'react'
import { footerRightData } from '../../../../data/footerRightData'
import { FooterHeader } from '../FooterHeader/FooterHeader'
import { FooterSubtitle } from '../FooterSubtitle/FooterSubtitle'
import styles from './footerRight.module.scss'
import { FooterRightCreate } from './FooterRightCreate/FooterRightCreate'
import { FooterRightItem } from './FooterRightItem/FooterRightItem'


export const FooterRight = () => {
	const [active, setActive] = useState('Update ticket report')
	return (
		<div className={styles.footer__right}>
			<FooterHeader title='Tasks' buttonName='View all' />
			<FooterSubtitle subtitle='Today' />
			<FooterRightCreate />
			{footerRightData.map(i => <FooterRightItem title={i.label} buttonName={i.value}
				button={i.button} key={i.label} active={active} onClick={() => setActive(i.label)} />)}
		</div>
	)
}
