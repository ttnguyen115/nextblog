import { GetStaticProps, GetStaticPropsContext } from "next";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  return (
    <div>
      <h1>PostListPage</h1>
      <ul>
        {posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // build time
  const res = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
  const { data: posts } = await res.json();

  return {
    props: {
      posts: posts.map((post: any) => ({ id: post.id, title: post.title })),
    },
  }
}