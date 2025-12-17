import styles from "./MainLayout.module.css";
import { Footer } from '../../widgets/LayoutFooter/Footer'
import { Header } from '../../widgets/LayoutHeader/Header'
import { PostList } from '../../widgets/PostList/PostList'
import type { Post } from '../../entities/post/Post'

type Props = {
    posts : Post[]
}

export function MainLayout({posts} : Props) {
    return (
        <>    
        <div className={styles.layout}>
        <div className={styles.content}>       
            <Header />
            <PostList posts={posts} />
            <Footer />
        </div> 
        </div> 
        </>
    )
}