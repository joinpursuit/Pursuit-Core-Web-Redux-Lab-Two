import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../store/actions/todoAction '
import { VISIBILITY_FILTERS } from '../store/actions/actionTypes'


export const Visibility = (props) => {

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className='visibilityFilters'>
                <p>Show:
                   {
                        Object.keys(VISIBILITY_FILTERS).map(filter => {
                            const currentFilter = VISIBILITY_FILTERS[filter];
                            console.log(currentFilter);
                            return (
                                <button key={currentFilter}
                                    onClick={() => props.setFilter(currentFilter)}> {currentFilter}</button>
                            )
                        })
                    }
                </p>
            </div>

        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        todoReducer: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: data => dispatch(setFilter(data)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Visibility)

