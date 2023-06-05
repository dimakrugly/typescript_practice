import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const TodoList: React.FC = () => {
    const {page, error, todos, loading, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();

    const pages = [1,2,3,4,5];

    useEffect(()=>{
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Loading, please wait</h1>
    }
    if (error) {
        return <h1>Error! </h1>
    }

    return (
        <div>
            {todos.map(todo =>
            <div key={todo.id}>{todo.id}-{todo.title}</div>
            )}
            <div  style={{display: 'flex'}}>
                 {pages.map(p=>
                    <div
                        key={Date.now()}
                        onClick={()=> setTodoPage(p)}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: '10px'}}> {p} </div>
                 )}
            </div>
        </div>
    )
}
