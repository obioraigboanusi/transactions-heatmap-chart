import styled from "styled-components";

function Month({ month }: { month: string }) {
  return <StyledMonth className={month}>{month}</StyledMonth>;
}
const StyledMonth = styled.li`
  width: 10px;
  margin: 2px;
  border: 1px solid transparent;
  font-size: 10px;
`;

export default Month;
