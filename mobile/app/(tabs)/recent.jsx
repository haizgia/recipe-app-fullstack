import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { favoritesStyles } from "../../assets/styles/favorites.styles";
import RecipeCard from "../../components/RecipeCard";
import NoFavoritesFound from "../../components/NoFavoritesFound";
import { useSelector, useDispatch } from 'react-redux';
import { clearRecent } from '../../features/recentSlice';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

const RecentScreen = () => {
  const recent = useSelector(state => state.recent);
  const dispatch = useDispatch();

  return (
    <View style={favoritesStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={favoritesStyles.header}>
          <Text style={favoritesStyles.title}>Recent</Text>
          <TouchableOpacity style={favoritesStyles.logoutButton} onPress={() => dispatch(clearRecent())}>
            <Ionicons name="trash" size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <View style={favoritesStyles.recipesSection}>
          <FlatList
            data={recent}
            renderItem={({ item }) => <RecipeCard recipe={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={favoritesStyles.row}
            contentContainerStyle={favoritesStyles.recipesGrid}
            scrollEnabled={false}
            ListEmptyComponent={<NoFavoritesFound text="Recent recipe" />}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default RecentScreen;