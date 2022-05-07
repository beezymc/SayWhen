# SayWhen #
saywhen.vercel.app
## Project Summary ##
This app is the result of a two-day hackathon with the Hack Reactor cohort, and was one of 5/22 apps chosen to be presented at the graduation ceremony. The app itself is a scheduling app, whereby a user can input their availability for the week. Then the user can share this availability with anyone they'd like, who can then schedule activities based on that availability.
## Technical Stack ##
This project uses the following technologies: Node.js, PostgreSQL, Prisma, Next.js, Material UI, Vercel, AWS EC2
## Technical Description ##
### Server/Database ###
The database uses two types of tables to store the data: availabilities and activities. Availabilities have a one-to-many relationship with activities.
The data is communicated with the client via Next.js's built-in server in conjunction with the Prisma ORM, which itself uses GraphQL schemas to ensure data is accurately provided to the database.
### Client ###
When a user first gets to the page, they input their data and availability using the fields provided. Upon submission, a post request is made and the data stored in the database. In addition, the unique identifier of that availability data is returned with the response such that the user is redirected to a new page with that availability data using the identifier as the url path. That way, this page can be shared with anyone and is ensured to be unique. On the availability page exists a form by which any user on that page can submit an 'activity' (which is similarly stored to the database, as well as being rendered).
