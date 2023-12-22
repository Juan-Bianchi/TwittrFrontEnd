# Twitter Training

This training project consists of taking a real project and adding, fixing, or improving some of its existing features. You will need to connect it with your Twitter backend service.

## Challenges

### Protected Routes

The objective of this feature is to add logic to protect certain routes that require an authenticated user to function. The following routes should be accessible to authenticated users:

- **Route**: `/`
  - **Component**: HomePage
- **Route**: `/recommendations`
  - **Component**: RecommendationPage
- **Route**: `/profile/:id`
  - **Component**: ProfilePage
- **Route**: `/post/:id`
  - **Component**: PostPage
- **Route**: `/compose/tweet`
  - **Component**: TweetPage
- **Route**: `/post/:id`
  - **Component**: CommentPage

**Why is it important?** We are sure that you will be working on a similar feature in your next project! The main reason for this is to prevent some users from accessing private routes or pages that contain sensitive data.

### Transform Javascript components to Typescript components

The objective of this task is to read and understand how some components work and transform them into Typescript. Remember that you can type almost everything.

The next component needs the proper changes:

- **Component**: components/tweet-box/TweetBox.jsx

**Why is it important?** In this company, the majority of the projects use React + Typescript. That's why you must be a Master Jedi with the art of Typescript. Additionally, some frameworks like Next.js strongly recommend the utilization of Typescript as a means to mitigate errors and enhance the comprehensibility of components.

### Transform Class Components to Functional Components

The objective of this task is to read and comprehend how class components function. You need to understand the component lifecycle and then transform them into functional components using TypeScript. In order to complete this task, you have to apply the proper changes to the next component:

- **Component**: page/post-page/PostPage.jsx

**Why is it important?** It's not very common nowadays to come across a project built from scratch using React class components (as they are not recommended). However, you may encounter them in older projects or libraries that have not been updated. On your journey to becoming a Master Jedi, it's important to familiarize yourself with some basic features of the old way of building components.

### Don’t repeat yourself, STUPID (Opss, that was KISS)

The objective of this task is to improve the Axios services. The previous developers have repeated the headers so many times. At the same time, we need to provide some logic where if we detect an error 401 (Unauthorized), you should log out the current user. 

**Sirius Tip:** Read about interceptors ;)

**Why is it important?** In order to reduce the duplicated lines, we need to know when and how to reduce them.


### Bug Hunting time

The objective of this task is to fix 2 bugs that the app has.
1. We are not checking that the user already exists when registering.
2. The menus (those kind of floating containers) when users click out of them, they are not closing.

### Validation

The objective of this task is to add some validations to the input fields that the app has. This time we will use Formik to perform the validations. It’s a famous library that allows us to add some logic to validate what users fill in.

**Why is it important?** As a frontend, you are always in front of the end user, that’s why you have to help them to know what's going on, and why it's failing if they encounter an input error.

### Style it

The objective of this task is to update some style files into styledComponents one. You will see that this technology is being used in almost every file in the project.

- **Component**: /components/follow-user/FollowUserBox.css
- **Component**: /components/user-data-box/UserDataBox.css

After that, you have to create from scratch a button and an input field, and should support variants, states, and sizes.

**Variants**: outlined, fulfilled, ghost & white
**Size**: small, medium, large

### Infinite Scroll

The objective of this task is to add an infinite scroller to see tweets on the home screen. This is the way that X (ex twitter) has to load tweets.

### Portals

The objective of this task is to enhance the app's modals. To achieve this, you need to master the art of Portals 🕳️. This feature, though not widely known, is useful for injecting components into another location without complexity.

**Why is it important?** Sometimes, we need to develop features that must bypass the hierarchical structure of the app (e.g., dropdowns, filters, modals, tooltips, menus, etc.). React Portal is a feature that enables us to achieve this type of behavior.

### Let’s chat

The objective of this task is to add functionality to chat with someone. You have already done the backend job, now is the time to apply it to the Frontend. Create a service to add the sockets that you will use.
