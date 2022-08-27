import { useRouter } from 'next/router';

export interface IParamsPageProps {
}

function ParamsPage(props: IParamsPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Params Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export default ParamsPage;
