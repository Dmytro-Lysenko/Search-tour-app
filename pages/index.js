//"our-domain.com/""

import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";
import TourList from "../components/tours/TourList";

const DUMMY_DATA = [
  {
    id: "n1",
    title: "Hollidays in Wroclaw",
    country: "Poland",
    date: "2022-05-03",
    photo:
      "https://discover-ukraine.info/uploads/i/i/4f9905f66ba892.88492562.10.jpg",
    price: "229",
    description:
      "Wrocław is the historical capital of Silesia and Lower Silesia. Today, it is the capital of the Lower Silesian Voivodeship. The history of the city dates back over a thousand years; at various times, it has been part of the Kingdom of Poland, the Kingdom of Bohemia, the Kingdom of Hungary, the Habsburg Monarchy of Austria, the Kingdom of Prussia and Germany.",
  },
  {
    id: "n2",
    title: "Hollidays in Kyiv",
    country: "Ukraine",
    date: "2022-04-12",
    photo:
      "https://discover-ukraine.info/uploads/i/i/4eea45b07360e4.83381928.100.jpg",
    price: "529",
    description:
      "Kyiv is the historical capital of Ukraine and Lower Silesia. Today, it is the capital of the Lower Silesian Voivodeship. The history of the city dates back over a thousand years; at various times, it has been part of the Kingdom of Poland, the Kingdom of Bohemia, the Kingdom of Hungary, the Habsburg Monarchy of Austria, the Kingdom of Prussia and Germany.",
  },
];

const HomePage = () => {
  return (
    <Layout>
      <TourList tours={DUMMY_DATA} />
    </Layout>
  );
};

export default HomePage;
