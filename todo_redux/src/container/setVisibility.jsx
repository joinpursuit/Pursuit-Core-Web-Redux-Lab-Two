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
                                <span
                                    key={currentFilter}
                                    onClick={() => setFilter(currentFilter)}
                                    style={{
                                        color: currentFilter === props.activeFilter ? 'grey' : 'black'
                                    }}
                                >
                                    {' '}
                                    {currentFilter}
                                </span>
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
        activeFilter: state.VisibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: data => dispatch(setFilter(data)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Visibility)

