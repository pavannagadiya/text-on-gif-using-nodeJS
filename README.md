## Text on GIF Image Generator

This is a Node.js project that allows you to add text on GIF images and download the modified GIFs to the project's public folder. The project utilizes the `text-on-gif` package to achieve this functionality.

## Requirements

To run the project, you need to have the following installed on your system:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, comes with Node.js)

## Installation

1. Clone this Git repository to your local machine using the following command:

git clone [<repository-url>](https://github.com/pavannagadiya/text-on-gif-using-nodeJS)https://github.com/pavannagadiya/text-on-gif-using-nodeJS

2. Navigate to the project's directory:

cd text-on-gif-using-nodeJS


3. Install the required packages by running:

npm install


## Usage

1. Before starting the project, you need to ensure you have a GIF image on which you want to add text. The current GIF provided in the `assets/images/mr-bean-benestad.gif` will be used for demonstration purposes. If you want to use your own GIF, follow the instructions below.

2. Replace the existing GIF `mr-bean-benestad.gif` in the `assets/images/` folder with your own GIF, but make sure to keep the file name the same (i.e., `mr-bean-benestad.gif`).

3. Optionally, if you want to change the file name from `mr-bean-benestad.gif` to something else, you also need to update the file path in the `models/GIF.js` file. Modify the `gifGeneratorModel()` function to return the new file path.

4. To add dynamic text on the GIF, you can modify the `GIF.js` model file in the `models/` directory. Replace the static text with your desired dynamic content.

5. Once you have set up the GIF and made any necessary changes, you can start the project by running the following command:

npm start


6. The project will now be running locally. You can access the modified GIF in your browser by visiting: `http://localhost:3333/gifimages/textOnGifDone.gif`.

## Note

- If you encounter any issues during installation or usage, make sure you have fulfilled the project's requirements and followed the instructions correctly.

- This project is for educational and demonstrational purposes and may be extended further based on your specific requirements.

- Feel free to explore and experiment with the `text-on-gif` package and other functionalities to enhance the project as needed.

