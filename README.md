# TODOListPython
Flask, React, MySQL

## Setting up without Docker and Kubernetes
1. Create DB **flaskpy** in MySQL
2. Access to DB on *pysql* by user: *root* with password: *password*
3. Restore tables and data from dump file **tasks.sql**
4. Make sure you have all python modules from **requirements.txt**
5. Run command: ``` $ python ./src/main.py```

## Setup all ports and IP addresses according to situation.

## Starting a cluster to run the orchestrated application:
1. Setup frontend, backend, db
2. Build docker images for frontend and backend
3. Make kubernetes deployments for frontend, backend and db
4. Create services to discover and load balance