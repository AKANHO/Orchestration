import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home(req, res) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to the Home page
          </h1>
          <p className={styles.description}>
            <Link href= "/api/people">
            <a  className={styles.card}>API n°1</a>
            </Link>
            <Link href= "/api/vehicles">
            <a  className={styles.card}>API n°2</a>
            </Link>
            
            
          </p>
      </main>
    </div>
    
  );
  
} 