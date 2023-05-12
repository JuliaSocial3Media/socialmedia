import styles from "../medidas/medidas.module.css";
import Image from "next/image";

function Tienda() {
  return (
    <main className={styles.lamina}>
      <section  className={styles.seccion}>
      
        <div className={styles.h1}>
          <h1 className={styles.titulo}>
            Condiciones de uso
          </h1>
            
          <div className={styles.seccion}>
            <div className={styles.partes}>
              <Image className={styles.imagen} src="/hamster.jpg" width={376} height={376}/>
            </div>
            <div className={styles.partes}>
              
              <p>
              La utilización del sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:
              </p>
              <li>
              Aviso Legal
              </li>
              <li>
              Política de Privacidad
              </li>
              <li>
              Política de Cookies
              </li>
              <p>
              Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar este sitio Web.
              </p>
              <p>
              El acceso a este sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular.
              </p>
              <p>
              A través de este sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular o sus colaboradores han publicadon por medio de Internet.
              </p>
              <p>
              A tal efecto, usted está obligado y comprometido a NO utilizar cualquiera de los contenidos del sitio Web con fines o efectos ilícitos, prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por el Titular, de otros usuarios o de cualquier usuario de Internet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tienda