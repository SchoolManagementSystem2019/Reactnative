import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Form extends Component{
    constructor(){
        super();
        this.state={
            firstName : '',
            lastname : '',
            age : '',
            gender : '' ,
            language : '',
            food : ''
        }
        this.baseState = this.state;
    }
    alertmsg = () => {
        alert("You are submitting " + this.state.firstName + " " + this.state.lastname);
    }
    firstNameChange = (event) =>{
        this.firstNamev = event.target.value;
    }
    firstNameBlur = () => {
        this.setState({firstName:[...this.state.firstName,this.firstNamev]});
    }
    lastNameChange = (event) => {
        this.lastNamev = event.target.value;
    }
    lastNameBlur = () => {
        this.setState({lastname:[...this.state.lastname,this.lastNamev]});
    }
    ageChange = (event) =>{
        this.agev = event.target.value;
    }
    ageBlur = () => {
        this.setState({age:[...this.state.age,this.agev]});
    }
    handleRadio = (event) => {
        this.genderv = event.target.value;
        this.setState({gender:[...this.state.gender,this.genderv]});
    }
    handleSelect = (event) => {
        this.languagev = event.target.value;
        this.setState({language:[...this.state.language,this.languagev]});
    }
    handleCheckbox = (event) => {
        this.foodv = event.target.value;
        this.setState({food:[...this.state.food,this.foodv]});
    }
    render(){
        return(
            <div>
                <div className="container scroll">
                    <form onSubmit={this.alertmsg}>
                        <h1>Sample Form</h1>
                        <hr />
                        <input type="text" placeholder="First Name" onChange={this.firstNameChange} onBlur={this.firstNameBlur} />
                        <input type="text" placeholder="Last Name" onChange={this.lastNameChange} onBlur={this.lastNameBlur} />
                        <input type="number" placeholder="Age" onChange={this.ageChange} onBlur={this.ageBlur} />
                        <h5>Gender: </h5>
                        <input type="radio" value="Male" name="gender" onChange={this.handleRadio} /> Male
                        <br />
                        <input type="radio" value="Female" name="gender" onChange={this.handleRadio} /> Female
                        <h5>Select Your Language: </h5>
                        <select onChange={this.handleSelect}>
                            <option>Urdu</option>
                            <option>Spanich</option>
                            <option>French</option>
                            <option>English</option>
                        </select>
                        <h5>Your Food Choice...?</h5>
                        <input type="checkbox" value="Italian" onChange={this.handleCheckbox} />Italian
                        <br />
                        <input type="checkbox" value="Chinese" onChange={this.handleCheckbox} />Chinese
                        <br />
                        <input type="checkbox" value="Desi" onChange={this.handleCheckbox} />Desi
                        <button>Submit</button>
                    </form>
                </div>
                <div className="container position">
                    <hr />
                    <h2>Summary</h2>
                    <h6>First Name : {this.state.firstName} </h6>
                    <h6>Last Name : {this.state.lastname} </h6>
                    <h6>Age : {this.state.age} </h6>
                    <h6>Gender : {this.state.gender} </h6>
                    <h6>Language : {this.state.language} </h6>
                    <h6>Food Choice : {this.state.food} </h6>
                </div>
            </div>
        );
    }
}
export default Form;