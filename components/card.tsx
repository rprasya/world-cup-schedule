/* eslint-disable @next/next/no-img-element */

interface cardProps {
  match: Match;
}

interface teamProps {
  team: Team;
}

const Team = ({ team }: teamProps) => {
  return (
    <div className="flex flex-col w-1/2 justify-center items-center">
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`}
        alt={team?.name}
        className="w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]"
      />
      <p className="font-bold text-lg mt-2 text-center">{team.name}</p>
      <p className="font-bold text-2xl text-center">{team.goals}</p>
    </div>
  );
};

const Card = ({ match }: cardProps) => {
  return (
    <div className="flex aspect-video border-black border-[3px] shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow">
      <Team team={match.home_team} />
      <Team team={match.away_team} />
    </div>
  );
};

export default Card;
