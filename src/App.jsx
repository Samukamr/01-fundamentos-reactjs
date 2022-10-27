import { Header } from './Components/Header';
import { Post } from './components/Post';
import { Sidebar } from './Components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name; "", role: ""  }
// publishedAt: Date
// Content: String

const posts = [ 
{      
  id: 1,
  author: {
    avatarUrl: 'https://github.com/samukamr.png',
    name: 'Samuel Rocha',
    role: 'Web Developer'
  }, 
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2022-10-10 20:00:00'),
 },
 {      
  id: 2,
  author: {
    avatarUrl: 'https://github.com/maykbrito.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat'
  }, 
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2022-10-09 20:00:00'),
 }
];

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div> 
  )
}


