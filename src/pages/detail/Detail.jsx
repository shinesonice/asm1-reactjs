import NavBar from "../../component/NavBar/NavBar";
import Head from "../../Layout/Head/Head";
import Header from "../../component/Header/Header";
import Main from "../../Layout/Main/Main";
import City from "../../component/City/City";
import Type from "../../component/Type/Type";
import Hotel from "../../component/Hotel/Hotel";
import Register from "../../component/Register/Register";
import Foot from "../../Layout/Foot/Foot";
import Footer from "../../component/Footer/Footer";
import Layout from "../../Layout/Layout/Layout";
import DetailPage from "../../component/DetailPage/DetailPage";

const Home = () => {
  return (
    <div>
      <Layout>
        <Head>
          <NavBar />
        </Head>
        <Main>
          <DetailPage />
        </Main>
        <Foot>
          <Footer />
        </Foot>
      </Layout>
    </div>
  );
};

export default Home;
