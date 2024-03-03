import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data.js";
import CategoryGridTile from "../components/CategoryGridTile.js";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      horizontal={false}
    />
  );
}
