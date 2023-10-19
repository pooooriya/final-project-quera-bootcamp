import { Stack, Typography } from '@mui/material';
import { KudosColors } from '../../../styles/theme';
import { useContext } from 'react';
import { AppContext } from '../../../context/store';
import { LogoutUser } from '../../../context/user/user.action';
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {}
export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleLogOut = () => {
    dispatch(LogoutUser());
    navigate('/authentication');
  };
  return (
    <Stack
      padding={3}
      bgcolor={KudosColors.grey[300]}
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack>
        <Typography variant="h5" fontWeight={700}>
          تشکرات کئورایی
        </Typography>
      </Stack>
      <Stack>
        <Typography
          onClick={handleLogOut}
          variant="h6"
          fontWeight={600}
          component="a"
          sx={{
            cursor: 'pointer'
          }}
        >
          خروج از سیستم
        </Typography>
      </Stack>
    </Stack>
  );
};
