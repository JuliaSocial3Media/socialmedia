import styles from "@/styles/ButtonsRS.module.css";
import Image from "next/image"
import Link from "next/link";

export default function ButtonsRS () {
  return (
    <>
      <ul className={styles.seccion}>
        <li>
          <Link href="https://www.facebook.com/profile.php?id=100092616607479">
            <button className={styles.logo}>
              <Image src="/facebook.png" alt="Facebook Logo" width={38} height={38} />
            </button>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/juliasocial3media/">
            <button className={styles.logo}>
              <Image src="/instagram.png" alt="Instagram Logo" width={38} height={38} />
            </button>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/juliasocial3m">
            <button className={styles.logo}>
              <Image src="/twitter.png" alt="Twitter Logo" width={38} height={38} />
            </button>
          </Link>
        </li>
      </ul>
    </>
  )
}
