import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css";
import Compose, { IComposeProps } from "./components/layout/compose";
import Router from "./pages/router";
import ReactGA from "react-ga4";
import "animate.css";

const App = () => {
  const queryClient = new QueryClient();

  const tracking_id = process.env.REACT_APP_GA_TRACKING_ID;

  if (tracking_id) {
    ReactGA.initialize(tracking_id);
    console.log("tracking");
  } else {
    console.log("not tracking");
  }

  const providers: IComposeProps["providers"] = [
    [QueryClientProvider, { client: queryClient }],
    [MantineProvider, { withGlobalStyles: true, withNormalizeCSS: true }],
  ];

  return (
    <Compose providers={providers}>
      <Notifications position='top-right' />
      <Router />
      <ReactQueryDevtools />
    </Compose>
  );
};

export default App;
