import styles from "../medidas/medidas.module.css";
import Image from "next/image";

function Tienda() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Medidas de seguridad
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
              <Image className={styles.imagen} src="/oso.jpg" width={376} height={376}/>
            </div>
            <div className={styles.partes}>
              
              <p>
              Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva a el Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
              </p>
              <p>
              No obstante, debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tienda
