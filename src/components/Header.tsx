import site from "../data/site"
import '../sass/header.css'

const { header: { title } } = site

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-h1">{title}</h1>
    </header>
  )
}

export default Header