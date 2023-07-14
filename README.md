
# ToDoZen

ToDoZen ,where productivity meets serenity. Experience seamless task management with our cloud-based web-app, combining efficiency and organization for a zen-like approach to getting things done. Effortlessly create, edit, and delete tasks, assign them to others, and collaborate with ease. Maximize your productivity and simplify task management with TodoZen.
Let's get things done, together!

App is live at: https://todozen-client.onrender.com/


## Screenshots
Login / Landing page:
![Login / Landing page](https://raw.githubusercontent.com/kajaveaniruddha/ToDoZen-client/master/public/Login.png)

User page:

* Draggable Left Navbar.
* CRUD operations on tasks can be performed here.
* stationary material task assigned by mom as usual and you planning to go for sports.
![user page](https://raw.githubusercontent.com/kajaveaniruddha/ToDoZen-client/264e14b0c5287752cd6173110179b6bfd6a54ce1/public/user.png)

Edit your tasks here:
![edit page](https://raw.githubusercontent.com/kajaveaniruddha/ToDoZen-client/264e14b0c5287752cd6173110179b6bfd6a54ce1/public/edit%20task.png)

Edit your task's assignees here:

* The search bar allows users to filter assignees by typing their email and displaying matching names as results.
* Add and delete assignees from here.
![edit assignees page](https://raw.githubusercontent.com/kajaveaniruddha/ToDoZen-client/264e14b0c5287752cd6173110179b6bfd6a54ce1/public/assignees.png)


## Run Locally

#### Note - you need to run the [server](https://github.com/kajaveaniruddha/ToDoZen-server) simultaneously.

Clone the project

```bash
  git clone https://github.com/kajaveaniruddha/ToDoZen-client.git
```

Go to the project directory

```bash
  cd ToDoZen-client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
Build for production

```bash
  npm run build
```

## Tech Stack

**Client:** React , React-HashRouter , TailwindCSS, Framer

[**Server:**](https://github.com/kajaveaniruddha/ToDoZen-server) Node, Express, Mongoose
            



## Lessons Learned

During my 5th semester, I undertook a two-week-long MERN project to apply the technologies I had learned up until that point and familiarize myself with new features' documentation. The goal was to build a cloud-based web application that allowed CRUD operations on tasks, along with features like task assignment to users in our database.

My main tasks were to implement authentication and choose appropriate technologies for the project. I encountered challenges with authentication, which led me to conduct research on OAuth and Auth0. Eventually, I found a solution using  [JSON Web Tokens (JWT)](https://jwt.io) . Additionally, I needed to select the right technology stack and optimize the project setup for efficiency.

To handle authentication, I spent time researching and learning about OAuth, Auth0, and JWT. After evaluating different options, I decided to implement JWT for authentication in my project. I invested time in understanding the documentation and integrating it into the application. For the technology stack, I chose Node, Express, Mongoose, React, JSX, React-HashRouter, ES6,Framer, and Tailwind CSS. I utilized the `npm create vite@latest my-react-app --template react` boilerplate for a quicker setup and focused more on exploring various technologies.

The project resulted in a functioning cloud-based web application that allowed CRUD operations on tasks and user assignment. Authentication was successfully implemented using JWT. The chosen technology stack worked well together. The React-HashRouter component resolved the URL issue after deployment, ensuring a smooth user experience. Utilizing Vite for setup proved beneficial, as it provided speed, simplicity, and flexibility. In future iterations, I plan to enhance the project further by incorporating Redux for improved performance and scalability, as well as adding features such as task completion and categorization.

##
Why `<HashRouter>` and not just `<Router>` ?

I decided to use React-HashRouter instead of the traditional React Router in my project. This choice was made in response to an unforeseen issue that occurred after deploying the web application. The problem was that the browser couldn't send the URL to the server, which caused users to be prompted to sign in again whenever they refreshed a page. By utilizing React-HashRouter, I was able to overcome this obstacle. It resolved the issue by storing the current location in the hash portion of the URL, ensuring that it was not sent to the server. As a result, users' authentication status and session information remained intact, eliminating the need for them to sign in repeatedly. This adjustment improved the user experience in my deployed web application. Learn more about [HashRouter](https://reactrouter.com/en/main/router-components/hash-router).

Why `vite`?
 
[Vite](https://vitejs.dev) was selected for its speed and straightforward configuration. The time invested in transitioning to Vite quickly paid off. Vite's Hot Module Replacement (HMR) feature ensured that changes were immediately reflected in the browser, and Speedy Web Compiler's (SWC) fast compilation times accelerated the build process. Despite its extensive capabilities, Vite remained user-friendly and did not impose limitations. Above all, using Vite allowed me to save time and provided a flexible tool that could easily integrate into any javascript project.

