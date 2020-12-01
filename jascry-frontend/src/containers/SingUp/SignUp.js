import React, {Component} from 'react';
import classes from './SignUp.module.css'
import InputElement from '../../components/SignUp/InputElement/InputElement';
import Button from '../../components/SignUp/Button/Button'
import axios from 'axios';

class SignUp extends Component {
    state = {
        signupForm: {
            name: {
                elementType: 'input',
                additionalConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            login: {
                elementType: 'input',
                additionalConfig: {
                    type: 'text',
                    placeholder: 'Login'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                additionalConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            password: {
                elementType: 'input',
                additionalConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            confirmPassword: {
                elementType: 'input',
                additionalConfig: {
                    type: 'text',
                    placeholder: 'Confirm Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        }
    }

    registerHandler = (event) => {
        event.preventDefault();
        const dataToSend = {};
        for(let element in this.state.signupForm) {
            dataToSend[element] = this.state.signupForm[element].value;
        }
        console.log(dataToSend);
        axios.post('http://localhost:8081/public/users/register', dataToSend)
            .then((response) => {
                console.log(response);
                this.props.history.push('/signup/success');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    inputChange(event, elementId) {
        const dataChange = {...this.state.signupForm}
        let elementToUpdate = event.target.value;
        dataChange[elementId].value = elementToUpdate;
        this.setState({signupForm: dataChange})
        console.log(this.state.signupForm.name);
    }

    render() {
        const formElementsArray = [];
        for(let member in this.state.signupForm) {
            formElementsArray.push({
                id: member,
                configuration: this.state.signupForm[member]
            });
        }

        let formData = (
            <form onSubmit={this.registerHandler}>
                {
                    formElementsArray.map(formElement => (
                        <InputElement 
                            key = {formElement.key}
                            elementType = {formElement.configuration.elementType}
                            value = {formElement.configuration.value}
                            additionalConfig = {formElement.configuration.additionalConfig}
                            change = {(event) => this.inputChange(event, formElement.id)}
                        />
                    ))
                }
                <Button 
                    btnType="Emphasize"
                    >Create My Account</Button>
            </form>
        );

        return(
            <div className={classes.SignUp}>
                <h1>Welcome to my site!</h1>
                <h2>Comment share and vote my work. Your suggestions are always appreciated. Thanks for your time!</h2>
                <div className={classes.InputElement}>
                    {formData}
                </div>
            </div>
        );
    }
}

export default SignUp;