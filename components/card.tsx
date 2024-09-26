/* eslint-disable @next/next/no-img-element */

import moment from "moment";

interface cardProps {
  match?: Match;
  isToday?: boolean;
}

interface teamProps {
  team?: Team;
}

interface VersusProps {
  date?: string;
}

const Team = ({ team }: teamProps) => {
  return (
    <div className="flex flex-col w-1/2 justify-center items-center">
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`}
        alt={team?.name}
        className="w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]"
      />
      <p className="font-bold text-lg mt-2 text-center">{team?.name}</p>
      <p className="font-bold text-2xl text-center">{team?.goals}</p>
    </div>
  );
};

const Versus = ({ date }: VersusProps) => {
  return (
    <div className="grid relative h-full py-3">
      <span className="absolute font-bold text-2xl place-self-center">VS</span>
      <span className="font-medium text-2xl place-self-end bg-black text-white rounded-full px-3 py-1">
        {moment(date).format("HH:mm")}
      </span>
    </div>
  );
};

const Card = ({ match }: cardProps) => {
  return (
    <div className="flex aspect-video border-black border-[3px] shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow">
      <Team team={match?.home_team} />
      <Versus date={match?.datetime} />
      <Team team={match?.away_team} />
    </div>
  );
};

export default Card;
