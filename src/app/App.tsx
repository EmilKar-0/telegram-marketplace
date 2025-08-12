import { Route, Routes } from "react-router-dom";
import { Header } from "@/widgets";
import { setupInterceptors } from "@/shared/api";
import { useAppDispatch } from "@/shared/hooks";
import React from "react";
import { Profile, Gifts } from "@/pages";
import ModalContainer from "../shared/ui/ModalContainer/ModalContainer.tsx";
function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setupInterceptors(); // Настраиваем интерцепторы
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<span>Главная</span>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<span>Not Found</span>} />
      </Routes>
      <ModalContainer />
    </div>
  );
}
export default App;
// https://mirthfully-certain-capelin.cloudpub.ru/api/v1/gift/1953889605
