import { Footer } from "../modules/footer";
import { Header } from "../modules/header";
import { MainPage } from "../pages/main";

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-white ">
      <Header />
      {/* <BlogPage/>     */}
      {/* <PersonalPage/> */}
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
