import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import Textarea from "../../ui/Textarea";
import Select from "../../ui/Select";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../services/apiTasks";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateTaskForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("New task successfully created");
      queryClient.invalidateQueries({ queryKey: ["task"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }
  function onError(errors) {
    // console.log(errors);
  }

  const getCurrentDateTimeLocal = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    // Format: MM/DD/YYYY HH:MM
    return `${month}/${day}/${year} ${hours}:${minutes}`;
  };

  const currentDateTime = getCurrentDateTimeLocal();

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Task name" error={errors?.taskName?.message}>
        <Input
          type="text"
          id="taskName"
          disabled={isCreating}
          {...register("taskName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Description of the task"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Start date" error={errors?.startDate?.message}>
        <Input
          type="datetime-local"
          id="startDate"
          disabled={isCreating}
          defaultValue={currentDateTime}
          {...register("startDate", {
            required: "This field is required",
            min: {
              value: currentDateTime,
              message: `Date and time must be on or after today at ${currentDateTime}`,
            },
          })}
        />
      </FormRow>

      <FormRow label="Due date" error={errors?.dueDate?.message}>
        <Input
          type="datetime-local"
          id="dueDate"
          disabled={isCreating}
          {...register("dueDate", {
            required: "This field is required",
            validate: (value) => {
              const startDate = new Date(getValues("startdate"));
              const dueDate = new Date(value);
              return (
                dueDate >= startDate ||
                "Due date must be later than or equal to the start date"
              );
            },
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Select
          name="status"
          id="status"
          disabled={isCreating}
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="failed">Completed</option>
          <option value="dropped">Dropped</option>
        </Select>
      </FormRow>

      <FormRow label="Priority" error={errors?.priority?.message}>
        <Select
          name="priority"
          id="priority"
          disabled={isCreating}
          {...register("priority", {
            required: "This field is required",
          })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
      </FormRow>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add Task</Button>
      </FormRow2>
    </Form>
  );
}

export default CreateTaskForm;
