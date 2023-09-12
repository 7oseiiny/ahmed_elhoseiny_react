import { useState } from "react";

export default function Todo() {
  let [tasks, settasks] = useState([
    { name: "todo1", stuts: "in progress" },
    { name: "todo2", stuts: "in progress" },
    { name: "todo3", stuts: "in progress" },
  ]);
  let name = "";

  function addnewtask() {
    settasks([...tasks, { name: name, stuts: "in progress" }]);
  }

  function deletee(i){
   tasks.splice(i,1)
    settasks([...tasks])
  }
  function complete(i){
    let updatedtasks=[]
   for (let index = 0; index < tasks.length; index++) {
    if (i!=index) {
        updatedtasks.push(tasks[index])
        
    }else{
        updatedtasks.push(    { name: tasks[i].name, stuts: "completed" },        )
    }
   }
    settasks(updatedtasks)
  }

  return (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form1"
                        className="form-control"
                        onChange={(e) => {
                          name = e.target.value;
                        }}
                      />
                      <label className="form-label" htmlFor="form1">
                        Enter a task here
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addnewtask();
                      }}
                    >
                      Save
                    </button>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-warning">
                      Get tasks
                    </button>
                  </div>
                </div>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    
                    {tasks.map(function (task, index) {
                        // eslint-disable-next-line react/jsx-key
                        return <tr  style={{textDecoration:`${task.stuts=="completed"?"line-through":""}`}}>
                        <th scope="row">{index+1}</th>
                        <td >{task.name}</td>
                        <td>{task.stuts}</td>
                        <td>
                            <button  className="btn btn-danger" onClick={(e)=>deletee(index)}>
                            Delete
                            </button>
                            <button  className="btn btn-success ms-1" onClick={(e)=>complete(index)}>
                            Finished
                            </button>
                        </td>
                        </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
