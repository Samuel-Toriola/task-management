import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

/* 



curl "https://rjedtakvjvkuljbnmskx.supabase.co/rest/v1/cabins?select=*" \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZWR0YWt2anZrdWxqYm5tc2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTcxNTYsImV4cCI6MjAyNzYzMzE1Nn0.6VEuuBFbT-po6SdFWWeEybBjxx6o5t7MM5IrbBxhcC8" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZWR0YWt2anZrdWxqYm5tc2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTcxNTYsImV4cCI6MjAyNzYzMzE1Nn0.6VEuuBFbT-po6SdFWWeEybBjxx6o5t7MM5IrbBxhcC8"



*/
