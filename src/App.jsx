import './App.css';
import Calendar from './components/CardDisplay'

const App = () => {

  return (
    <div className="App">
      <h1>Top 10 Tourist Destinations in Karnataka, India</h1>
      <h1 className='kannada'>(ಭಾರತದ ಕರ್ನಾಟಕದಲ್ಲಿರುವ ಪ್ರಸಿದ್ಧ್ ೧೦ ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು)</h1>
      <h2>Visiting Karnataka? Check out these popular tourist destinations! This state offers everything from beautiful heritage sites to national wildlife parks!</h2>
      <h2 className='kannada'>(ಕರ್ನಾಟಕಕ್ಕೆ ಭೇಟಿ ನೀಡುತ್ತೀರಾ? ಈ ಜನಪ್ರಿಯ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ! ಈ ರಾಜ್ಯವು ಸುಂದರವಾದ ಪಾರಂಪರಿಕ ತಾಣಗಳಿಂದ ಹಿಡಿದು ರಾಷ್ಟ್ರೀಯ ವನ್ಯಜೀವಿ ಉದ್ಯಾನವನಗಳವರೆಗೆ ಎಲ್ಲವನ್ನೂ ನೀಡುತ್ತದೆ!)</h2>
      <Calendar />
    </div>
  )
}

export default App