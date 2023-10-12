import { Button, Stack, Typography } from '@mui/material';
import { KudosColors } from '../../../styles/theme';

interface IHeaderProps {}
export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  return (
    <Stack
      padding={3}
      bgcolor={KudosColors.grey[300]}
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack>
        <Typography>تشکرات</Typography>
      </Stack>
      <Stack>
        <Button>ورود یا ثبت نام</Button>
      </Stack>
    </Stack>
  );
};
