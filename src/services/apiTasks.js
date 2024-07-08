import supabase from "./supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("tasksTable").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tasks could not be loaded");
  }

  return data;
}

export async function createTask(newTask) {
  const { data, error } = await supabase
    .from("tasksTable")
    .insert([newTask])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Tasks could not be created");
  }

  return data;
}

export async function deleteTask(id) {
  const { data, error } = await supabase
    .from("tasksTable")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Tasks could not be deleted");
  }

  return data;
}
