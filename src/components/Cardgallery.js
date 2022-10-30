import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardgallery = (props) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.judul}</Card.Title>
        <Card.Text>
          {props.deskripsi}
        </Card.Text>
        <Button variant="primary" href='https://www.instagram.com/st_setya_dharma/' target='_blank'>Lihat</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardgallery;