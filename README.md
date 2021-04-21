---

## Instruction

Before running the project, please run the following command to install the dependencies

```bash
npm install
```

After node modules installation completed, please run the following command:

```bash
npm run start
```

It will then start looking for the files with **TODO** keyword in the project directory, and print out all the files
with path.

### Test

To run the test cases, please run the following command:

```bash
npm run test
```

### Build as CLI application

To build this application and run globally, please first run the following command:

```bash
npm install -g .
```

To run the application, simple run the following command at the required directory:

```bash
todo-files-finder

# you shall see the following output in console:

# > Number of files found: 1
# > /path/to/the/file
```

---

## Problem Statement

It's common to see TODOs in code. It's also common for TODOs to remain as to-dos for a long time. One way we can solve
this problem is to have a service that runs through all files in a given directory and checks for any instances of the
key-phrase "TODO", flagging each one of them out for humans to continue working on them.

## Challenge

Write an application/script that when executed in a directory, produces a list of all files (using their absolute paths)
containing the keyword "TODO" in them. The files can be in the immediate directory, or a sub-directory (or a
sub-directory of the sub-directory, ad infinitum).
