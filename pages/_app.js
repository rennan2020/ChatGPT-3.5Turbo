import Link from "next/link"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <section className="home" id="home">
      
        <div className="footer">
          <p>
            <Link href="/">Texto</Link>
            <Link href="/art">Arte</Link>
          </p>
        </div>
      </section>
    </>
  )
}
