import Button from '@/components/Button'
import Button2 from '@/components/Button2'
import CardPortada from '@/components/CardPortada'
import styles from '@/styles/page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     
      <section className={styles.portada}>
      
           
          
        <div className={styles.carta}>
          
          <CardPortada />
          
        </div>
        <Image className={styles.fotoPortada} src="/img3.jpg" width={728/1.8} height={1024/1.8} />
      </section>
      <section className={styles.disco}>
        <div>
          <Image className={styles.imagen} src="/disco.jpg" alt="Disco Julia" width={300} height={300}/>
          <h4 className={styles.letraDisco}>YA DISPONIBLE</h4>
        </div>
        <div>
          <h4 className={styles.letraDisco}>CONSÍGUELO YA EN FORMATO CD O VINILO</h4>
          <Button />
        </div>
      </section>
      <section className={styles.zonaFotos}>
        <h2 className={styles.titulofotos}>
          GALERIA
        </h2>
        <article className={styles.fotos}>
          <div>
          <Image className={styles.foto} src='/img4.jpg' alt="Foto1" width={300} height={300}/>
          <Image className={styles.foto} src='/img5.jpg' alt="Foto2" width={300} height={300}/>
          <Image className={styles.foto} src='/img6.jpg' alt="Foto3" width={300} height={300}/>
          </div> 
        </article>
        <Button2 className={styles.boton3}/>
      </section>
      <section className={styles.zonaEntradas}>
        <h2 className={styles.tituloEntradas}>
          ENTRADAS
        </h2>
        <div className={styles.listado}>
          <article className={styles.fechas}>
            <div className={styles.lugar}>
              <h3 className={styles.sala}>
                SALA CAPITOL
              </h3>
              <p>
                Santiago de Compostela | 05/05/2024
              </p>
            </div>
            <div>
              <button className={styles.comprar}>
                COMPRAR
              </button>
            </div>
          </article>
          <article className={styles.fechas}>
            <div className={styles.lugar}>
              <h3 className={styles.sala}>
                WIZINK CENTER
              </h3>
              <p>
                Madrid | 11/05/2024
              </p>
            </div>
            <div>
              <button className={styles.comprar}>
                COMPRAR
              </button>
            </div>
          </article>
          <article className={styles.fechas}>
            <div className={styles.lugar}>
              <h3 className={styles.sala}>
                CAMPOS ELISEOS
              </h3>
              <p>
                Bilbao | 18/05/2024
              </p>
            </div>
            <div>
              <button className={styles.comprar}>
                COMPRAR
              </button>
            </div>
          </article>
          <article className={styles.fechas}>
            <div className={styles.lugar}>
              <h3 className={styles.sala}>
                TEATRO AFUNDACIÓN
              </h3>
              <p>
                Vigo | 20/05/2024
              </p>
            </div>
            <div>
              <button className={styles.comprar}>
                COMPRAR
              </button>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.zonaVideos}>
        <h2 className={styles.tituloVideos}>
          VÍDEOS
        </h2>
        <article className={styles.videos}>
          <div>
            <div div className={styles.bordeVideo}  >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DRUXozv_bE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className={styles.bordeVideo}  >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/quVnM5gUA0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div div className={styles.bordeVideo} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dNWZx7k7ByU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div> 
        </article>
        <Button2 className={styles.boton3}/>
      </section>
    </>
  )
}
