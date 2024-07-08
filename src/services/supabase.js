import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hegtoonqehdxqaxkrqpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlZ3Rvb25xZWhkeHFheGtycXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjE4MDcsImV4cCI6MjAzMjczNzgwN30.QKrPSN05NtzgmoSjtGVmvIfiOhyygSr2vy72vYbNai0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
