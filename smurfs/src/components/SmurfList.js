import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import NewSmurfForm from './addSmurf/Form'
import {fetchSmurfs} from '../store/actions/action'

const SmurfList = (props) => {
    useEffect(()=> {
        props.fetchSmurfs();
    },[])

    return (
        <div>
            <h1>Smurf Village</h1>
            {props.isLoading ? <p>Loading smurfs data...</p> : null}
            
            {props.error ? <p style = {{ color: "red" }}> {props.error} </p>: null}
            {console.log("props.smurfs: ",props.smurfs)}
            {props.smurfs.map((item) => (
                <div>
                    {console.log("item: ", item)}
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>Height: {item.height}</p>
                </div>
            ))}
            <NewSmurfForm />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs }) (SmurfList);