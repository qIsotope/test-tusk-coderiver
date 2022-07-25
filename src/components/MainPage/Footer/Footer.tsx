import styles from './footer.module.scss'
import { FooterLeft } from './FooterLeft/FooterLeft'
import { FooterRight } from './FooterRight/FooterRight'

export const Footer = () => {
	return (
		<section className={styles.footer}>
			<FooterLeft />
			<FooterRight />
		</section>
	)
}
