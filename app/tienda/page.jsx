import styles from "../tienda/tienda.module.css";
import Image from "next/image";

function Tienda() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Tienda
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
              <Image className={styles.imagen} src="/disco.jpg" width={376} height={376}/>
            </div>
            <div className={styles.partes}>
              <h3 className={styles.h3}>
                EU NON QUERO (Formato CD-A)
              </h3>
              <p className={styles.texto}>
                €7,95
              </p>
              <button className={styles.boton}>COMPRAR</button>
              <p>
                POR FAVOR, ROGAMOS QUE NO INTENTE REALIZAR LA COMPRA DEL DISCO EN ESTA U OTRA PLATAFORMA. EL DISCO QUE FIGURO EN EL SITIO WEB ES UN EJEMPLO FICTICIO PARA UNA MATERIA ESCOLA. MUCHAS GRACIAS 😊
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tienda
