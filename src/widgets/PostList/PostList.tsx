import type { Post } from "../../entities/post/Post.ts";
import { PostCard } from "../../entities/post/ui/PostCard";
import styles from "./PostList.module.css";

type Props = {
    posts : Post[]
}

export function PostList({posts} : Props){
  return (
    <section className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};