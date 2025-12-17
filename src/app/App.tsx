import { MainLayout } from "../shared/layouts/MainLayout";
import type { Post } from "../entities/post/Post";

const posts: Post[] = [
  { id: 1, title: "Первый пост", body: "Заглушка" },
  { id: 2, title: "Второй пост", body: "Заглушка" },
  { id: 3, title: "Третий пост", body: "Заглушка" },
];

function App() {
  return (
    <MainLayout posts={posts}/>
  );
};

export default App;
