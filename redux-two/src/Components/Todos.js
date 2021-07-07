import React from 'react';
import { connect } from 'react-redux'

const Todos = () => {
   
    return (
        <div>
           <input type='text'/> 
           <button>Add Todo</button>
           <div>Show:
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
           </div>
        </div>
    )
    
   
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);