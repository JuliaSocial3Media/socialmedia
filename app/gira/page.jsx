import styles from "../gira/gira.module.css";

function Gira() {
  return (
    <main className={styles.lamina}>
    <section  className={styles.seccion}>
      <div className={styles.h1}>
        <h1 className={styles.titulo}>
          Gira
        </h1> 
        <div className={styles.seccion}>
          <div className={styles.partes}>
          
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
        </div>
        </div>
      </section>
    </main>
  )
}

export default Gira
