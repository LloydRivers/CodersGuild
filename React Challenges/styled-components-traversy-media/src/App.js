import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
const theme = {
  colors: {
    header: "#ebfbff",
    body: " #fff",
    footer: "#003333",
  },
  mobile: '768px'
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;