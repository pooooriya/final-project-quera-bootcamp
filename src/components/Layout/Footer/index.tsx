import { Stack, Typography } from '@mui/material';
import { KudosColors } from '../../../styles/theme';

interface IFooterProps {}
export const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
    <Stack bgcolor={KudosColors.info[100]}>
      <Typography variant="subtitle2" textAlign="center">
        ساخته شده با{' '}
        <Typography color="red" component="span">
          &hearts;
        </Typography>
        در بوتکمپ کئورا
      </Typography>
    </Stack>
  );
};
