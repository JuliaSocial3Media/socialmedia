import styles from "../contacto/contacto.module.css"

function Contacto() {
  return (
    <>
      <section className={styles.lamina}>
        <div>
          <h1 className={styles.titulo}>Contacto</h1>
        </div>
        <article>
          <div className={styles.sub}>
            <h3 className={styles.h3}>MANTENTE INFORMADO</h3>
            <h2 className={styles.h2}>PREGUNTA LO QUE QUIERAS</h2>
          </div>
          <div  className={styles.partes} >
            <form className={styles.formulario} action="/action.php" method="post">
              <ul>
                <li className={styles.franja}>
                  <label>NOMBRE:</label>
                  <input name="name" type="text" placeholder="Nombre completo" /> 
                </li>
                <li className={styles.franja}>
                  <label>E-MAIL:</label>
                  <input name="mail" type="mail" placeholder="ejemplo@mail.com"/> 
                </li>
                <li className={styles.franja}>
                  <input checked="checked" name="newsletter" type="radio" value="male" /> 
                  Hombre 
                  <input name="newsletter" type="radio" value="female" /> 
                  Mujer
                  <input name="newsletter" type="radio" value="other" /> 
                  Otro
                </li>
                <li className={styles.franja}>
                  <label>TU MENSAJE:</label>
                  <br/>
                  <textarea cols="30" name="comments" rows="5" placeholder="Tu mensaje"/>
                </li>
                <li className={styles.franja}>
                  <input name="terms" type="checkbox" value="tandc" />
                  Acepto Términos
                </li>
                <li className={styles.franja}>
                  <input className={styles.enviar} type="submit" value="Enviar" />
                </li>
              </ul>
            </form>
            <div className={styles.mitad2}>
            <h4>DIRECCIÓN</h4>
            <p>Av. Virxinia Pereira Renda, 4, 36004 Pontevedra</p>
            
            <div>
              <img src="phone.svg" width={30} height={30}/>
              <p>XXX XXX XXX</p>
            </div>
            <div>
              <img src="mail.svg" width={30} height={30}/>
              <p>ejemplo@gmail.com</p>
            </div>
            <h4>SÍGUEME EN LAS REDES SOCIALES</h4>
            <ul>
              <a>
                <img className={styles.rrss} src="facebook.png" width={32} height={32}/>
              </a>
              <a>
                <img className={styles.rrss} src="instagram.png" width={32} height={32}/>
              </a>
              <a>
                <img className={styles.rrss} src="youtube.png" width={32} height={32}/>
              </a>
              <a >
                <img className={styles.rrss} src="twitter.png" width={32} height={32}/>
              </a>
            </ul>
          </div>
          </div>
         
        </article>
      </section>
    </>    
  )
}

export default Contacto
