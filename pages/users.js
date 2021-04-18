import Link from 'next/link'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserCard from 'components/UserCard'

export default function Users({users}) {
	const searchUser = async () => {
		const username =document.getElementById('username')
		const searchResult =document.getElementById('search-result')

		try {
	      const { data: users} = await axios('http://api.github.com/users/' + username.value)
	      searchResult.innerHTML = users.map((user) => (
			    <Col sm={12} md={6} lg={4}>
					<UserCard detail={user} />
			    </Col>
	      ))
	    } catch (err) {}
	}

	return (
		<div className="my-5">
			<Container>
			<Form>
			  <Form.Group controlId="formBasicEmail">
			    <Form.Control type="text" id="username" placeholder="Search username" />
			  </Form.Group>
			  <Button variant="primary" type="button" onClick={searchUser}>
			    Submit
			  </Button>
			</Form>
			  <Row id="search-result" className="my-5">
				{ users.map((user) => (
				    <Col sm={12} md={6} lg={4}>
						<UserCard detail={user} />
				    </Col>
		      	))}
			  </Row>
			</Container>
		</div>
	)
}

export async function getStaticProps() {
  const { data: users} = await axios.get('http://api.github.com/users')
  return {
    props: {
      users
    }
  }
}