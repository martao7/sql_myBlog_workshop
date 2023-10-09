# sql_myBlog_workshop: backend & frontend server

This application displays a blog with notes fetched from a backend server. Each note contains information such as the titel, image URL and release date. You can also add/delete note to/from the blog.

## Live Demo :flamingo:

[Click here to see the live demo!](https://myblog-starlight-122f3f.netlify.app/)

## Backend server

PostgreSQL connection settings(.env file):

```
DB_HOST=server
DB_USER=username
DB_PASSWORD=password
DB_PORT=5432
```

Table in PostgreSQL database(ElephantSQL):

```sql
CREATE TABLE notes (
id SERIAL PRIMARY KEY,
titel VARCHAR(255),
note text,
image_url VARCHAR(255),
release_date DATE
);
```
