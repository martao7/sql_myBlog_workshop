# sql_myBlog_workshop: backend & frontend server

This application displays a blog with notes fetched from a backend server. Each note contains information such as the titel, image URL and release date. You can also add/delete note to/from the blog.

## Live Demo

[Click here to see the live demo!](https://my-834f93.netlify.app/)

### Backend server

PostgreSQL connection settings(.env file):

DB_HOST=your_server
DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=5432

Table in PostgreSQL database(ElephantSQL):

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
titel VARCHAR(255),
image_url VARCHAR(255),
release_date DATE
);
