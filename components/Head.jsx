import Link from "next/link"
import ButtonsRS from "./ButtonsRS"
import styles from "@/styles/Head.module.css"

function Head() {
  return (
      <main className={styles.contenedor}>
        <ul className={styles.semicontenedor}>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/">Inicio</Link>
          </li>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/galeria">Galería</Link>
          </li>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/videos">Vídeos</Link>
          </li>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/gira">Gira</Link>
          </li>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/tienda">Tienda</Link>
          </li>
          <li className={styles.enlace} >
            <Link className={styles.texto} href="/contacto">Contacto</Link>
          </li>
        </ul>
        <ButtonsRS/>
      </main>
  )
}

export default Head
