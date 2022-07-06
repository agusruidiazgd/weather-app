import 'react-calendar/dist/Calendar.css';

export default function Layout({children}) {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-gradient-to-br from-yellow-400 to-pink-500 via-red-400">
      <header className="w-full flex justify-center py-12">
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-white">
          Weather App!
        </h1>
      </header>
      {children}
    </div>
  );
}
