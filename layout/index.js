import Navbar from '../partials/Shared/Navbar'
import Footer from '../partials/Shared/Footer'

export default function Layout({children}) {

  return (
    <main>
      <Navbar />
      <div className="transition">
        {children}
      </div>
      <Footer />
    </main>
  )
}
