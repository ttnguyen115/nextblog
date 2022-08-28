import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export interface PostPageProps {
  post: any;
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();

  if (!post) return;

  return (
    <div>
      <h1>Post Page</h1>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
  const { data: posts } = await res.json();

  return {
    paths: posts.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  }
}