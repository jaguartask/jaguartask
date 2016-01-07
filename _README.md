# Jaguar Task

> Your basic To-Do list, but shareable and fun.

## Team

  - __Product Owner__: Gabriel Meyr
  - __Scrum Master__: Rokas Zickevicius
  - __Development Team Members__: Oleg Umarov, George Abou-Zolof

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

__Creating An Account__
This can be done from the homepage or at /signup.

__Making A List__
Once you're logged in, you are immediately presented with input fields for a new list. If you navigate to a list you already created then decide to make a new list, simply click the 'New List' button in the sidebar.

__Viewing A List__
After logging in you can see a directory of your lists in the sidebar on the left. Click on a list name to see all the tasks on the list. Click on a task to see details about that task.

__Sharing A List, Sub-list, Or Task__
While viewing a list, click the "Share List" button at the top of the page to share it. Enter the email address of the person you want to share it with and click "Ok!". That person will then be able to use the email to access the list. The list will be added to their user profile (it will remain on your own profile also).

If you are viewing a list and only want to share part of it, then click the checkbox by each task you want to share and then click "Share List". You can share individual tasks by just checking one box or by clicking on a task to view it in detail, then clicking "Share Task".

__Deleting A List__
Click the "Delete List" button when viewing a list to delete the list. You can delete individual tasks from either the list view page or the task view page by clicking the "X" in the top-right corner of the task.

## API Endpoints
/task_lists GET - return a collection of task lists with IDs and names, but not too much other information
/task_lists POST - create a new task list
/task_lists/:id GET - return task list object for specific ID
/task_lists/:id PUT - update a task list for specific ID
/task_lists/:id DELETE - delete a task list for specific ID
/task_lists/:id/tasks GET - returns a all tasks associated with that list ID
/task GET - return a collection of all tasks (IDs and names, not much else)
/task POST - create new task
/task/:id GET - return task object for specific ID
/task/:id PUT - update a task for specific ID
/task/:id DELETE - delete a task for specific ID
/users GET - return a collection of users (IDs and names, not too much info)
/users POST - create a new user
/users/:id GET - return user object for specific ID
/users/:id PUT - update a user for specific ID
/users/:id DELETE - delete a user for specific ID
/users/:id/task_lists GET - return a task  list for a specific user (task IDs and names)

## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
