import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";
import './global.css'
import styles from './App.module.css'
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author = "Daniel Rosa"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae esse tenetur obcaecati vel nihil aliquam libero odio eum magnam laborum vero qui sed ex dignissimos asperiores, officiis accusamus? Corporis."
          />
          <Post
            author = "Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae esse tenetur obcaecati vel nihil aliquam libero odio eum magnam laborum vero qui sed ex dignissimos asperiores, officiis accusamus? Corporis."
          />
        </main>
      </div>
    </div>
  )
}

