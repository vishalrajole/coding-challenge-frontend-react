# Stolen Bike Index - Frontend (React)

## Local Setup
- Clone this repo with `git clone https://github.com/vishalrajole/coding-challenge-frontend-react.git`
- run `yarn install`
- make sure .env file is created at project root level with 
    - REACT_APP_GOOGLE_MAP_API_KEY= API_KEY_VALUE  
    - REACT_APP_API_SERVER=https://bikewise.org/api/v2/ 
- run `yarn start`

## Live Demo on Heroku
https://coding-challenge-react.herokuapp.com/

## The context

Stolen bikes are a typical problem in Berlin. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop.

This app needs to display the list of reported bike thefts based on the Bikewise [API](https://www.bikewise.org/documentation/api_v2).

## Must-Have Requirements

As a police officer:

- [ ] I want to see a list of reported bike thefts for the Berlin area.
- [ ] I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
- [ ] I want to see a total number of bike theft cases.
- [ ] For each reported bike theft I want to see:
  - [ ] Case title
  - [ ] Case description
  - [ ] Date of the theft
  - [ ] Date of when the case was reported
  - [ ] Location of the theft
  - [ ] Picture of the bike, if available
- [ ] I want to filter reported bike thefts by partial case title.
- [ ] I want to see a loading state until the list is available.
- [ ] I want to see an error state if the list is unavailable.
- [ ] I want to see an empty state if there are no results.

## Nice-to-Have Requirements

After all must-have requirements have been met, some of the following nice-to-have items can also be included in the app.

As a police officer:

- [ ] I want to filter reported bike thefts by date range.
- [ ] I want to see a case detail page that shows:
  - [ ] Case description
  - [ ] Date of the theft
  - [ ] Date of when the case was reported
  - [ ] Location of the theft
  - [ ] Map of the location

## Task

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you’ll need to make requests to a publicly-available [API](https://www.bikewise.org/documentation/api_v2) to get JSON content and print it on view.

The API is known to have some limitations. If you are not able to implement a particular requirement, please provide a description of what and why you could not implements.

For the layout of each page, please refer to the provided wireframes:

- [Index page](./screens/index.png)
- [Error state](./screens/index_error.png)
- [Empty state](./screens/index_empty.png)
- [Loading state](./screens/index_loading.png)
- [Details page](./screens/details.png)

Refereneces:

- [BikeIndex](https://bikeindex.org/bikes?serial=&button=&location=Berlin&distance=100&stolenness=proximity)
- [BikeWise](https://bikewise.org)

