import styles from "@/styles/Button.module.css";
import Link from "next/link";

function Button() {
  return (
    <>
      <div className={styles.borde2}>
        <Link className={styles.boton2} href="/tienda">
          VER MÁS
        </Link>
      </div>
    </>
  )
}

export default Button
