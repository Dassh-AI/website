import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@mantine/core/styles.css";
import Compose, { IComposeProps } from "./components/layout/compose";
import Router from "./pages/router";
import "animate.css";

const App = () => {
  const queryClient = new QueryClient();

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
