import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import TaskRow from "./TaskRow";
// import Menus from "../../ui/Menus";
// import Empty from "../../ui/Empty";

function TasksTable() {
  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["task"],
    queryFn: getTasks,
  });

  // return { isLoading, error, tasks };

  // const { tasks, isLoading, count } = useTask;

  if (isLoading) return <Spinner />;

  // if (!bookings.length) return <Empty resourceName="bookings" />;
  return (
    // <Menus>
    <Table columns=" 1.2fr 2.3fr 1.2fr 1.1fr 3.2rem">
      <Table.Header>
        <div>Name</div>
        <div>Date</div>
        <div>Status</div>
        <div>Priority</div>
        <div></div>
      </Table.Header>
      {tasks.map((task) => (
        <TaskRow task={task} key={task.id} />
      ))}

      {/* <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        /> */}

      {/* <Table.Footer>
          <Pagination count={count} />
        </Table.Footer> */}
    </Table>
    // </Menus>
  );
}

export default TasksTable;
