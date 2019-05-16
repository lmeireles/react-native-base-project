## ReactNative Base Project

This project has some screen and functionality examples

### Start Using the Project

1. Rename the project with:
    - `npm install react-native-rename -g`
    - `react-native-rename "NewAppName" -b br.com.company.newname`
2. Run `yarn` or `npm install`

### Project Structure

    .
    ├── ...
    ├── src                       
    │   ├── components              # Statless layout components
    │   ├── routes                  # Routes configuration
    │   ├── screens                 # Screens and specific layout components
    │   ├── state                   # Global state, reducers, actions, queries
    │   └── utils                   # Helpers (axios, storage, etc...)
    ├── App.js                      # Load initial routes and state
    ├── index.js                    # Register and initialize the app
    ├── .env                        # Global constants
    └── README.md                   # You are here! :)

### Packages Dependencies and Settings

- [styled-components](https://github.com/styled-components/styled-components)
- [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) Change the `.env` file to update project constants.
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-native-screens](https://github.com/kmagiera/react-native-screens) This package greatly improves the navigation performance between screens.
- [axios](https://github.com/axios/axios)
- [prop-types](https://github.com/facebook/prop-types)
- [formik](https://github.com/jaredpalmer/formik)
