export const getPages = (quantityPages: number, currentPage: number) => {
  const pagination = [];
  pagination.push(currentPage);

  if (quantityPages === 0) {
    return pagination;
  }

  if (currentPage > 1) {
    pagination.unshift(currentPage - 1);
  }

  // if (currentPage = 3 ) {
  //   // pagination.unshift('...');
  //   pagination.unshift(1);
  // }

  if (currentPage > 3) {
      // pagination.unshift('...');
      pagination.unshift(1);
  }

  if (currentPage !== quantityPages) {
    pagination.push(currentPage + 1);
    if (currentPage === 1) {
      pagination.push(currentPage + 2)
    }
  }

  if (currentPage < quantityPages - 1) {
    pagination.push('...');
    pagination.push(quantityPages);
  }

  return pagination;
}