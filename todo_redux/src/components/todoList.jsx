
import React from 'react'
import TodoItem from './todoItem';


export const TodoList = (props) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ display: 'inline' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '500px'
                }}>
                    <div className="test" style={{
                        marginLeft: '-50px',
                        textAlign: 'left',
                    }}>
                        <ul className='list'
                            style={{
                                paddingLeft: '50%'
                            }}
                        >
                            <TodoItem />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
