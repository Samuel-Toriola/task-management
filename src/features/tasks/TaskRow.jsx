import styled from "styled-components";
import { format, isToday } from "date-fns";
import Tag from "../../ui/Tag";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../services/apiTasks";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2.3fr 1.2fr 1.1fr 3.2rem;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  font-size: 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Task = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  /* color: var(--color-grey-600); */
  /* font-family: ""; */
`;
const Dates = styled.div`
  display: flex;
  flex-direction: column;
`;

const Status = styled.div`
  font-weight: 600;
`;

const Priority = styled.div`
  font-weight: 500;
`;

function TaskRow({ task }) {
  const { id: taskId, taskName, startDate, dueDate, priority, status } = task;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteTask(id),
    onSuccess: () => {
      toast.success("Task successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["task"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const statusToTagName = {
    ongoing: "blue",
    completed: "green",
    failed: "red",
    dropped: "silver",
  };
  const priorityToTagName = {
    high: "red",
    medium: "yellow",
    low: "silver",
  };

  return (
    <TableRow role="row">
      <Task>{taskName}</Task>
      <Dates>
        {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
        {format(new Date(dueDate), "MMM dd yyyy")}
      </Dates>
      {/* <Status>{status}</Status> */}
      <Tag type={statusToTagName[status]}>{status}</Tag>
      <Tag type={priorityToTagName[priority]}>{priority}</Tag>
      <button disabled={isDeleting} onClick={() => mutate(taskId)}>
        <HiOutlineMenu />
      </button>
    </TableRow>
  );
}

export default TaskRow;
