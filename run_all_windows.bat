@echo off
setlocal

:: Start all applications in the backgrounds
start "Dashboard" cmd /c "cd home-app && npm install && npm start"
set DASHBOARD_PID=%!

start "Host" cmd /c "cd app-shell && npm install && npm start"
set HOST_PID=%!

start "Login" cmd /c "cd login-app && npm install && npm start"
set LOGIN_PID=%!

start "Users" cmd /c "cd users-app && npm install && npm start"
set USERS_PID=%!

:: Function to terminate all applications
:terminate_all
echo Terminating all applications...
taskkill /PID %DASHBOARD_PID% /F
taskkill /PID %HOST_PID% /F
taskkill /PID %LOGIN_PID% /F
taskkill /PID %USERS_PID% /F
echo All applications terminated.
exit /b

:: Trap Ctrl+C to terminate all applications
trap terminate_all INT

:: Wait for all applications to finish
wait