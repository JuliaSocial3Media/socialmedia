import Image from "next/image"
import styles from "../galeria/galeria.module.css"

function Galeria() {
  return (
    <>
      <main className={styles.lamina}>
        <section  className={styles.seccion}>
          
          <div className={styles.h1}><h1 className={styles.titulo}>Galería</h1></div>
          
          <div className={styles.partes}>
            <div className={styles.imagenes}>
              <Image className={styles.imagen} src="/img1.jpg" width={728/1.6} height={1024/1.6}/>
            
              <Image className={styles.imagen} src="/img2.jpg" width={728/1.6} height={1024/1.6}/>
            
              <Image className={styles.imagen} src="/img3.jpg" width={728/1.6} height={1024/1.6}/>
            </div>
          </div>
          <div className={styles.partes}>
            <div className={styles.imagenes}>
              <Image className={styles.imagen} src="/img4.jpg" width={728/1.6} height={1024/1.6}/>
            
              <Image className={styles.imagen} src="/img5.jpg" width={728/1.6} height={1024/1.6}/>
            
              <Image className={styles.imagen} src="/img6.jpg" width={728/1.6} height={1024/1.6}/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Galeria
