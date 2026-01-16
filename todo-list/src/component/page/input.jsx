

export default function Input({ref,task,addTask}){

    const removeHandler=(index)=>{
        const removetask=[...task];
        removetask.splice(index,1);
        addTask(removetask);
    }
  
    const clickHandler=()=>{
        if(ref.current.value.trim()){
             const newTask=[...task,ref.current.value];
        addTask(newTask);
        ref.current.value="";
        }
        else{
            alert("Please enter a valid task")
        }
    }

    return(
        <>
            <input type="text" placeholder="Enter task" ref={ref} />
            <button onClick={clickHandler}>Add Task</button>
            <div className="task">
                <h2>Task List</h2>
                 {task.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <h3>{item}</h3>
                                    <button onClick={()=>removeHandler(index)}>Remove</button>
                                </div>
                            )
                        })}
            </div>
        </>
    )
}