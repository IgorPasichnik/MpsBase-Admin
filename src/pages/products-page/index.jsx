import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  useGetListProductsQuery,
  useGetSortProductsQuery,
  useGetTrubProductsQuery,
} from "../../app/services/products";
import { Layout } from "../../components/layout";

export const ProductsPage = () => {
  const { data: dataSort, isLoading: isLoadingSort } =
    useGetSortProductsQuery();
  const { data: dataList, isLoading: isLoadingList } =
    useGetListProductsQuery();
  const { data: dataTrub, isLoading: isLoadingTrub } =
    useGetTrubProductsQuery();
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
      <main className="w-full border-gray-200 shadow-lg flex justify-center">
        <div className="px-4 pb-[180px] w-full xl:w-4/5 max-w-screen-custom2xl flex flex-col items-start border-b">
          <h2 id="sheet" className="pt-[220px] font-bold text-2xl">
            ЛИСТОВОЙ ПРОКАТ
          </h2>
          <table className="text-lg w-full max-w-screen-custom2xl">
            <thead>
              <tr className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left">
                <th>Вид проката</th>
                <th>Общая характеристика</th>
              </tr>
            </thead>
            <tbody>
              {dataList &&
                !isLoadingList &&
                dataList.map((item) => (
                  <tr
                    key={item.id}
                    className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left"
                  >
                    <td className="h-[20px] text-lg w-1/2 md:w-[380px] xl:w-[500px]">
                      {item.name}
                    </td>
                    <td className="text-lg flex-grow">{item.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <h2 id="variety" className="pt-[180px] font-bold text-2xl">
            СОРТОВОЙ ПРОКАТ
          </h2>
          <table className="text-lg w-full max-w-screen-custom2xl">
            <thead>
              <tr className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left">
                <th>Вид проката</th>
                <th>Общая характеристика</th>
              </tr>
            </thead>
            <tbody>
              {dataSort &&
                !isLoadingSort &&
                dataSort.map((item) => (
                  <tr
                    key={item.id}
                    className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left"
                  >
                    <td className="h-[20px] text-lg w-1/2 md:w-[380px] xl:w-[500px]">
                      {item.name}
                    </td>
                    <td className="text-lg flex-grow">{item.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>

          <h2 id="pipe" className="pt-[180px] font-bold text-2xl">
            ТРУБНАЯ ПРОДУКЦИЯ
          </h2>
          <table className="text-lg w-full max-w-screen-custom2xl">
            <thead>
              <tr className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left">
                <th>Вид проката</th>
                <th>Общая характеристика</th>
              </tr>
            </thead>
            <tbody>
              {dataTrub &&
                !isLoadingTrub &&
                dataTrub.map((item) => (
                  <tr
                    key={item.id}
                    className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left"
                  >
                    <td className="h-[20px] text-lg w-1/2 md:w-[380px] xl:w-[500px]">
                      {item.name}
                    </td>
                    <td className="text-lg flex-grow">{item.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};
