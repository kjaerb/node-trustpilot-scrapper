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
I've setup the project to fetch from Trustpilot. Now you should learn some typescript, parse the data and return all of the reviews in a structured object. We found that trustpilot returns all of the data in jsonld (JSON Linked Data). Get familiar with javascript objects (Not class objects), see the structure of the object returned and see how we can get all of the reviews from there.
<img src="/assets/lomax_trustpilot.png" alt="trustpilot_lomax networks tab" />

Parsing this jsonld script tag from text to json then returns this object:
<img src="/assets/trustpilot_data.png" alt="jsonld object structure" />

There's a lot of metadata we might not want to use. The most important files are the once that have the "Review" type.

To get started, you should branch out to the `dev` branch, and work from there. Here you can add and push all of the changes that you want. When we want to merge them into main, we'll create a pull request. To see how to branch out, checkout the git section.

## Git
This project also allows you to try some version control with Git. If you don't already have Git installed, you can install it from <a href="https://git-scm.com/downloads" target="_blank">here</a>. Git (And github or other sites) allows you to upload and version your code, such that you can go back in time or branch out and work with multiple people. I've already setup a git project in this directory by running `git init`. This simply creates an empty git repo in a ".git" folder. This folder is hidden by default, but you can see it by running `dir -h` in the cmd (On unix `ls -a`). This folder simply holds some metadata about the git settings.

If it's the first time using git, you should probably add your username and email to the global git config by running
```cmd
git config --global user.name <insert git username>
git config --global user.email <insert git email>
```

Start by cloning the repository by running this command in the terminal:
```cmd
git clone https://github.com/kjaerb/node-trustpilot-scrapper.git
```

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
In git, it's possible to create a branch if you want to work with different people. Then you can simply checkout (switch) to a new branch where you can create your work there, without interfeering with others work. If it's the first time you're checking out to a branch, pass the "-b" flag to signal it's a new branch. If it's the first time pushing to a new branch git will most likely prompt you to:
```cmd
git push --set-upstream origin <branch name>
```

If there are changes you do not want to add anyways, before you've commited, you can run the stash command:
```cmd
git stash
```
This simply removes the changes you've made, and brings you back to your last commit.

A usual workflow would then look like this. My terminal looks a bit different as i use <a href="https://github.com/romkatv/powerlevel10k" target="_blank">powerlevel10k</a>. This just tells me updates and tells me what branch im on (master). You can see what branch you are on, by running the status command. 
Green = No git updates
Yellow + number = 2 git changes
Light blue = Commit ready to be pushed
<img src="/assets/git_workflow.png" alt="git workflow" />

### Git notes
I've added a `.gitignore` file. This file tells git all of the files/folders it should NOT include. Usually, this includes the node_modules folder, as it can be quite large. Also enviornment variables.