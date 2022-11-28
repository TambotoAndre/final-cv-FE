import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './DSC.JPG';


function BasicExample() {
  return (
    <div class="am" id="am">
        <br></br>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Name :</Card.Title>
        <Card.Text>
          Andre Tamboto
        </Card.Text>
        <Card.Title>Age :</Card.Title>
        <Card.Text>
          20
        </Card.Text>
        <Card.Title>Gender :</Card.Title>
        <Card.Text>
          Man
        </Card.Text>


        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default BasicExample;