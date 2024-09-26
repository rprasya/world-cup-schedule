const SectionList = async () => {
    // fetch api
    const res = await fetch("https://worldcupjson.net/matches")
    const matches : Match[] = await res.json()

    return (
        <div>
            {matches.map((match) => (
                <div key={match.id} className="mt-2 mb-2">
                    <p>{match.datetime}</p>
                    <p>{match.home_team_country} vs {match.away_team_country}</p>
                </div>
            ))}
        </div>
    );
}
 
export default SectionList;