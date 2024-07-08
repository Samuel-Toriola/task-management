import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TasksTable from "../features/tasks/TasksTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateTaskForm from "../features/tasks/CreateTaskForm";
// import { getTasks } from "../services/apiTasks";

function Tasks() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Tasks</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <TasksTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Create a new Task
        </Button>
        {showForm && <CreateTaskForm />}
      </Row>
    </>
  );
}

export default Tasks;
