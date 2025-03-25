import { Text, View, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement, incrementByAmount } from "@/redux/counterSlice";

export default function Index() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // console.log(decrement());
  // console.log(increment());
  // console.log(incrementByAmount(5));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      <View style={styles.row}>
        <Button title="-" onPress={() => dispatch(decrement())} />
        <Button title="+" onPress={() => dispatch(increment())} />
      </View>
      <Button
        title="Incrementar en 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
