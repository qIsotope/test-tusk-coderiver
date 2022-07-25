
import styles from './footerSubtitle.module.scss'
export const FooterSubtitle = ({ subtitle, value }: { subtitle: string, value?: string }) => {
	return (
		<div className={styles.footer__subtitle}>
			{subtitle} <span>{value}</span>
		</div>
	)
}
