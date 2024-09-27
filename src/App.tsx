// App.tsx
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css";
import Compose, { IComposeProps } from "./components/layout/compose";
import Router from "./pages/router";
import { initializeTracking } from "./utils/tracking"; 
import "animate.css";

const App = () => {
  const queryClient = new QueryClient();
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

  if (trackingId) {
    initializeTracking(trackingId);
  } else {
    console.log("Tracking ID not provided. Tracking will not be initialized.");
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
