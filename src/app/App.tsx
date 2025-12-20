import { MainLayout } from "../shared/layouts/MainLayout";
import type { Post } from "../entities/post/Post";
import { ThemeProvider } from '../shared/lib/theme/ThemeContext';

const posts: Post[] = [
  { id: 1, title: "Первый пост", body: "Заглушка" },
  { id: 2, title: "Второй пост", body: "Заглушка" },
  { id: 3, title: "Третий пост", body: "Заглушка" },
];

function App() {
  return (
    <ThemeProvider>
    <MainLayout posts={posts}/>
    </ThemeProvider>
  );
};

export default App;
