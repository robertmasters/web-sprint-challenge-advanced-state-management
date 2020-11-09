import React, {useState} from 'react'
import SmurfList from '../SmurfList'
import {connect} from 'react-redux'
import {submitNewSmurf } from '../../store/actions/action'

const initialValues = {
    name: '',
    age: '',
    height: ''
}
const NewSmurfForm = (props) => {

    const [values, setValues] = useState(initialValues)

    // const {
    //     values, 
    //     submit,
    //     inputChange,
    //     disabled,
    //     errors,
    // } = props


const onSubmit = evt => {
    evt.preventDefault()
    props.submitNewSmurf(values)
}


const onInputChange = evt => {
    const { name, value } = evt.target
    setValues({...values, [name]: value})
}

return (

    <form  onSubmit={onSubmit}>
        <h2>Add New Smurf</h2>

        <button id = 'submitButton' >Submit</button>
        

        <div >
            <h3>Information</h3>

            <label> Name:
                <input 
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>

            <label> Age:
                <input 
                    value={values.age}
                    onChange={onInputChange}
                    name='age'
                    type='text'
                />
            </label>

            <label> Height in cm: 
                <input 
                    value={values.height}
                    onChange={onInputChange}
                    name='height'
                    type='text'
                />
            </label>
        </div>

    </form>
)
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { submitNewSmurf})(NewSmurfForm)