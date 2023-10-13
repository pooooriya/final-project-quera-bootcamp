import Authentication from '../../components/Authentication';

interface IAuthenticationPageProps {}
const AuthenticationPage: React.FC<
  IAuthenticationPageProps
> = (): JSX.Element => {
  return <Authentication />;
};

export default AuthenticationPage;
