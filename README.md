# name_website
This is frontend and backend, with 2 repos and no "/run". 


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
Firstly, make sure you have downloaded all the s
