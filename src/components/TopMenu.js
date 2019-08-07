import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import fetchDepartments from '../redux/actions/departments';
import {signupAction, loginAction} from '../redux/actions/auth';
import Modal from './commons/modal';

class TopMenu extends React.Component{
    state={
        showLogin:false,
        showSignup:false,
        loginEmail:'',
        loginEmailError:'',
        loginPassword:'',
        loginPasswordError:'',
        name:'',
        nameError:'',
        signupEmail:'',
        signupEmailError:'',
        signupPassword:'',
        signupPasswordError:'',
    }

    componentDidMount(){
        const {fetchDepartments} = this.props;
        fetchDepartments();
    }

    handleChange=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleLoginSubmit=(event)=>{
        event.preventDefault();
        const {loginAction} = this.props;
        const {loginEmail, loginPassword} = this.state;
        if(loginEmail===''){
            this.setState({loginEmailError:'email is required'})
        }else if(loginPassword===''){
            this.setState({loginPasswordError:'password is required'})
        }else{
            this.setState({
                loginEmailError:'',
                loginPasswordError:''
            })
            const user={
                email:loginEmail,
                password:loginPassword
            }
            loginAction(user);
        }
    }

    handleSignupSubmit=(event)=>{
        event.preventDefault();
        const {signupAction} = this.props;
        const {name, signupEmail, signupPassword} = this.state;

        if(name===''){
            this.setState({nameError:'name is required'})
        }else if(signupEmail===''){
            this.setState({signupEmailError:'email is required'})
        }else if(signupPassword===''){
            this.setState({signupPasswordError:'password is required'})
        }else{
            this.setState({
                nameError:'',
                signupEmailError:'',
                signupPasswordError:''
            })
            const user={
                name,
                email:signupEmail,
                password:signupPassword
            }
            signupAction(user);
        }
    }

    handleClose=(modal)=>{
        if(modal==='login'){
            this.setState({showLogin:false});
        }else if(modal==='signup'){
            this.setState({showSignup:false});
        }
    }

    handleShow=(modal)=>{
        if(modal==='login'){
            this.setState({showLogin:true});
            this.setState({showSignup:false});
        }else if(modal==='signup'){
            this.setState({showSignup:true});
            this.setState({showLogin:false});
        }
    }

    loginFormFields=()=> {
        const {
            loginEmail, 
            loginEmailError,  
            loginPassword, 
            loginPasswordError
        } = this.state;

        return (
            <React.Fragment>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.handleChange} name="loginEmail" type="email" placeholder="Enter email" value={loginEmail}/>
                    <Form.Text className="text-danger">
                        {loginEmailError} 
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="loginPassword" onChange={this.handleChange} value={loginPassword} type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                        {loginPasswordError} 
                    </Form.Text>
                </Form.Group>
            </React.Fragment>
        )
    };
    
    signupFormFields=()=>{ 
        const {
            signupEmail, 
            signupEmailError,  
            signupPassword, 
            signupPasswordError,
            name,
            nameError
        } = this.state;
        return (
            <React.Fragment>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" value={name} onChange={this.handleChange} type="text" placeholder="Enter Name" />
                    <Form.Text className="text-danger">
                        {nameError}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="signupEmail" value={signupEmail} onChange={this.handleChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-danger">
                        {signupEmailError}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="signupPassword" value={signupPassword} onChange={this.handleChange}  type="password" placeholder="Password" />
                    <Form.Text className="text-danger">
                          {signupPasswordError}  
                    </Form.Text>
                </Form.Group>
            </React.Fragment>
    )};

    render(){
        const {
            isLoading,
            departments,
            error,
            signingUp,
            signupError,
            signupSucess,
            loggingIn,
            loginError,
            loginSuccess
        } = this.props;
        const {
            showSignup,
            showLogin
        } = this.state;

        return (
            <React.Fragment>
            <Container className="top-info">
                <Row>
                    <Col>Hey! <Button  variant="link" onClick={()=>this.handleShow('login')}  >Sign In</Button> or <Button onClick={()=>this.handleShow('signup')} variant="link">Register</Button></Col>
                    <Col xs={6}><span >Daily Deals</span> <span>Sell</span> <span>Help Contact</span></Col>
                    <Col>
                    3 of 3
                    <span>$ 0.0</span>
                    </Col>
                </Row>
            </Container>  
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SHOPMATE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                    {
                        isLoading && <span>Loading ...</span>
                    }
                    {
                        error && <span>Oppps </span>
                    }
                    {departments.length>0 &&
                        departments.map((dept,index)=>{
                            return <Nav.Link href={`/department/${dept.department_id}`} key={`${index}-${dept.department_id}`}>{dept.name}</Nav.Link>
                        })
                    }
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Modal
                show={showSignup}
                handleShow={()=>this.handleShow('signup')}
                handleClose={()=>this.handleClose('signup')}
                title='signup'
                btnText={'Sign UP'}
                children={this.signupFormFields()}
                handleSubmit={this.handleSignupSubmit}
                loading={signingUp}
                error={signupError}
                success={signupSucess}
            />
            <Modal
                show={showLogin}
                handleShow={()=>this.handleShow('login')}
                handleClose={()=>this.handleClose('login')}
                children={this.loginFormFields()}
                title='login'
                btnText={'Login'}
                handleSubmit={this.handleLoginSubmit}
                loading={loggingIn}
                error={loginError}
                success={loginSuccess}
            />
            </React.Fragment>
        )
    }
}

TopMenu.defaultProps={
    departments:[]
}

const mapStateToProps=(state)=>({
    isLoading: state.departments.isLoading,
    departments: state.departments.departments,
    error: state.departments.error,
    loggingIn: state.login.loggingIn,
    loginSuccess: state.login.loginSuccess,
    loginError: state.login.loginError,
    signingUp: state.signup.signingUp,
    signupSucess: state.signup.signupSucess,
    signupError: state.signup.signupError,
});

export default connect(mapStateToProps,{fetchDepartments, signupAction, loginAction})(TopMenu);