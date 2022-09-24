import './App.less';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './Theme/defaultTheme';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
