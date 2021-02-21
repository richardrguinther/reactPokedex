import React from "react";

const Loading = () => {
  let [loadingText, setLoadingText] = React.useState("Loading");

  React.useEffect(() => {
    let loadingInterval = window.setInterval(() => {
      if (loadingText !== "Loading...") {
        setLoadingText((loadingText += "."));
      } else {
        window.clearInterval(loadingInterval);
        setLoadingText("Loading");
      }
    }, 1000);

    return () => {
      window.clearInterval(loadingInterval);
    };
  }, [loadingText]);

  return <h1 id="loading-screen">{loadingText}</h1>;
};

export default Loading;
