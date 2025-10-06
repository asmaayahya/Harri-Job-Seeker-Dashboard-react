import "./App.css";
import { ColumnsContainer } from "./components/ColumnsContainer/ColumnsContainer";
import { Header } from "./components/Header/Header";




export const App = () => {
  return (

    <>
      <Header
        logoSrc="src/assets/harri.png"
        userName="Jeeeerrad"
        userPhoto="src/assets/user_photo.jpg" />

      <ColumnsContainer>
      </ColumnsContainer>
    </>
  );
};
