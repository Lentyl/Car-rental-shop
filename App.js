import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";

import cartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import NavigatonContainer from "./navigation/NavigationContainer";
import ordersReducer from "./store/reducers/orders";
import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

fetchFonts = () => {
  return Font.loadAsync({
    "lato-italic": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Italic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigatonContainer />
    </Provider>
  );
}
