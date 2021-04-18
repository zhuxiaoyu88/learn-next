import Link from 'next/link'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Index() {
	return (
		<Jumbotron className="my-5">
		  <h1>Hello, world!</h1>
		  <p>
		    This is a simple hero unit, a simple jumbotron-style component for calling
		    extra attention to featured content or information.
		  </p>
		  <Link variant="primary" href="/users">
		  	Go to users
		  </Link>
		</Jumbotron>
	)
}
