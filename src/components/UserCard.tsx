import Card from 'react-bootstrap/Card';
import { UserType } from '../types/user';

function UserCard({user}: {user: UserType}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
        <Card.Text>
          jhfgsdjks
        </Card.Text>
        <Card.Link href={"users/" + user.id}>Card Link</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default UserCard;