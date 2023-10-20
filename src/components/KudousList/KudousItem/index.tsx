import { Avatar, Stack, Typography } from '@mui/material';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';
interface IKudosItemProps {
  title: string;
  description: string;
  likeCount: number;
  visitCount: number;
  onClick: () => void;
  from: {
    name: string;
    avatar: string;
  };
  to: {
    name: string;
    avatar: string;
  };
}
const KudosItem: React.FC<IKudosItemProps> = ({
  title,
  description,
  likeCount,
  visitCount,
  from: { name: sourceName, avatar: sourceAvatar },
  to: { name: receptionName, avatar: receptionAvatar },
  onClick
}): JSX.Element => {
  return (
    <Stack
      onClick={onClick}
      component="a"
      spacing={1}
      padding={2}
      sx={{
        border: '2px solid #e7e7e7',
        borderRadius: 5
      }}
    >
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Stack flexDirection="row" gap={1}>
        <Stack>
          <Avatar alt={sourceName} src={sourceAvatar} />
        </Stack>
        <Stack>
          <Avatar alt={receptionName} src={receptionAvatar} />
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="subtitle1">{description}</Typography>
      </Stack>
      <Stack flexDirection="row" gap={1}>
        <Stack flexDirection="row" spacing={0.5} alignItems="center">
          <AiOutlineLike />
          <Typography>{likeCount}</Typography>
        </Stack>
        <Stack flexDirection="row" spacing={0.5} alignItems="center">
          <AiOutlineEye />
          <Typography>{visitCount}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default KudosItem;
