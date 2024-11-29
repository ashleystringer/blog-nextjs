import { Posts } from "./ts/posts";
import { getPosts } from "./api/posts";
import  HomePostList from "./components/PostLists/HomePostList";


export default async function Home() {

  const posts: Posts = await getPosts();

  return (
    <div>
      <h1>Home Page</h1>

      <br/>

      <div>
        <HomePostList posts={posts}/>
      </div>
      {
        /*
          - Present a list of posts
          <HomePostList post={posts}/>
        */
      }
    </div>
  );
}
