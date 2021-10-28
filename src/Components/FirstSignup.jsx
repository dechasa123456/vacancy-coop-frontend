import React from 'react';
import {Card,Form,Container,Row,Col,Button} from 'react-bootstrap'
import { Redirect } from 'react-router';
import axios from 'axios';
class FirstSignup extends React.Component {
  state={
    response:false
  }
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      name:this.name,
      phone:this.phone,
      password:this.password,
      re_password:this.rePassword,
    };
    try {

      axios.post('/signup',data).then(res=>{
        if (res.data[0].seeker_id) {
          this.setState({response:true});
          localStorage.setItem('phone',this.phone);
          localStorage.setItem('seeker_id',res.data[0].seeker_id);
        }
    });
    } catch(err) {
      console.log(err.message);
    }
    
 
  }
    render() { 
        if (this.state.response) window.location.href = window.location.origin+"/profile";
        return (
            <React.Fragment>
            <Container>
                <br />
           <Row className="justify-content-md-center">
                <Col sm="6">
                      <Card body>
                            <Card.Title>Sign up with your phone</Card.Title>
                            < br />
   <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" required placeholder="Dechasa Adeba Gelata" onChange={(e=>this.name=e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="number" required placeholder="09********" onChange={(e=>this.phone=e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" required placeholder="*******" onChange={(e=>this.password=e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Re-password</Form.Label>
    <Form.Control type="password" required placeholder="*******" onChange={(e=>this.rePassword=e.target.value)} />
  </Form.Group>
    <Button variant="success" type="submit">Sign Up</Button>
</Form>
</Card>
</Col>
    </Row>
    </Container>
        <br />
        <br />
       </React.Fragment>
        );
    }
}
 
export default FirstSignup ;