import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipiesScliceType } from "./recipeSlice"
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice"
import { createNotificationsSlice, type NotificationSliceType } from "./notificationSlice"
import { createAISlice, type AISlice } from "./aiSlice"

export const useAppStore = create<RecipiesScliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(
    devtools((...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationsSlice(...a),
        ...createAISlice(...a)
    })
))