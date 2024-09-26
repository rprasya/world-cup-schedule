import Card from "@/components/card"
import moment from "moment"

interface sectionRowProps {
    matches? : Match[]
    date? : string
}

const DateTitle: React.FC<sectionRowProps> = ({date}) => {
    const day = moment(date).format("dddd")
    const _date = moment(date).format("Do MMM YYYY")

    return  (
        <div>
            <span className="font-bold">{day}</span>
            <span>, {_date}</span>
        </div>
    )
}

const SectionRow: React.FC<sectionRowProps> = ({matches, date}) => {
    return (
        <div className="mt-[40px]">
            <DateTitle date={date} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {matches?.map((match) => (
                    <Card key={match.id} match={match} />
                ))}
            </div>
        </div>
    );
}
 
export default SectionRow;