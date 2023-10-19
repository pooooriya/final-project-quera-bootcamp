import KadousList from '../../components/KudousList';

interface IHomePageProps {}

export const HomePage: React.FC<IHomePageProps> = (): JSX.Element => {
  return (
    <div>
      <KadousList />
    </div>
  );
};
