/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";
import moment from "moment";

interface cardProps {
  match?: Match;
  isToday?: boolean;
}

interface teamProps {
  team?: Team;
  isToday?: boolean;
}

interface VersusProps {
  date?: string;
}

const Team = ({ team, isToday }: teamProps) => {
  return (
    <div className="flex flex-col w-1/2 justify-center items-center">
      <img
        src={`https://api.fifa.com/api/v3/picture/flags-sq-5/${team?.country}`}
        alt={team?.name}
        className={clsx(
          "w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]",
          isToday &&
            "w-[180px] h-[120px] border-[5px] shadow-[10px_10px_0_0_#000000]"
        )}
      />
      <p className="font-bold text-lg mt-2 text-center">{team?.name}</p>
      <p className="font-bold text-2xl text-center">{team?.goals}</p>
    </div>
  );
};

const Versus = ({ date }: VersusProps) => {
  const isFinish = moment(date).isBefore(moment());

  return (
    <div className="grid relative h-full py-3">
      <span className="absolute font-bold text-2xl place-self-center">VS</span>
      <span className="font-medium text-sm place-self-end bg-black text-white rounded-full px-3 py-1">
        {isFinish ? "Selesai" : moment(date).format("HH:mm")}
      </span>
    </div>
  );
};

const Card = ({ match, isToday }: cardProps) => {
  return (
    <div
      className={clsx(
        "flex aspect-video border-black border-[3px] shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow",
        isToday &&
          "shadow-[15px_15px_0_0_#000000] hover:shadow-[20px_20px_0_0_#000000]"
      )}
    >
      <Team team={match?.home_team} isToday={isToday} /> 
      <Versus date={match?.datetime} />
      <Team team={match?.away_team} isToday={isToday} />
    </div>
  );
};

export default Card;
