export const FormatDataMenu = (data) => {
    const groupedItems = {};
    data.forEach((item) => {
      if (item.ParentId !== null) {
        if (!groupedItems[item.ParentId]) {
          groupedItems[item.ParentId] = [];
        }
        groupedItems[item.ParentId].push(item);
      }
    });

    return groupedItems;
  }