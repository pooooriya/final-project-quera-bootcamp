import { Grid } from '@mui/material';
import { UseKudosQuery } from '../../services/queries/useKudosesQuery';
import KudosItem from './KudousItem';

interface IKadousListProps {}
const KadousList: React.FC<IKadousListProps> = (): JSX.Element => {
  const { data } = UseKudosQuery();
  return (
    <Grid container padding={2} spacing={1}>
      {data?.map((item) => (
        <Grid item xs={12} md={4}>
          <KudosItem
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
    </Grid>
  );
};

export default KadousList;
