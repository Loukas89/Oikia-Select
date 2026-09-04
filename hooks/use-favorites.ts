"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "oikia-select-favorites";
const FAVORITES_UPDATED_EVENT = "oikia-favorites-updated";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(FAVORITES_UPDATED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(FAVORITES_UPDATED_EVENT, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
}

function getServerSnapshot() {
  return "[]";
}

export function useFavorites() {
  const storedFavorites = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const favorites = useMemo<number[]>(() => {
    try {
      const parsed: unknown = JSON.parse(storedFavorites);

      return Array.isArray(parsed)
        ? parsed.filter((id): id is number => typeof id === "number")
        : [];
    } catch {
      return [];
    }
  }, [storedFavorites]);

  const toggleFavorite = useCallback(
    (id: number) => {
      const next = favorites.includes(id)
        ? favorites.filter((favoriteId) => favoriteId !== id)
        : [...favorites, id];

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
    },
    [favorites]
  );

  return { favorites, toggleFavorite };
}