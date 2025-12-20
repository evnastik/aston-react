import type { Post } from "../Post.ts";
import styles from "./PostCard.module.css";
import { useTheme } from '../../../shared/lib/theme/ThemeContext'

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  const { theme } = useTheme();
  return (
    <article className={theme === "dark" ? styles.card_dark : styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
};