import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";


function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
