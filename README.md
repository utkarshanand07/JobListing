# JobListing API

**JobListing API** is a robust backend service for a job board application, built using **Java** and the **Spring Boot** framework. It leverages **MongoDB Atlas Search** to provide powerful, full-text search capabilities across multiple job fields, delivering a fast and efficient job discovery experience.

## 🚀 Features

- **RESTful API**: Provides clean and simple endpoints for managing job posts.
- **Advanced Search**: Implements MongoDB's `$search` aggregation for powerful full-text search across job profiles, descriptions, and required technologies.
- **Scalable Backend**: Built with Spring Boot for a high-performance, production-ready server.
- **Easy Integration**: Can be easily connected to any frontend application.
- **Direct Database Interaction**: Uses Spring Data MongoDB for seamless communication with the database.

## 🛠️ Tech Stack

### Backend:
- Java
- Spring Boot
- Spring Web
- Spring Data MongoDB

### Database:
- MongoDB (Requires MongoDB Atlas for Search functionality)

## 📂 Project Structure
```
joblisting/
└── src/
    └── main/
        └── java/
            └── com/marvel/joblisting/
                ├── controller/ # API Controllers (Endpoints)
                ├── model/      # Data Models (Post)
                └── repository/ # Data Access Layer (Repositories)
```

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone [https://github.com/utkarshanand07/JobListing.git](https://github.com/utkarshanand07/JobListing.git)
cd JobListing
```

### 2️⃣ Configure MongoDB
This project requires a MongoDB Atlas cluster to use the `$search` feature.

1.  Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  In `SearchRepositoryImpl.java`, replace the placeholder values with your database and collection names:
    ```java
    MongoDatabase database = client.getDatabase("your_database_name");
    MongoCollection<Document> collection = database.getCollection("your_collection_name");
    ```
3.  In your `src/main/resources/application.properties` file, add your MongoDB Atlas connection string:
    ```properties
    spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    ```

### 3️⃣ Create a Search Index on Atlas
In your MongoDB Atlas collection, you must create a Search Index for the search functionality to work.
1.  Go to the "Search" tab for your cluster.
2.  Create a new Search Index on your collection with the default dynamic mapping.

### 4️⃣ Run the Application
You can run the application using the Maven wrapper:
```sh
./mvnw spring-boot:run
```
The server will start on the default port (usually 8080).

## 📜 API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | `/allPosts` | Fetches all job listings from the database. |
| POST | `/post` | Adds a new job post. |
| GET | `/posts/{text}` | Searches for jobs matching the text. |


## 🚀 Deployment
For deploying the JobListing API, make sure you:
1.  Have a running MongoDB Atlas cluster with the correct Search Index configured.
2.  Build the project into a JAR file: `./mvnw clean package`.
3.  Deploy the generated JAR file (`target/*.jar`) to a cloud platform like **Heroku**, **Render**, or **AWS Elastic Beanstalk**.

## 🎯 Contribution
We welcome contributions! Follow these steps to contribute:
1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature-branch`.
3.  Commit your changes: `git commit -m "Add new feature"`.
4.  Push the changes: `git push origin feature-branch`.
5.  Create a Pull Request.

## 📄 License
This project is licensed under the **MIT License**.

## 🐾 Connect With Us
- **Project Link:** [JobListing on GitHub](https://github.com/utkarshanand07/JobListing)
- **Author:** [Utkarsh Anand](https://github.com/utkarshanand07)

---

⭐ **If you like this project, consider giving it a star!** ⭐
