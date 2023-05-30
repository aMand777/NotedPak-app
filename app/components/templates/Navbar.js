import Nav from '../fragments/Nav'
import NavLogo from '../fragments/NavLogo'
import NavBrand from '../fragments/NavBrand'
import NavUser from '../fragments/NavUser'

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLogo />
      <NavBrand />
      <NavUser />
    </Nav>
    </>
  )
}

export default Navbar;