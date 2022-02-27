import React from "react";

class AddContact extends React.Component
{
    state = {
        firstName: "",
        lastName: "",
        contactNumber: "",
    };

    add = (e) =>
    {
        e.preventDefault();
        if ( this.state.firstName === "" && this.state.contactNumber === "" )
        {
            alert( "First name can't be empty" );
            return
        }

       
        this.props.addContactHandler( this.state );
        this.setState( { firstName: "", lastName: "", contactNumber: "" } );
    }
    render ()
    {
        return (
            
            <div>
                <h2>
                    Add Contact
                </h2>

                <form className="ui form" onSubmit={this.add}>

                    <div className="field">

                        <label>First Name</label>
                        <input type="text" name="firstName" id="firstName" value = {this.state.firstName} onChange={( e ) => this.setState( { firstName: e.target.value } )}></input>

                    </div>
                    <div className="field">

                        <label>Last Name</label>
                        <input type = "text" name = "lastName" id = "lastName" value = {this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})}></input>

                    </div>
                    <div className="field">

                        <label>Phone Number</label>
                        <input type="tel" name="number" id="number" value={this.state.contactNumber }onChange={(e) => this.setState({contactNumber: e.target.value})}></input>

                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;