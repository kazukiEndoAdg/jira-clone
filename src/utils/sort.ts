export type SortConfig = {
  key: string | null;
  direction: SortDirection;
};

export type SortDirection = "asc" | "desc" | undefined;

/**
 * 新しいソート設定を取得する
 * @param currentSortConfig 現在のソート設定
 * @param newKey 新しいソートキー
 * @returns 新しいソート設定
 */
export const getNewSortConfig = (
  currentSortConfig: SortConfig,
  newKey: string
): SortConfig => {
  const newDirection =
    currentSortConfig.key === newKey && currentSortConfig.direction === "asc"
      ? "desc"
      : "asc";
  return {
    key: newKey,
    direction: newDirection,
  };
};

/**
 * ソートを実行した結果を返す
 * @param currentSortConfig 現在のソート設定
 * @param newKey 新しいソートキー
 * @param sortTargetData ソート対象のデータ
 * @returns ソートしたデータ
 */
export const executeSort = <T>(
  currentSortConfig: SortConfig,
  newKey: keyof T,
  sortTargetData: T[]
) => {
  const direction =
    currentSortConfig.key === newKey && currentSortConfig.direction === "asc"
      ? "desc"
      : "asc";
  const sortedData = [...sortTargetData].sort((a, b) => {
    if (a[newKey] < b[newKey]) return direction === "asc" ? -1 : 1;
    if (a[newKey] > b[newKey]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return sortedData;
};
