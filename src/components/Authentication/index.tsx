import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UseLoginMutation } from '../../services/mutations/useLoginMutation';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AppContext } from '../../context/store';
import { useNavigate } from 'react-router-dom';
import { AuthenticateUser } from '../../context/user/user.action';

const validationSchema = yup.object({
  username: yup.string().required('ایمیل سازمانی خود را وارد کنید'),
  password: yup.string().required('رمز عبور خود را وارد کنید')
});

interface IAuthenticationProps {}
const Authentication: React.FC<IAuthenticationProps> = (): JSX.Element => {
  const { dispatch } = useContext(AppContext);

  const loginMutation = UseLoginMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit(values) {
      loginMutation.mutate(values, {
        onSuccess(payload) {
          toast.success('شما با موفقیت وارد سیستم شدید ');
          dispatch(AuthenticateUser(payload));
          navigate('/');
        }
      });
    }
  });
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
      spacing={2}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h6" fontWeight="bold">
        ورود به تشکرات
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <TextField
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            size="small"
            label="نام کاربری سازمانی"
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />
          <TextField
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            size="small"
            label="کلمه عبور"
            type="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </Stack>
        <Stack>
          <Button variant="contained" type="submit">
            ورود
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Authentication;
