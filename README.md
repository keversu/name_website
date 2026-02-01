# name_website
This is frontend and backend, with 2 repos and no "/run". please read this in code form. 


Remember this is how you order the files in your vscode, and also later on you need to open 2 terminals.
frontend/
  package.json
  vite.config.js          <-- proxy lives here (IMPORTANT)
  index.html              <-- main page (inputs + output container)
  src/
    main.js               <-- main frontend logic (fetch + render)
    style.css             <-- optional
backend/
  app.py                  <-- main server entry point
  requirements.txt        <-- python deps
  logic/
    __init__.py
    core.py               <-- your real python “implementation”


Steps to set this up:
Firstly, make sure you have downloaded all the necessary software. please check them.
  python3 --version
  node --version
  npm --version

if they don't exist, brew install node

Now, go to vscode terminal as terminal 1, type in backend (each line is one time)
  cd backend
  python3 -m venv .venv
  source .venv/bin/activate
  pip install -r requirements.txt
  python3 app.py
Now, leave that terminal running

Run the frontend. go to classic terminal,
  cd frontend
  npm install
  npm run dev


now open this in your browser, http://localhost:5173

  

