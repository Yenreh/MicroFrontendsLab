#!/bin/bash

# Start all applications in the background
(cd app-shell && npm install && npm start) &
HOST_PID=$!

(cd home-app && npm install && npm start) &
DASHBOARD_PID=$!

(cd login-app && npm install && npm start) &
LOGIN_PID=$!

(cd users-app && npm install && npm start) &
USERS_PID=$!

# Function to terminate all applications
terminate_all() {
  echo "Terminating all applications..."
  kill $DASHBOARD_PID $HOST_PID $LOGIN_PID $USERS_PID
  wait $DASHBOARD_PID $HOST_PID $LOGIN_PID $USERS_PID
  echo "All applications terminated."
}

# Trap SIGINT and SIGTERM to terminate all applications
trap terminate_all SIGINT SIGTERM

# Wait for all applications to finish
wait