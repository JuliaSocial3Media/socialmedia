import styles from "@/styles/Foot.module.css";
import Link from "next/link"

export default function Foot() {
  return (
    <>
      <footer >
        <article className={styles.zonaContactos}>
          <h2 className={styles.tituloContactos}>
            CONTACTO
          </h2>
          <ul className={styles.correos}>
           
              <Link className={styles.mail} href="/contacto">juliasocial3media@gmail.com</Link>
          
              <Link className={styles.mail} href="/contacto">dixitallab@gmail.com</Link>
           
          </ul>
        </article>
        <article className={styles.zona2Contactos}>
          <ul className={styles.zonaEnlaces}>
            <Link className={styles.enlace} href="/condiciones">Condiciones de uso</Link>
            <Link className={styles.enlace} href="/comentarios">Comentarios</Link>
            <Link className={styles.enlace} href="/medidas">Medidas de seguridad</Link>
            <Link className={styles.enlace} href="/cookies">Política de cookies</Link>
          </ul>
        </article>
      </footer>
    </>
  )
}
