import { Tooltip } from 'react-tooltip';

const FunFact = ({ icon, title, text }) => {
  return (
    <div
      data-tooltip-id={`${title}-tooltip`}
      data-tooltip-content={text}
      className="flex flex-col items-center text-center p-2 m-1 hover:bg-gray-50 hover:bg-opacity-10 rounded-lg transition-colors duration-200 min-w-[80px] max-w-[100px]">
      <div className="mb-1">
        <img src={icon} alt="" className="h-6 w-6 opacity-70" />
      </div>
      <h3 className="text-xs font-medium text-gray-300 mb-0.5">{title}</h3>
      <p className="text-[10px] text-gray-400 leading-tight">{text}</p>
      <Tooltip id={`${title}-tooltip`} className="text-xs" />
    </div>
  );
};

export default FunFact;
