import { useState } from "react";
import { Form } from "./components/Form";
import { ToDoList } from "./components/ToDoList";
import { TagsMenu } from "./components/TagsMenu";

function App() {
  const [tasks, setTasks] = useState([])
  const [tag, setTags] = useState(["#all"])


  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 p-6 justify-center items-center border-black">

        <div className="">
          <Form setTasks={setTasks}
                setTags={setTags} />
        </div>

        <div className="flex items-center gap-3">
          {tag.map((element, i) => <TagsMenu element={element} key={i} />)}
        </div>


        <div className="">
          <ToDoList tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>

    </div>
  )


}
export default App;
