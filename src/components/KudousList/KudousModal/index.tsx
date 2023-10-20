import {
  Button,
  Dialog,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { UseUsersQuery } from '../../../services/queries/useUsersQuery';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { UseAddKudosMutation } from '../../../services/mutations/useAddKudosMutation';
import { useQueryClient } from 'react-query';
import { ReactQueryKeys } from '../../../services/keys';
import { IUserResponse } from '../../../types/api.types';
import _ from 'lodash';
type FormProps = {
  title: string;
  userId: string;
};

interface IKudousModalProps {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const validationSchema = yup.object({
  title: yup.string().required('لطفا متن تشکر خود را وارد کنید'),
  userId: yup.string().required('لطفا مشخص کنید از چه کسی تشکر میکنید')
});

export const KudousModal: React.FC<IKudousModalProps> = ({
  onComplete,
  onClose,
  open
}): JSX.Element => {
  const queryClient = useQueryClient();
  const { data } = UseUsersQuery();
  const AddKudosMutation = UseAddKudosMutation();
  const formik = useFormik<FormProps>({
    initialValues: {
      title: '',
      userId: ''
    },
    validationSchema,
    onSubmit(values, formikHelper) {
      // ---------------- niaz nist dar vaghiat in code ha zade beshe
      const userList = queryClient.getQueryData(
        ReactQueryKeys.UserList
      ) as IUserResponse[];
      const targetUser = userList.find((x) => x.id === values.userId);
      const user = JSON.parse(localStorage.getItem('user') || '');
      const sourceUser = userList.find((x) => x.username === user.username);
      // ---------------- niaz nist dar vaghiat in code ha zade beshe
      if (sourceUser && targetUser) {
        // 1. api be server
        AddKudosMutation.mutate(
          {
            id: _.uniqueId(), // dar donyaie vaqi niaz be id nadarid
            createdBy: sourceUser,
            for: targetUser,
            likeCount: 0, // dar donyaie vaqi niaz be likecount,
            visitCount: 0, // dar donyaie vaqi niaz be likecount,
            title: values.title
          },
          {
            onSuccess: () => {
              // ravesh 1.
              // 2. update state
              // 1. invalidate query
              queryClient.invalidateQueries(ReactQueryKeys.KudosList);
              // 3. close modal
              onClose();
              // 4. reset form
              formikHelper.resetForm();
              // 5. call onComplete
              onComplete();
              // ravesh 2.
              // 2. update in local store
              // const data = queryClient.getQueryData(
              //   ReactQueryKeys.KudosList
              // ) as any[];
              // queryClient.setQueryData(ReactQueryKeys.KudosList, [
              //   ...data,
              //   {
              //     id: '1223323295959595', // dar donyaie vaqi niaz be id nadarid
              //     createdBy: sourceUser,
              //     for: targetUser,
              //     likeCount: 0, // dar donyaie vaqi niaz be likecount,
              //     visitCount: 0, // dar donyaie vaqi niaz be likecount,
              //     title: values.title
              //   }
              // ]);
            }
          }
        );
      }
    }
  });
  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <Stack padding={2} spacing={3}>
          <Stack>
            <Typography fontWeight={700}>اضافه کردن تشکر جدید</Typography>
          </Stack>
          <Stack spacing={2}>
            <Stack>
              <FormControl
                error={formik.touched.userId && Boolean(formik.errors.userId)}
              >
                <InputLabel id="user-id">تشکر از</InputLabel>
                <Select
                  label="تشکر از"
                  onChange={formik.handleChange}
                  value={formik.values.userId}
                  labelId="user-id"
                  id="userId"
                  name="userId"
                  error={formik.touched.userId && Boolean(formik.errors.userId)}
                >
                  {data?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.userId && Boolean(formik.errors.userId) && (
                  <FormHelperText>{formik.errors.userId}</FormHelperText>
                )}
              </FormControl>
            </Stack>
            <Stack>
              <TextField
                name="title"
                label="متن تشکر"
                onChange={formik.handleChange}
                value={formik.values.title}
                helperText={formik.touched.title && formik.errors.title}
                error={formik.touched.title && Boolean(formik.errors.title)}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Button variant="contained" type="submit">
              ثبت
            </Button>
            <Button>انصراف</Button>
          </Stack>
        </Stack>
      </form>
    </Dialog>
  );
};
