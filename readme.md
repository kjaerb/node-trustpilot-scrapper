# Node Trustpilot scrapper

## Getting started
Ensure that you have <a href="https://nodejs.org/en" target="_blank">node.js</a> installed, such that you can run the CLI.
Once node is installed, install the necessary packages defined in the package.json by running:
```cmd
npm install
```
This install the packages and puts them in the `node_modules` folder and also created the package-lock.json (Dont worry about these).

As this project uses Typescript, we need to compile it to javascript, before we can run it. To compile it once run:
```cmd
npx tsc
```
This compiles all of the typescript in the `main.ts` file and puts them in the `dist` folder. However, this can be quite annoying to compile the file every time you have a change. We can setup a file watcher by parsing the `--watch` flag to the command, such that it becomes:
```cmd
npx tsc --watch
```
To run the script, you can now run:
```cmd
npm run main
```
This runs the script in the terminal. The script it defined in the `package.json` file under the scripts object.

## Further development
I've setup the project to fetch from Trustpilot. Now you should learn some typescript, parse the data and return all of the reviews in a structured object.

## Git
This project also allows you to try some version control with Git. If you don't already have Git installed, you can install it from <a href="https://git-scm.com/downloads" target="_blank">here</a>. Git (And github or other sites) allows you to upload and version your code, such that you can go back in time or branch out and work with multiple people. I've already setup a git project in this directory by running `git init`. This simply creates an empty git repo in a ".git" folder. This folder is hidden by default, but you can see it by running `dir -h` in the cmd (On unix `ls -a`). This folder simply holds some metadata about the git settings.

There are a couple of commands to worry about:
```cmd
git status
```
This gives you a status of the files that are tracked and untracked by git. Red files are not added to git, whilst green files are versioned.

```cmd
git add <insert file name or "." for all files>
```
This adds a file to git, such that it is versioned. You can also use "." to add all files in the directory. Using "." is what i usually recommend.

```cmd
git commit -m "<insert message for commit>"
```
A commit is all of the changes that you want to push to git. You take a snapshot of all the files you've added to git and then commit them with a message, before pushing them.

```cmd
git push
```
This pushes your changes to git. (Uploads them to github)

```cmd
git checkout <branch to checkout to>
```
In git, it's possible to create a branch if you want to work with different people. Then you can simply checkout (switch) to a new branch where you can create your work there, without interfeering with others work. If it's the first time you're checking out to a branch, pass the "-b" flag to signal it's a new branch.

### Git notes
I've added a `.gitignore` file. This file tells git all of the files/folders it should NOT include. Usually, this includes the node_modules folder, as it can be quite large. Also enviornment variables.