import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="">
          <div className=" mobile_bg xs:desktop_bg  xs:bg-center xs:bg-scroll bg-fixed w-full h-screen bg-no-repeat bg-cover xs:bg-auto "></div>
          <div className=" xs:flex h-[700px] "></div>
        </div>
      </main>
    </>
  );
}

export default Home;
