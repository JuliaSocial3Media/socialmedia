import styles from "@/styles/CardPortada.module.css";
import Link from "next/link";

function CardPortada() {
  return (
    <div className={styles.targeta}>
      <h3 className={styles.h3}>ESCUCHA "EU NON QUERO" EL NUEVO SINGLE DE JULIA</h3>
      
      
      <div className={styles.borde}>
        <Link className={styles.boton} href="/">
          ESCUCHAR
        </Link>
      </div>
        
    
    </div>
  )
}

export default CardPortada
