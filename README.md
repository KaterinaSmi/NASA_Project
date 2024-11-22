# NASA APOD (Astronomy Picture of the Day)

This project fetches the Astronomy Picture of the Day (APOD) from NASA's API and displays it on a webpage. The app includes an interactive sidebar that shows detailed information about the image of the day.

## Features
- Fetches and displays NASA's Astronomy Picture of the Day (APOD) for the current date.
- Uses the NASA API to get image data.
- Caches the data in the browser using `localStorage` for faster loading on subsequent visits.
- Responsive design: adapts to various screen sizes, including full-screen mode when the sidebar is closed.

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **CSS**: For styling the application and creating responsive layouts.
- **NASA API**: To fetch the Astronomy Picture of the Day (APOD) data.
- **localStorage**: For caching API data to improve load times.

## Installation

1.Clone the repository:
2.Navigate to the project directory
3.Install dependencies. npm install
4.Create a .env file in the root of the project and add your NASA API:
VITE_NASA_API_KEY=your_nasa_api_key_here
5.npm run dev

## Usage
-Upon visiting the page, the app will automatically fetch the Astronomy Picture of the Day (APOD) for the current date.
-The sidebar can be toggled to display additional information about the picture (e.g., the title, date, and explanation).
-The image and description can be viewed in full-screen mode by closing the sidebar

## License
This project is open-source and available under the MIT License.
