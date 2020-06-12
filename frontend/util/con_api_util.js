export const fetchAllCons = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/cons'
  });
};

export const fetchCon = (id) => {
  return $.ajax({
    method: 'GET',
    url:`/api/cons/${id}`
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

export const editCon = con => 
  $.ajax({
    url: `/api/cons/${con.id}`,
    method: "PATCH",
    data: { con }
  });