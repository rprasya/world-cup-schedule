import groupBy from "lodash/groupBy"
import moment from "moment"
import SectionRow from "./sectionRow"

const SectionList = async () => {
    // fetch api
    const res = await fetch("https://worldcupjson.net/matches")
    const matches : Match[] = await res.json()
    const getMatchDate = (item:Match) => moment(item.datetime).format("YYYY-MM-DD") //untuk memformat value datetime, menjadi "tahun bulan dan tanggal saja"
    const matchesByDate = groupBy(matches,getMatchDate) //fungsi group match per tanggal

    return (
        <div>
            {Object.keys(matchesByDate).map((date, index) => (
                <div key={index}>
                    <SectionRow matches={matchesByDate[date]} date={date} />
                </div>
            ))}
        </div>
    );
}
 
export default SectionList;