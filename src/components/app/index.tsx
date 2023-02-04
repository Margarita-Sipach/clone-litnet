import { Footer } from "../modules/footer";
import { Header } from "../modules/header";
import { AuthorizationPage } from "../pages/authorization";
import { MainPage } from "../pages/main";
import { RegistrationPage } from "../pages/registration";

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-white ">
      <Header />
      {/* <BlogPage/>     */}
      {/* <PersonalPage/> */}
      <RegistrationPage />
      {/* <AuthorizationPage/> */}
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
