import React from 'react';
import {Card,Form,Container,Row,Col,Button, Spinner} from 'react-bootstrap'
import axios from 'axios';
class FirstSignup extends React.Component {
  state={
    response:false,
    spinner:false,
    matchPassword:null
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
    if (data.re_password!==data.password) {
    this.setState({matchPassword:"Password and Re-password are not matched!"});
    } else {
    try {
      this.setState({spinner:true});
      axios.post('/signup',data).then(res=>{
        if (res.data[0].seeker_id) {
          this.setState({response:true});
          localStorage.setItem('phone',this.phone);
          localStorage.setItem('seeker_id',res.data[0].seeker_id);
          this.setState({spinner:false});
        }
    });
    } catch(err) {
      console.log(err.message);
      this.setState({spinner:false});
     }
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
    <Form.Control type="text"  required placeholder="Dechasa Adeba Gelata" onChange={(e=>this.name=e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" pattern="[0-9]+" title="Phone number only 10 digit!" required placeholder="09********" onChange={(e=>this.phone=e.target.value)} maxlength="10"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"   >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required placeholder="*******" onChange={(e=>this.password=e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Re-password</Form.Label>
    <Form.Control type="password" required placeholder="*******"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={(e=>this.rePassword=e.target.value)} />
  </Form.Group>
  <div style={{color:"red"}}>{this.state.matchPassword}</div>
    <Button variant="warning" style={{color:"#fff"}} type="submit" disabled={this.state.spinner}>Sign Up {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
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