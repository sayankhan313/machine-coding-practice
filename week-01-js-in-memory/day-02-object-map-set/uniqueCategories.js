function getUniqueCategories(categories) {
  const seen = new Set();

  for (let i = 0; i < categories.length; i++) {
    if (!seen.has(categories[i])) {
      seen.add(categories[i]);
    }
  }

  return [...seen];
}