import { Tooltip } from 'react-tooltip';

const Info = ({ icon, title, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-tooltip-id={`${text}-tooltip`}
      data-tooltip-content={title}
      className="flex flex-row align-middle justify-start text-xs">
      <img src={icon} alt="" className="mx-2 h-8" />
      <Tooltip id={`${text}-tooltip`} />
    </a>
  );
};

export default Info;
