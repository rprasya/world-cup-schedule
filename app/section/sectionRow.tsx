import Card from "@/components/card";
import clsx from "clsx";
import moment from "moment";

interface sectionRowProps {
  matches?: Match[];
  date?: string;
}

const DateTitle: React.FC<sectionRowProps> = ({ date }) => {
  const day = moment(date).format("dddd");
  const _date = moment(date).format("Do MMM YYYY");
  const isToday = moment(date).isSame(moment(), "day");

  return (
    <div>
      {isToday ? (
        <span className="font-bold text-2xl">Hari ini</span>
      ) : (
        <span className="font-bold">{day}</span>
      )}
      <span>, {_date}</span>
    </div>
  );
};

const SectionRow = ({ matches, date }: sectionRowProps) => {
  const isToday = moment(date).isSame(moment(), "day");

  return (
    <div className="mt-[40px]">
      <DateTitle date={date} />
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[10px] mb-[]",
          isToday && "lg:grid-cols-2 grid-cols-1"
        )}
      >
        {matches?.map((match) => (
          <Card key={match.id} match={match} isToday={isToday} />
        ))}
      </div>
    </div>
  );
};

export default SectionRow;
