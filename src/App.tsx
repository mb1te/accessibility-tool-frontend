import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import {Routes} from "./routes/routes";

const App: FC = () => {
  return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Accessibility App</title>
        </Helmet>
        <Routes />
      </>
  );
};

export default App;
