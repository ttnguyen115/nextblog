import { useRouter } from "next/router";

export interface IPostDetailPageProps {
}

function PostDetailPage(props: IPostDetailPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export default PostDetailPage;