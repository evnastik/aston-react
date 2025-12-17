import type { Post } from "../Post.ts";
import styles from "./PostCard.module.css";

interface Props {
  post: Post;
}

export function PostCard({ post }: Props) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
};