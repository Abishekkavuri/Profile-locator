# Profile-locator

## Overview
**Profile Locator** is a React-based web application that allows users to view a list of profiles and explore their associated addresses on an interactive map. This project integrates Google Maps for address visualization and provides an intuitive interface for navigating and managing profiles.

## Features
1. **Profile Display**
   - Displays profiles with name, photo, and description.
   - A "Summary" button to visualize the profile's location on a map.

2. **Interactive Mapping**
   - Dynamic map integration using Google Maps API.
   - Displays a marker at the address associated with the selected profile.

3. **Responsive Design**
   - Optimized for desktop, tablet, and mobile devices.

4. **Search and Filter (Future Feature)**
   - Search and filter profiles by name or location.

5. **Admin Panel (Future Feature)**
   - Add, edit, or delete profiles through an admin dashboard.

6. **Error Handling**
   - Graceful handling of invalid addresses or failed API requests.

7. **Loading Indicators**
   - Feedback provided to users during data fetching or map rendering.

## Technologies Used
- **React**: For building the user interface.
- **React Router**: For navigation and routing.
- **Google Maps API**: For map integration.
- **Axios**: For API calls.
- **CSS Modules**: For styling components.

## Installation and Setup

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Steps to Run the Application
1. Clone the repository:
   ```bash
   https://github.com/Abishekkavuri/Profile-locator.git
   cd profile-locator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your Google Maps API key:
   - Open `/components/MapComponent.js`.
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key.

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Folder Structure
```
/src
  /components
    - ProfileCard.js
    - MapComponent.js
  /pages
    - ProfileList.js
  /App.js
```

## Usage
1. Open the application in your browser.
2. View the list of profiles on the home page.
3. Click the "Summary" button on a profile to view its address on the map.

## Future Enhancements
- **Admin Panel**: Add a dashboard for profile management.
- **Search and Filter**: Implement search and filtering capabilities.
- **Profile Details Page**: Provide a detailed view of each profile.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---

### Contact
For questions or feedback, please reach out at mailtoabisheka@gmail.com.

## GitHub Repository
Check out the project on GitHub: [Profile Locator](https://github.com/Abishekkavuri/Profile-locator.git).

