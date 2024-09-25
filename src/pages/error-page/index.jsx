import { Helmet } from "react-helmet";

export const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-xl">Страница не существует</p>
      </main>
    </div>
  );
};
