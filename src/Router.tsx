import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/User"
import UserPost from "./pages/UserPost";
import UserAlbum from "./pages/UserAlbum";



const router = createBrowserRouter([
    {
        path: '/', 
        element : <Home/>,
        loader: async () => {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url);
            const data = await response.json();
           return data
          
        }
    },
    {
        path: 'users/:userId', 
        element : <UserPage />,
        loader: async () => {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url);
            const data = await response.json();
           return data
          
        }
    },
    {
        path: 'users/:userId/posts/:postId', 
        element : <UserPost />,
        loader: async ({params}) => {
            const userUrl = 
            'https://jsonplaceholder.typicode.com/users' + 
            '/' + params.userId
            const postsUrl = 
            'https://jsonplaceholder.typicode.com/posts' + 
            '/' + params.postId
            const commentsUrl = 
            'https://jsonplaceholder.typicode.com/posts' + 
            '/' +  params.postId +
            '/comments';

            const userResponse = await fetch(userUrl);
            const postResponse = await fetch(postsUrl);
            const commentResponse = await fetch(commentsUrl);
            const userData = await userResponse.json();
            const postData = await postResponse.json();
            const commentData = await commentResponse.json();
           return {
            user: userData,
            post: postData,
            comment: commentData
           }
          
        }
    },
    {
        path: 'users/:userId/albums/:albumId', 
        element : <UserAlbum />,
        loader: async ({params}) => {
            const albumUrl = 'https://jsonplaceholder.typicode.com/albums/' +
            params.albumId
            const url = 'https://jsonplaceholder.typicode.com/albums/' +
             params.albumId + '/photos'
            const albumResponse = await fetch(albumUrl);
            const response = await fetch(url)
            const data = await response.json()
            const AlbumData = await albumResponse.json();

           return {
            photos: data,
            album: AlbumData
           }
          
        }
    }
])

const Router = () => {
return <RouterProvider router={router}/>
}

export default Router