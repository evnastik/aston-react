import styles from "./MainLayout.module.css";
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { PostList } from '../../widgets/PostList/PostList'
import type { Post } from '../../entities/post/Post'
import { useTheme } from '../../shared/lib/theme/ThemeContext'

type Props = {
    posts : Post[]
}

export function MainLayout({posts} : Props) {
    const { theme } = useTheme();
    return (
        <>    
        <div className={theme === "dark" ? styles.layout_dark : styles.layout}>
        <div className={styles.content}>       
            <Header />
            <PostList posts={posts} />
            <Footer />
        </div> 
        </div> 
        </>
    )
}