export const fetchGemSearchResults = (keyword) => {
  return $.ajax({
    method: 'GET',
    url: '/api/rubygems/search',
    data: { keyword }
  });
};
