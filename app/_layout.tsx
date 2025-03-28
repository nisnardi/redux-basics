import { Link, Stack } from "expo-router";
import { Provider } from "react-redux";

import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Todos",
            headerRight: () => <Link href="/contador">Ir a Contador</Link>,
          }}
        />
        <Stack.Screen name="contador" options={{ title: "Contador" }} />
        <Stack.Screen name="todo" options={{ title: "Todo Detail" }} />
      </Stack>
    </Provider>
  );
}
