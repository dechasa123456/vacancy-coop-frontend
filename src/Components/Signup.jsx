import React,{Component} from 'react';
import { Col, Row, Tab, Nav, Container, Card, Form, Spinner, Button, Modal, Table, Toast, ToastContainer } from 'react-bootstrap';
import Swal from 'sweetalert2'
import 'moment/locale/fr.js'
import 'moment/locale/es.js'
import 'rc-datepicker/lib/style.css';
import {DatePickerInput } from 'rc-datepicker';
import {FaEye,FaFileAlt} from 'react-icons/fa';
// import {$} from 'jquery';
// import {X} from 'react-icons/fa'
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
class Signup extends Component {
  state = {
    lgShow:false,
    showCertificate:false,
    showTraining:false,
    showLanguage:false,
    showExperience:false,
    showReference:false,
    spinner:false,
    educationRow:[],
    experienceRow:[],
    languageRow:[],
    referenceRow:[],
    trainRow:[],
    certificateRow:[],
    myAppliedRow:[],
    name:null,
    phone:null,
    other_phone:null,
    birth_date:null,
    gender:null,
    martial_status:null,
    birth_region:null,
    birth_zone:null,
    residence_region:null,
    residence_zone:null,
    seeker_id:localStorage.getItem('seeker_id')
    
  };
   constructor()
   {
   super();
   this.setLgShow = this.setLgShow.bind(this);
   this.handleCeritificate = this.handleCeritificate.bind(this);
   this.handleTraining = this.handleTraining.bind(this);
   this.handleLanguage = this.handleLanguage.bind(this);
   this.handleExperience = this.handleExperience.bind(this);
   this.handleReference = this.handleReference.bind(this);
   this.educationData = this.educationData.bind(this);
   this.handleSubmitProfile = this.handleSubmitProfile.bind(this);
   this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
   this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
   this.handleSubmitLanguage = this.handleSubmitLanguage.bind(this);
   this.handleSubmitReference = this.handleSubmitReference.bind(this);
   this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
   this.handleSubmitTrain = this.handleSubmitTrain.bind(this);
   this.handleSubmitCertificate = this.handleSubmitCertificate.bind(this);
  //  alert(axios.defaults.baseURL);
   }
 
   setLgShow = (boln) => {
   this.setState({lgShow:boln})
   }
   handleCeritificate = (boln) => {
   this.setState({showCertificate:boln})
   }
   handleTraining = (boln) => {
   this.setState({showTraining:boln})
   }
   handleLanguage = (boln) => {
   this.setState({showLanguage:boln})
   }
   handleReference = (boln) => {
   this.setState({showReference:boln})
   }
   handleExperience = (boln) => {
   this.setState({showExperience:boln})
   }

//  Data fetching for all tabs start
    educationData=()=>{
     axios.get('/education_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({educationRow:res.data});
     })
    } 
    experienceData=()=>{
     axios.get('/experience_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({experienceRow:res.data});
     })
    } 
    languageData=()=>{
     axios.get('/language_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({languageRow:res.data});
     })
    } 
    referenceData=()=>{
     axios.get('/reference_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({referenceRow:res.data});
     })
    } 
    trainingData=()=>{
     axios.get('/training_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({trainRow:res.data});
     })
    } 
    certificateData=()=>{
     axios.get('/certificate_rows/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({certificateRow:res.data});
     })
    } 
    myApplied=()=>{
     axios.get('/my_applied/'+localStorage.getItem('seeker_id')).then(res=>{
       this.setState({myAppliedRow:res.data});
     })
    } 
    profileData=()=>{
      var seeker_id = localStorage.getItem('seeker_id');
       axios.get('/profile_info/'+seeker_id).then(res=>{
        var row = res.data;
        for(var result in row)
        this.setState({
          name:row[result].seeker_name,
          phone:row[result].seeker_mobile_phone,
          other_phone:row[result].seeker_other_phone,
          birth_date:row[result].seeker_birth_date,
          gender:row[result].seeker_gender,
          martial_status:row[result].seeker_martial_status,
          birth_region:row[result].seeker_birth_region,
          birth_zone:row[result].seeker_birth_zone,
          residence_region:row[result].seeker_residence_region,
          residence_zone:row[result].seeker_residence_zone
        });
     })
    } 
 
//  Data fetching for all tabs end
    componentDidMount=()=>{
      this.profileData();
      // alert(this.state.data);
   }
   handleSubmitEducation=(e)=>{
    e.preventDefault();
      const data = {
        institute:this.institute,
        fld_study:this.fldStudy,
        gpa:this.gpa,
        grad_year:this.gradYear,
        level_education:this.levelEducation,
        cost_share:this.costShare,
        institute_type:this.type,
        seeker_id:localStorage.getItem('seeker_id')
      };
      try {
        this.handelSpinner(true);
        axios.post('/add_education',data).then(res=>{
          if(res.data[0].seeker_education_id){
            this.educationData();
            this.setState({lgShow:false});
            this.handleResponseToast('You have added new education successfully!',true);
            this.handelSpinner(false);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        this.handelSpinner(false);
        }
  }
  handleSubmitLanguage=(e)=>{
    e.preventDefault();
      const data = {
        language:this.language,
        read:this.read,
        write:this.write,
        speak:this.speak,
        listen:this.listen,
        seeker_id:localStorage.getItem('seeker_id')
      };
      try {
        this.handelSpinner(true);
        axios.post('/add_language',data).then(res=>{
          if(res.data[0].seeker_lang_id){
            this.languageData();
            this.setState({showLanguage:false});
            this.handleResponseToast('You have added new language skill successfully!',true);
            this.handelSpinner(false);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        this.handelSpinner(false);
        }
  }
  handleSubmitExperience=(e)=>{
    e.preventDefault();
      const data = {
        organization:this.organization,
        position:this.position,
        date_from:this.dateFrom,
        date_to:this.dateTo,
        seeker_id:localStorage.getItem('seeker_id')
      };
      try {
        this.handelSpinner(true);
        axios.post('/add_experience',data).then(res=>{
          if(res.data[0].seeker_expr_id){
            this.experienceData();
            this.setState({showExperience:false});
            this.handleResponseToast('You have added new experience successfully!',true);
            this.handelSpinner(false);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        this.handelSpinner(false);
        }
  }
  handleSubmitReference=(e)=>{
    e.preventDefault();
      const data = {
        name:this.name,
        phone:this.phone,
        address:this.address,
        relation:this.relation,
        seeker_id:localStorage.getItem('seeker_id')
      };
      try {
        this.handelSpinner(true);
        axios.post('/add_reference',data).then(res=>{
          if(res.data[0].seeker_refr_id){
            this.referenceData();
            this.setState({showReference:false});
            this.handelSpinner(false);
            this.handleResponseToast('You have added new reference successfully!',true);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        this.handelSpinner(false);
        }
  }
  handelSpinner=(bool)=>{
    this.setState({spinner:bool});
  }
  handleSubmitTrain=(e)=>{
    e.preventDefault();
      const data = {
        name:this.name,
        date_from:this.dateTrainFrom,
        date_to:this.dateTrainTo,
        seeker_id:localStorage.getItem('seeker_id')
      };
      try {

        axios.post('/add_training',data).then(res=>{
          if(res.data[0].seeker_train_id){
            this.trainingData();
            this.setState({showTraining:false});
            this.handleResponseToast('You have added new training successfully!',true);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        }
  }
  handleSubmitCertificate=(e)=>{
    e.preventDefault();
  //  console.log(this.file)
      // const data = {
      //   name:this.name,
      //   file:this.file,
      //   description:this.description,
      //   seeker_id:localStorage.getItem('seeker_id')
      // };
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const form = new FormData();
      form.append('file',this.file);
      form.append('seeker_id',localStorage.getItem('seeker_id'));
      form.append('description',this.description);
      form.append('name',this.name);
      try {
        this.handelSpinner(true);
        axios.post('/add_certificate',form,config,(event)=>{
          console.log('progress=>'+Math.round(event.loaded/event.total*100));

     
        }).then(res=>{
          if(res.data[0].seeker_cert_id){
            this.certificateData();
            this.setState({showCertificate:false});
            this.handleResponseToast('You have added new certificate successfully!',true);
            this.handelSpinner(false);
          }
        });
       } catch(err){
        this.handleResponseToast('OOPS! Try again',false);
        this.handelSpinner(false);
        }
  }
   handleSubmitProfile=(e)=>{
      e.preventDefault();
      const data = this.state;
      try {
        this.handelSpinner(true);
      axios.post('/update_profile',data).then(res=>{
        if (res.data===1) {
         this.handleResponseToast('You have registered successfully!',true);
         this.handelSpinner(false);
        } else {
          this.handleResponseToast('OOPS! try again.',false);
          this.handelSpinner(false);
        }
    });
    } catch(err) {
      console.log(err.message);
    }
    
   }
   handleResponseToast=(msg,status)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (status) {
        Toast.fire({
      icon: 'success',
      title: msg
    })
  } else {
    Toast.fire({
      icon: 'error',
      title: msg
    })
  }
   }
    render() {
      if (!localStorage.getItem('seeker_id')) return <Redirect to="/" />
     return (
    <Container>
      <br />
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Card body>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" onClick={this.profileData}>Personal Information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="edu" onClick={this.educationData}>Educational Background</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="work-exp" onClick={this.experienceData}>Work Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="language" onClick={this.languageData}>Language Skill</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="train" onClick={this.trainingData}>Training</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cert" onClick={this.certificateData}>Certification</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reference" onClick={this.referenceData}>References</Nav.Link>
          <Link className="nav-link"  to="/">Vacancy</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="my-applied" onClick={this.myApplied}>My Jobs</Nav.Link>
        </Nav.Item>
      </Nav>
      </Card>
      
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <React.Fragment>
        <Container>
        <Card body>
        <Card.Title>Profile information</Card.Title>
        < br />
        <Form onSubmit={this.handleSubmitProfile}>
        <Row>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full name</Form.Label>
        <Form.Control onChange={(e=>this.setState({name:e.target.value}))} defaultValue={this.state.name} type="text" placeholder="Dechasa Adeba Gelata" />
        </Form.Group>
        </Col>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mobile phone</Form.Label>
        <Form.Control type="number" onChange={(e=>this.setState({phone:e.target.value}))} defaultValue={this.state.phone} placeholder="09********"  />
        </Form.Group>
        </Col>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Other phone</Form.Label>
        <Form.Control type="number" onChange={(e=>this.setState({other_phone:e.target.value}))} defaultValue={this.state.other_phone} placeholder="09********"  />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Birth date</Form.Label>
        <DatePickerInput readOnly className='my-custom-datepicker-component' required as="input"
      value={this.state.birth_date} 
      onChange={date => this.setState({birth_date:date})} 
    />
        {/* <Form.Control type="date" onChange={(e=>this.setState({birth_date:e.target.value}))} value={this.state.birth_date}  /> */}
        {/* <Form.Control type="date" onChange={(e=>this.setState({birth_date:e.target.value}))} value={this.state.birth_date} placeholder="05/05/1994" /> */}
        </Form.Group>
        </Col>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" onChange={(e=>this.setState({gender:e.target.value}))} value={this.state.gender} custom className="form-control form-select" >
        <option>Nothing selected</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={4}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
        <Form.Label>Martial Status</Form.Label>
        <Form.Control  as="select" onChange={(e=>this.setState({martial_status:e.target.value}))} value={this.state.martial_status} custom className="form-control form-select" >
        <option>Nothing selected</option>
        <option value="Single">Single</option>
        <option value="Maried">Maried</option>
        <option value="Devorced">Devorced</option>
      </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12}><div style={{color:"#54cbf0"}}>Birth place Place</div></Col>
        <br />
       <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Region</Form.Label>
        <Form.Control as="select" onChange={(e=>this.setState({birth_region:e.target.value}))} value={this.state.birth_region} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Oromia">Oromia</option>
        <option value="Amhara">Amhara</option>
        <option value="Somalia">Somalia</option>
        <option value="Tigray">Tigray</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Zone</Form.Label>
        <Form.Control type ="text"  placeholder="Zone" onChange={(e=>this.setState({birth_zone:e.target.value}))} defaultValue={this.state.birth_zone} />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12}><div style={{color:"#54cbf0"}}>Residence Place</div></Col>
        <br />
       <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Region</Form.Label>
        <Form.Control as="select" onChange={(e=>this.setState({residence_region:e.target.value}))} value={this.state.residence_region} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Oromia">Oromia</option>
        <option value="Amhara">Amhara</option>
        <option value="Somalia">Somalia</option>
        <option value="Tigray">Tigray</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Zone</Form.Label>
        <Form.Control type ="text"  placeholder="Zone" onChange={(e=>this.setState({residence_zone:e.target.value}))} defaultValue={this.state.residence_zone} />
        </Form.Group>
        </Col>
      
        <Button variant="info" style={{color:"#fff"}} type="submit" disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
      </Form>
      </Card>
    </Container>
      <br />
      <br />
      </React.Fragment>
      </Tab.Pane>
      <Tab.Pane eventKey="edu">
        <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right" >
      <Button onClick={()=>this.setLgShow(true)} style={{color:"#fff"}} variant="info">Add education</Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Institution</th>
      <th>Type</th>
      <th>CSC</th>
      <th>Level of Education</th>
      <th>Gradute Year</th>
      <th>GPA</th>
      <th>Field study</th>
    </tr>
  </thead>
  <tbody>
  {this.state.educationRow.map((row,i)=>(
    <tr key={row.seeker_education_id}>
      <td>{i+1}</td>
      <td>{row.seeker_education_inst}</td>
      <td>{row.seeker_education_inst_type}</td>
      <td>{row.seeker_education_cost_sharing}</td>
      <td>{row.seeker_education_level_educ}</td>
      <td>{row.seeker_education_grad_year}</td>
      <td>{row.seeker_education_gpa}</td>
      <td>{row.seeker_education_fld_study}</td>
    </tr>
  ))}
    
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="work-exp">
      <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right">
      <Button onClick={()=>this.handleExperience(true)} style={{color:"#fff"}} variant="info">Add experience </Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Organization</th>
      <th>Position</th>
      <th>Date from</th>
      <th>Date to</th>
    </tr>
  </thead>
  <tbody>
    {this.state.experienceRow.map((row,i)=>(
     <tr key={i}>
      <td>{i+1}</td>
      <td>{row.seeker_expr_organization}</td>
      <td>{row.seeker_expr_position}</td>
      <td>{row.seeker_expr_date_from}</td>
      <td>{row.seeker_expr_date_to}</td>
    </tr>
    ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="language">
      <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right">
      <Button onClick={()=>this.handleLanguage(true)} style={{color:"#fff"}} variant="info">Add language </Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Language</th>
      <th>Reading</th>
      <th>Writing</th>
      <th>Speaking</th>
      <th>Listening</th>
    </tr>
  </thead>
  <tbody>
    {this.state.languageRow.map((row,i)=>(
     <tr key={i}>
      <td>{i+1}</td>
      <td>{row.seeker_lang}</td>
      <td>{row.seeker_lang_read}</td>
      <td>{row.seeker_lang_write}</td>
      <td>{row.seeker_lang_speak}</td>
      <td>{row.seeker_lang_listen}</td>
    </tr>
      ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="train">
      <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right">
      <Button onClick={()=>this.handleTraining(true)} style={{color:"#fff"}} variant="info">Add training </Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
      <tr>
      <th>#</th>
      <th>Training Name</th>
      <th>Date from</th>
      <th>Date to</th>
    </tr>
  </thead>
  <tbody>
    {this.state.trainRow.map((row,i)=>(
    <tr key={i}>
      <td>{i+1}</td>
      <td>{row.seeker_train_name}</td>
      <td>{row.seeker_train_date_from}</td>
      <td>{row.seeker_train_date_to}</td>
    </tr>
    ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="cert">
      <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right">
      <Button onClick={()=>this.handleCeritificate(true)} style={{color:"#fff"}} variant="info">Add certificate </Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Certificate name</th>
      <th>Certificate file</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {this.state.certificateRow.map((row,i)=>(
    <tr>
      <td>{i+1}</td>
      <td>{row.seeker_cert_name}</td>
      <td><a href={`${axios.defaults.baseURL+"/"+row.seeker_cert_file}`} target="_blank"t><FaFileAlt /></a></td>
      <td>{row.seeker_cert_description}</td>
    </tr>
    ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="reference">
      <Card body className="table-responsive">
      <Row>
      <Col sm={9}></Col>
        <Col sm={3}  className="d-grid gap-2 pading-right">
      <Button onClick={()=>this.handleReference(true)} style={{color:"#fff"}} variant="info">Add reference </Button>
      </Col>
      </Row>
      <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Full name</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Relation</th>
    </tr>
  </thead>
  <tbody>
    {this.state.referenceRow.map((row,i)=>(
       <tr key={i}>
      <td>{i+1}</td>
      <td>{row.seeker_refr_name}</td>
      <td>{row.seeker_refr_phone}</td>
      <td>{row.seeker_refr_address}</td>
      <td>{row.seeker_refr_relation}</td>
    </tr>
      ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      <Tab.Pane eventKey="my-applied">
      <Card body className="table-responsive">
      <Row>
      <Table striped bordered hover size="sm">
      <thead>
      <tr>
      <th>#</th>
      <th>Position</th>
      <th>Vacancy type</th>
      <th>Experience</th>
      <th>ID</th>
      <th>Status</th>
      <th>Detail</th>
    </tr>
  </thead>
  <tbody>
    {this.state.myAppliedRow.map((row,i)=>(
       <tr key={i}>
      <td>{i+1}</td>
      <td>{row.vacancy_position}</td>
      <td>{row.vacancy_type}</td>
      <td>{row.vacancy_experience}</td>
      <td>{row.applied_vacancy_auto}</td>
      <td style={{color:"green"}}>not seen</td>
      <td><Link to={`/detailVacancy/${row.vacancy_id}`}><FaEye /></Link></td>
    </tr>
      ))}
  </tbody>
   </Table>
      </Row>
      </Card>
      </Tab.Pane>
      </Tab.Content>
      </Col>
        </Row>
      </Tab.Container>
      <Modal
        size="lg"
        show={this.state.lgShow}
        onHide={() => this.setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
           Add your education background.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitEducation}>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Institution</Form.Label>
        <Form.Control as="select" onChange={(e=>this.institute=e.target.value)} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Ambo University">Ambo University</option>
        <option value="Wollega University">Wollega University</option>
        <option value="Wolkite University">Wolkite University</option>
        <option value="Mokele University">Mokele University</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Type Institute</Form.Label>
        <Form.Control as="select" onChange={(e=>this.type=e.target.value)} custom className="form-control form-select">
        <option value="Government">Government</option>
        <option value="Non government">Non government</option>
      </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Cost sharing commitment</Form.Label>
        <Form.Control as="select" onChange={(e=>this.costShare=e.target.value)} custom className="form-control form-select">
        <option value="NO">NO</option>
        <option value="YES">YES</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Level of education</Form.Label>
        <Form.Control onChange={(e=>this.levelEducation=e.target.value)} as="select" custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Degree">Degree</option>
        <option value="Master">Masters</option>
        <option value="PHD">PHD</option>
      </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Graduation Year</Form.Label>
        <Form.Control onChange={(e=>this.gradYear=e.target.value)} />
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label>Commulative GPA</Form.Label>
        <Form.Control onChange={(e=>this.gpa=e.target.value)}/>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Field of study</Form.Label>
        <Form.Control as="select" onChange={(e=>this.fldStudy=e.target.value)} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Accounting">Accounting</option>
        <option value="IT">IT</option>
        <option value="Computer science">Computer science</option>
        <option value="Economics">Economics</option>
        <option value="Management">Management</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit"disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>

      {/* model for experience Start*/}
      <Modal
        size="lg"
        show={this.state.showExperience}
        onHide={() => this.handleExperience(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add your work experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitExperience}>
        
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Organization</Form.Label>
        <Form.Control onChange={(e=>this.organization=e.target.value)}/>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Position</Form.Label>
        <Form.Control onChange={(e=>this.position=e.target.value)} />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label date="date">Date From</Form.Label>
        <DatePickerInput readOnly className='my-custom-datepicker-component'
          onChange={(date=>this.dateFrom=date)}/>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date To</Form.Label>
        <DatePickerInput readOnly className='my-custom-datepicker-component'
           onChange={(date=>this.dateTo=date)}/>
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit"disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
      {/* model for experience End*/}


       {/* model for language skill Start*/}
       <Modal
        size="lg"
        show={this.state.showLanguage}
        onHide={() => this.handleLanguage(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add your language skill
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitLanguage}>
        
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Language</Form.Label>
         <Form.Control as="select" onChange={(e=>this.language=e.target.value)} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Afaan Oromoo">Afaan Oromoo</option>
        <option value="Sidamo">Sidamo</option>
        <option value="Amharic">Amharic</option>
        <option value="Tigrigna">Tigrigna</option>
        <option value="Somali">Somali</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Reading skill</Form.Label>
        <Form.Control onChange={(e=>this.read=e.target.value)} as="select" custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Biginner">Biginner</option>
        <option value="Intermidate">Intermidate</option>
        <option value="Advanced">Advanced</option>
      </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label date="date">Writing skill</Form.Label>
        <Form.Control as="select" onChange={(e=>this.write=e.target.value)} custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Biginner">Biginner</option>
        <option value="Intermidate">Intermidate</option>
        <option value="Advanced">Advanced</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Speaking skill</Form.Label>
        <Form.Control onChange={(e=>this.speak=e.target.value)} as="select" custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Biginner">Biginner</option>
        <option value="Intermidate">Intermidate</option>
        <option value="Advanced">Advanced</option>
      </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <Form.Group type="date" onChange={(e=>this.listen=e.target.value)} className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Listening skill</Form.Label>
        <Form.Control as="select" custom className="form-control form-select">
        <option>Nothing selected</option>
        <option value="Biginner">Biginner</option>
        <option value="Intermidate">Intermidate</option>
        <option value="Advanced">Advanced</option>
      </Form.Control>
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit"disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
      {/* model for language skill End*/}


        {/* model for training skill Start*/}
        <Modal
        size="lg"
        show={this.state.showTraining}
        onHide={() => this.handleTraining(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add your training(If applicable)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitTrain}>
        
        <Row>
        <Col sm={12}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Trainig name</Form.Label>
         <Form.Control type ="text" onChange={(e=>this.name=e.target.value)}/>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label date="date">Date From</Form.Label>
        <DatePickerInput readOnly className='my-custom-datepicker-component'
          onChange={(date=>this.dateTrainFrom=date)}/>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date To</Form.Label>
        <DatePickerInput readOnly className='my-custom-datepicker-component'
          onChange={(date=>this.dateTrainTo=date)}/>
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit"disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
      {/* model for training End*/}

        {/* model for certificate skill Start*/}
        <Modal
        size="lg"
        show={this.state.showCertificate}
        onHide={() => this.handleCeritificate(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add your certificate(If applicable)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitCertificate}>
        
        <Row>
        <Col sm={12}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label date="date">Certificate name<i style={{color:"red"}}>*</i></Form.Label>
        <Form.Control onChange={(e=>this.name=e.target.value)} />
        </Form.Group>
        </Col>
        <Col sm={12}>
        <Form.Group  className="mb-3">
        <Form.Label>Certificate File<i style={{color:"red"}}>*</i></Form.Label>
        <Form.Control type="file" className="form-control" onChange={(e=>this.file=e.target.files[0])}  />
      </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label date="date">Description about certificate</Form.Label>
        <Form.Control onChange={(e=>this.description=e.target.value)}
          as="textarea"
          placeholder="Type here ..."
          style={{ height: '100px' }}
        />
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit"disabled={this.state.spinner}>Save {this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
      {/* model for certificate End*/}


      {/* model for references*/}
        <Modal
        size="lg"
        show={this.state.showReference}
        onHide={() => this.handleReference(false)}
        aria-labelledby="example-modal-sizes-title-lg">
           <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add your references (If applicable)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.handleSubmitReference}>
    
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label date="date">Full name</Form.Label>
        <Form.Control required onChange={(e=>this.name=e.target.value)} />
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Phone</Form.Label>
        <Form.Control required onChange={(e=>this.phone=e.target.value)} />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address</Form.Label>
        <Form.Control required onChange={(e=>this.address=e.target.value)}/>
        </Form.Group>
        </Col>
        <Col sm={6}>
        <Form.Group type="date" className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label date="date">Relation</Form.Label>
        <Form.Control required onChange={(e=>this.relation=e.target.value)} />
        </Form.Group>
        </Col>
        <Button variant="info" style={{color:"#fff"}} type="submit" disabled={this.state.spinner}>Save{this.state.spinner && <Spinner animation="border" size="sm" />}</Button>
        </Row>
        </Form>
        </Modal.Body>
      </Modal>
      {/* model for certificate End*/}
   
 </Container>
  );
 }
}
 
export default Signup;