# Social Network

A GraphQL, React.js, Apollo, Neo4j stack app with node.

## Frontend

### Routes

- `/` the home page containing the feed and post creating funtionality
- `/login` login using JWT
- `/register` sign up using JWT
- `/profile` **(Auth Only)** view your profile
- `/u/:userId` view other people's profiles.

### Components

- **AuthForm** recieve auth data from the user
- **AuthOnly** children are not visible to unauthenticated users
- **Brand** the logo I made for the website, featuring in navbar
- **Comment** a post comment
- **CommentList** maps an array of comments to a list of the **Comment** component
- **CreateComment** create and post a comment
- **CreatePost** create and post a post
- **Hovering** an absolute-positioned component, pointing to the element refrencing it.
- **ImageForm** a link form
- **Like** the like toggle of a post
- **Navbar** the app navvar
- **Post** a post
- **PostGallery** a post gallery of images
- **PostGelleryForm** a form collecting mutliple images
- **PostList** maps a array of posts to a list of the **Post** component
- **ProfilePic** uses the user's profile pic, mutable on request.
- **ProfilePicDelete** a button to delete your profile pic
- **ProfilePicEdit** a button to edit your profile pic, popping up a hoverable image form
- **ResizableTextArea** the textarea used to post comments and posts
- **SearchBar** a string input to search for users, featuring in the navbar
- **UserCard** shown in the user profile
- **UserList** maps an array of user search results to a list of the **UserListItem** component
- **UserListItem** displays a user search result

### Hooks

- `useChangeAvatar(initialAvatar: string)`
  - responsible for avatar mutations
  - returns `{ delete(): void, change(url: string): void, avatarUrl: string }`;
- `useComment(postId: any)`
  - responsible for comment posting logic
  - returns `{ comment(content): void }`
- `useDeleteComment(postAuthorId: any)`
  - responsible for deleting comments presmission and execution
  - returns `{ allowDelete(commentAuthorId: any): boolean, remove(commentId: any): void }`
- `useDeletePost(refetchPosts(): void, postId: any, authorId: any)`
  - responsible for deleting posts permission and execution
  - returns `{ remove(): void, allowDelete: boolean }`
- `useFeed()`
  - responsible for getting the feed based on people the user follows
  - returns `{ feed: Post[], refetch(): void }`
- `useFollow(initialIsFollowing: boolean, initialFollowing: number, userId: any)`
  - responsible for toggling between following and unfollowing a specified user
  - returns `{ followerCount: number, isFollowing: boolean, toggle(): void }`
- `useLike(initialIsLiked: boolean, initialLikes: number, postId: any)`
  - responsible for toggling between liking and unliking a specified post
  - returns `{ likes: number, isLiked: boolean, toggle(): void }`
- `useLogin()`
  - responsible for all frontend login logic and saving the token
  - returns `{ error: any, login(credentials: { email, password }): void }`
- `usePost(refetchPosts(): void)`
  - responsible for posting functionality
  - returns `{ post(gallery: string[], content: string): void }`
- `useProfile()`
  - responsible for using the token to fetch user data and put it inside a context provider
  - returns `{ ...user: User, loading: boolean, refetch(): void }`
- `useRegister()`
  - responsible for all frontend register login and saving the token
  - returns `{ error: any, register(credentials: { email, password, name }): void }`
- `useSearch()`
  - responsible for search queries
  - returns `{ search(q: string): void, clear(): void }`
- `useSignout()`
  - responsible for removing the token and refetching the profile on command
  - returns `{ signout(): void }`
- `useUser(userId)`
  - responsible for querying a specific user when visiting their profile
  - returns `{ ...user: User, isFound: boolean, loading: boolean }`

## Backend

The beackend is built with `neo4j-graphql-js` so the resolvers are written automatically, except Login and Signup resolvers.

### Schema

- User

```graphql
type User {
  _id: ID
  name: String
  avatarUrl: String
  email: String
  password: String
  liked: [Post]
  created: [Post]
  following: [User]
  followers: [User]
  followingCount: Int
  followerCount: Int
  isFollowing: Boolean
}
```

- Post

```graphql
type Post {
  _id: ID
  date: _Neo4jDateTime
  content: String
  gallery: [String]
  likes: Int
  Author: User
  isLiked: Boolean
  Comments: [Comment]
  commentCount: Int
}
```

- Comment

```graphql
type Comment {
  content: String
  date: _Neo4jDate
  Author: User
}
```

### Queries

- `feed(first: Int): [Post]`
- `Profile: User`
- `Search(q: String, limit: Int, offset: Int): [User]`
- `Login(email: String, password: String): String`

### Mutations

- `NewPost(content: String, gallery: [String]): Post`
- `RemovePost(postId: Int): User`
- `Follow(userId: Int): User`
- `Unfollow(userId: Int): User`
- `Like(postId: Int): Post`
- `Unlike(postId: Int): Post`
- `SetAvatarUrl(url: String): User`
- `Comment(content: String, postId: Int): Comment`
- `RemoveComment(commentId: Int): Post`
- `Signup(email: String, password: String, avatarUrl: String, name: String): String`
