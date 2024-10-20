import { SOCIAL_LINKS } from '@/app/constants';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a  target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.instagram}>Instagram</a>
        <a  target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.medium}>Medium</a>
        <a  target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.linkedin}>LinkedIn</a>
        <a  target="_blank" rel="noopener noreferrer" href={SOCIAL_LINKS.github}>GitHub</a>
    </div>
  )
}