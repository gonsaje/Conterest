export const fetchCons = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/cons'
  });
};

export const fetchCon = (conId) => {
  return $.ajax({
    method: 'GET',
    url:`/api/cons/${conId}`
  });
};

export const createCon = con => {
  return $.ajax({
    method: 'POST',
    url: '/api/cons',
    data: {con}
  });
};

export const deleteCon = conId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/cons/${conId}`
  })
}