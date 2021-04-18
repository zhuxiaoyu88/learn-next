import Head from 'next/head'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/styles.css'

export default function MyApp({ Component, pageProps }) {
	const router = useRouter()
  return (
  	<>
	  	<Head>
	        <title>My page title</title>
	        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	    </Head>
	    <body>
	    	<Navbar bg="primary" variant="dark" expand="lg" fixed="top">
			  <Navbar.Brand href="#home">Githubers</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <Nav.Link href="/" className={router.pathname == "/" ? "active" : ""}>Home</Nav.Link>
			      <Nav.Link href="/users" className={router.pathname == "/users" ? "active" : ""}>Users</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
	    </body>
	  	<Component {...pageProps} />
  	</>
  )
}
