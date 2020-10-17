// import 'taro-ui/dist/style/index.scss';
// import './styles/customVariables.scss';
import React, { ReactNode } from 'react';
import Unstated from './unstated';
import './app.scss';

const App = (props: { children: ReactNode }) => {
  return <Unstated.Provider>{props.children}</Unstated.Provider>;
};

export default App;
