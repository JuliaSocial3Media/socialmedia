import styles from "../medidas/medidas.module.css";
import Image from "next/image";

function Tienda() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Comentarios
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
              <Image className={styles.imagen} src="/conejo.jpg" width={376} height={376}/>
            </div>
            <div className={styles.partes}>
              
              <p>
              El Titular se reserva el derecho de retirar todos aquellos comentarios que vulneren la legislación vigente, lesivos de los derechos o intereses de terceros, o que, a su juicio, no resulten adecuados para su publicación.
              </p>
              <p>
              El Titular no será responsable de las opiniones vertidas por los usuarios a través del sistema de comentarios, redes sociales u otras herramientas de participación, conforme a lo previsto en la normativa de aplicación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tienda