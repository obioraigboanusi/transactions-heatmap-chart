import styled from "styled-components";

function Month({ month }: { month: string }) {
  return <StyledMonth className={month}>{month}</StyledMonth>;
}

const StyledMonth = styled.li`
  width: 12px;
  margin: 2px;
  font-size: 10px;
  color: #0000de;
`;

export default Month;
