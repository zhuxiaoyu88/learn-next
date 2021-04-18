import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function UserCard(props) {
	return (
		<div className="user-card mb-3">
			<Card>
			  <Card.Img variant="top" src={props.detail.avatar_url} />
			  <Card.Body>
			    <Card.Title>{props.detail.login}</Card.Title>
			    <Card.Text>
			      Some quick example text to build on the card title and make up the bulk of
			      the card's content.
			    </Card.Text>
			    <Link href={props.detail.repos_url}>
			    	<a className="btn btn-primary" target="_blank">
			    		{`${props.detail.login}'s Repo`}
			    	</a>
			    </Link>
			  </Card.Body>
			</Card>
		</div>
	)
}
