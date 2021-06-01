import React,{useState} from 'react'
import {Form, Button,Modal } from 'react-bootstrap'
import '../App.css'
import StarRatingComponent from 'react-star-rating-component';

const Add = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState('')

    const onStarClick=(nextValue, prevValue, name)=> {
        setValue(nextValue)
        props.setRateFilter(nextValue)
        
      }

     

    return (
        <div>
            <div className='filter'>
             <div className='filterrate'>
                <h4 style={{fontWeight:'bold'}}className="mb-0"> Filter By Stars</h4>
                <StarRatingComponent className='rating'
                    name="rate1"
                    starCount={5}
                    //onChange={()=>props.setRateFilter(value)}
                    value={value}
                    onStarClick={onStarClick}
                    
                />
            </div>
            <Button className='add' variant="info" onClick={handleShow}>New Movie</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='new'>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control onChange={(e) => props.setTitre(e.target.value)} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control onChange={(e) => props.setImage(e.target.value)} type="text" placeholder="Image Link" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => props.setDesc(e.target.value)} type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Rating *****</Form.Label>
                            <Form.Control onChange={(e) => props.setRating(e.target.value)} type="text" placeholder="Rating" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Reset
                            </Button>
                    <Button variant="primary" onClick={props.addItems,handleClose} >
                        Save
                        </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Add
