import { Button, Grid } from '@mui/material';
import { UseKudosQuery } from '../../services/queries/useKudosesQuery';
import KudosItem from './KudousItem';
import { useRef, useState } from 'react';
import { KudousModal } from './KudousModal';
import { useNavigate } from 'react-router-dom';

interface IKadousListProps {}
const KadousList: React.FC<IKadousListProps> = (): JSX.Element => {
  const ref = useRef<any>();
  const [open, setOpen] = useState(false);
  const { data } = UseKudosQuery();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    // 1. setOpen(true) => modal baz mishavad
    setOpen(true);
  };
  const handleCloseModal = () => {
    // 1. setOpen(false) => modal baste mishavad
    setOpen(false);
  };

  const handleOnComplete = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 1000);
  };

  const handleClickOnKudos = (id: string) => {
    // bre be safheie joziat kadus
    navigate(`/kudos/${id}`);
  };

  return (
    <Grid container padding={2} spacing={1}>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={handleOpenModal}>
          ثبت تشکر جدید
        </Button>
      </Grid>
      {data?.map((item) => (
        <Grid item xs={12} md={4}>
          <KudosItem
            onClick={() => handleClickOnKudos(item.id)}
            key={item.id}
            description={item.title}
            from={{
              avatar: item.createdBy.avatar,
              name: item.createdBy.name
            }}
            to={{
              avatar: item.for.avatar,
              name: item.for.name
            }}
            title={`تشکر ${item.createdBy.name} از ${item.for.name}`}
            likeCount={item.likeCount}
            visitCount={item.visitCount}
          />
        </Grid>
      ))}
      <KudousModal
        open={open}
        onClose={handleCloseModal}
        onComplete={handleOnComplete}
      />
      <div ref={ref} id="dummy_div" />
    </Grid>
  );
};

export default KadousList;
