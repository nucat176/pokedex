export const fetchAllPokemon = (success) => {
  $.ajax({
    type: 'GET',
    url: '/api/pokemon',
    success
  });
};

export const fetchPokemon = (id, success) => {
  $.ajax({
    type: 'GET',
    url: `/api/pokemon/${id}`,
    success
  });
};
