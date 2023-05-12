import styles from "../medidas/medidas.module.css";
import Image from "next/image";

function Tienda() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Política de cookies
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
              <Image className={styles.imagen} src="/estrella.jpg" width={376} height={376}/>
            </div>
            <div className={styles.partes}>
              
              <p>
              En la página Política de Cookies puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies.
              </p>
              <p>
              El Titular sólo obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web:
              </p>
              <li>
                El nombre de dominio del proveedor (PSI) y/o dirección IP que les da acceso a la red.
              </li>
              <li>
              La fecha y hora de acceso al sitio Web.
              </li>
              <li>
              La dirección de Internet origen del enlace que dirige al sitio Web.
              </li>
              <li>
              El número de visitantes diarios de cada sección.
              </li>
              <li>
              La información obtenida es totalmente anónima, y en ningún caso puede ser asociada a un Usuario concreto e identificado.
              </li>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tienda