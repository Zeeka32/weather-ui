import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { WeatherAppProvider } from "./shared/contexts";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherAppProvider>
        <div className="w-full">
          <Header />
          <Main />
        </div>
      </WeatherAppProvider>
    </QueryClientProvider>
  );
}

export default App;
