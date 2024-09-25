import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../../components/layout";
import forward from "../../images/forward-64.png";
import image from "../../images/background/1.jpg";

export const AboutCompanyPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const headerHeight = 88;
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const offset = element.offsetTop - headerHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <main className="w-full max-w-full">
        <div id="about-company" className="h-[162px]"></div>
        <section
          className="bg-cover bg-left-top h-60 flex jusify-start xl:justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1
            className="tracking-tighter p-2 md:p-4 xl:w-4/5 max-w-screen-custom2xl flex items-center text-white text-[38px] sm:text-5xl"
            style={{
              textShadow: "4px 4px 30px #000000, -4px -4px 30px #000000",
            }}
          >
            О КОМПАНИИ
          </h1>
        </section>
        <div className="flex justify-start xl:justify-center ">
          <h2 className="p-4 xl:w-4/5 text-justify max-w-screen-custom2xl font-semibold text-xl md:text-2xl">
            Предприятие ООО «МПС» — опытный участник рынка черного
            металлопроката.
          </h2>
        </div>
        <section className="pb-12 border-b border-gray-200 shadow-lg flex justify-center">
          <div className="block md:flex px-4 w-full xl:w-4/5 max-w-screen-custom2xl">
            <div className="h-[520px] lg:h-[400px] md:absolute flex text-justify md:mt-[12px] md:w-2/4 xl:w-2/5 max-w-4xl border-[13px] border-customGray border-opacity-80 rounded-sm bg-white z-20">
              <div className="p-4 flex flex-col justify-evenly">
                <p className="text-xl">
                  Наш металлоцентр предлагает широкий ассортимент листового,
                  сортового и трубного металлопроката различных толщин и марок
                  стали.
                </p>
                <p className="text-xl">
                  В перечень сервисных услуг входят: порезка в размер, гибка,
                  сверлильные, токарные, вальцовочные, фрезерные и др. работы.
                </p>
                <p className="text-xl">
                  Помимо механической обработки, наша компания занимается
                  производством металлоконструкций под заказ.
                </p>
              </div>
            </div>
            <div className="absolute mt-[13px] md:w-4/5 xl:w-7/10 max-w-7xl h-[520px] lg:h-[400px] bg-customGray opacity-80"></div>
            <figure className="md:h-[520px] lg:h-[400px] md:relative md:w-3/5 lg:w-4/7 mb-[12px] md:border-[13px] md:ml-auto border-customOrange border-opacity-80 rounded-sm bg-white z-10">
              <div className="md:pl-32 lg:pl-10 2xl:pl-24 pt-12 lg:pt-12 right-0 flex flex-wrap justify-center lg:grid grid-cols-2 justify-items-center gap-16 md:gap-0">
                <div className="w-[350px] lg:w-[200px] 2xl:w-[300px] h-[80px] lg:h-[150px] flex items-start">
                  <img
                    src={forward}
                    alt="forward"
                    className="w-[64px] h-[64px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] 2xl:w-[64px] 2xl:h-[64px]"
                  />
                  <div className="grid justify-center gap-2 md:gap-0 lg:gap-2">
                    <div className="pt-4 md:pt-[6px] lg:pt-2 2xl:pt-3 text-customOrange text-[48px] md:text-3xl lg:text-4xl 2xl:text-[48px]">
                      12 лет
                    </div>

                    <p className="text-gray-500 text-2xl md:text-xl 2xl:text-2xl font-normal">
                      на рынке
                    </p>
                  </div>
                </div>
                <div className="w-[350px] lg:w-[280px] 2xl:w-[300px] h-[110px] lg:h-[150px] flex items-start">
                  <img
                    src={forward}
                    alt="forward"
                    className="w-[64px] h-[64px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] 2xl:w-[64px] 2xl:h-[64px]"
                  />
                  <div className="grid justify-center gap-2 md:gap-0 lg:gap-2">
                    <div className="pt-4 md:pt-[6px] lg:pt-2 2xl:pt-3 text-customOrange text-[48px] md:text-3xl lg:text-4xl 2xl:text-[48px]">
                      19 000 м&sup2;
                    </div>

                    <p className="text-gray-500 text-2xl md:text-xl 2xl:text-2xl font-normal">
                      производственных и складский площадей
                    </p>
                  </div>
                </div>
                <div className="w-[350px] lg:w-[200px] 2xl:w-[300px] h-[110px] lg:h-[150px] flex items-start">
                  <img
                    src={forward}
                    alt="forward"
                    className="w-[64px] h-[64px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] 2xl:w-[64px] 2xl:h-[64px]"
                  />
                  <div className="grid justify-center gap-2 md:gap-0 lg:gap-2">
                    <div className="pt-4 md:pt-[6px] lg:pt-2 2xl:pt-3 text-customOrange text-[48px] md:text-3xl lg:text-4xl 2xl:text-[48px]">
                      1 000 т
                    </div>

                    <p className="text-gray-500 text-2xl md:text-xl 2xl:text-2xl font-normal">
                      продукции <br />
                      на складе
                    </p>
                  </div>
                </div>
                <div className="w-[350px] lg:w-[280px] 2xl:w-[300px] h-[110px] lg:h-[150px] flex items-start">
                  <img
                    src={forward}
                    alt="forward"
                    className="w-[64px] h-[64px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] 2xl:w-[64px] 2xl:h-[64px]"
                  />
                  <div className="grid justify-center gap-2 md:gap-0 lg:gap-2">
                    <div className="pt-4 md:pt-[6px] lg:pt-2 2xl:pt-3 text-customOrange text-[48px] md:text-3xl lg:text-4xl 2xl:text-[48px]">
                      25
                    </div>

                    <p className="text-gray-500 text-2xl md:text-xl 2xl:text-2xl font-normal ">
                      сотрудников
                      <br />в штате
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
};
