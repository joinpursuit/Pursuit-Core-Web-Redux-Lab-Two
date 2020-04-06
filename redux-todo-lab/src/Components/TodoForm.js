import React from 'react'

import Input from './Input'
import {useInput} from '../Utilities/CustomHookery'

const TodoForm = () => {
    
    const [input, setInput] = useInput("")
    
    
    return (
        <form>
            <Input className="todoItem" type="text" name="todoItem" placeholder="Enter Todo" input={input}/>
            <button type
        </form>
    )
}

export default TodoForm;
