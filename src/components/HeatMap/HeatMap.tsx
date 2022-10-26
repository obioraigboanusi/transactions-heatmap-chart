import Cells from "../Cells";
import Weekdays from "../Weekdays";
import moment from "moment";

function HeatMap({ year, data }: { year: number; data: any }) {
  const startDate = moment(new Date(year?.toString()));
  const endDate = moment(new Date((year + 1).toString()));
  const numOfDaysInYear = endDate.diff(startDate, "days");

  return (
    <div>
      <div></div>
      <div>
        <Weekdays />
        <Cells startDate={startDate} numOfDaysInYear={numOfDaysInYear} />
      </div>
    </div>
  );
}

export default HeatMap;
