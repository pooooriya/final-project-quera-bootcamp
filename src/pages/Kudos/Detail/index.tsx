import { useParams } from 'react-router-dom';
import { UseKudosDetailQuery } from '../../../services/queries/useKudosQuery';

export const KudosDetailPage: React.FC = (): JSX.Element => {
  const params = useParams();
  const { data } = UseKudosDetailQuery(params.id || '');

  return (
    <div>
      <h1>{data?.title}</h1>
      <h2>ساخته شده توسط :{data?.createdBy?.name}</h2>
    </div>
  );
};
