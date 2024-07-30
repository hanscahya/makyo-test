export const findKeywordIndices = (
  target: string,
  keyword: string,
): number[] => {
  const keywordLower = keyword.toLowerCase();
  let result: number[] = [];

  const lowerStr = target.toLowerCase();

  let startIndex = lowerStr.indexOf(keywordLower);
  if (startIndex !== -1) {
    const endIndex = startIndex + keyword.length;
    if (endIndex !== -1) result = [startIndex, endIndex];
    else result = [0, 0];
  }

  return result;
};
