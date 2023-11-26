import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  const timeAgo = formatDistanceToNow(parseISO(timestamp), { addSuffix: true });

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
