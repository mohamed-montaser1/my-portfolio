import { Provider } from "./Context/sendMail";
import Mainpage from "./pages/Mainpage/Mainpage";
function App() {
  return (
    <>
      <Provider>
        <Mainpage />
      </Provider>
    </>
  );
}

export default App;
