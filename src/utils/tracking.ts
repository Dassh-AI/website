import ReactGA from "react-ga4"; 

const initializeTracking = (trackingId: string) => {
  if (trackingId) {
    ReactGA.initialize(trackingId);
    console.log("Tracking initialized");
  } else {
    console.log("Tracking ID not provided");
  }
};

const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({ category, action, label });
};
export const TrackingEvents = {
  SIGN_IN: () => trackEvent("User Action", "Sign_in"),
  BOOK_A_CALL: () => trackEvent("User Action", "Book_A_Call"),
  TRY_FOR_FREE: () => trackEvent("User Action", "Try_for_Free"),
  BOOK_A_CALL_ABOUT_US: () => trackEvent("User Action", "Book_A_Call_About_Us"), 
  Talent_Acquisition: () => trackEvent("User Action", "Talent Acquisition"),
  Talent_Development: () => trackEvent("User Action", "Talent Development"),
  Get_More_Info : () => trackEvent("User Action","Get More Info"),
  Identify_traits : () => trackEvent("User Action","Identify Traits"),
  Generate_For_Free : () => trackEvent("User Action","Generate For Free"),




};

export { initializeTracking };
