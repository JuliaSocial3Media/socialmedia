import styles from "@/styles/Button2.module.css";
import Link from "next/link";

function Button2() {
  return (
    <>
      <div className={styles.borde2}>
        <Link className={styles.boton2} href="/">
          Ver Más
        </Link>
      </div>
    </>
  )
}

export default Button2