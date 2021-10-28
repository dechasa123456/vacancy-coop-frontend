import axios from 'axios';
import React from 'react';
import {Card,Form,Container,Row,Col,Button} from 'react-bootstrap'

class Login extends React.Component {
  state={
    loginStatus:null
  }
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      phone:this.phone,
      password:this.password
    };
    try {

      axios.post('/login',data).then(res=>{
        // console.log(res.data.length);
        if(res.data.length > 0 && res.data[0].seeker_id){
          localStorage.setItem('seeker_id',res.data[0].seeker_id);
          localStorage.setItem('phone',this.phone);
          window.location.href = window.location.origin+"/profile";
        } else {
          this.setState({loginStatus:"Your phone or password is wrong!"});

        }
      });
     } catch(err){

      }
 
  }
    render() { 
        return (
            <React.Fragment>
            <Container>
                <br />
           <Row className="justify-content-md-center">
                <Col sm="6">
                      <Card body>
                            <Card.Title>Login system</Card.Title>
                            < br />
   <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phone" placeholder="Phone" onChange={(e=>this.phone=e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="*******" onChange={(e=>this.password=e.target.value)} />

  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{color:'red'}}>{this.state.loginStatus}</Form.Label>
  </Form.Group>
    <Button variant="success" type="submit">Login</Button>
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
 
export default Login ;