export const edit = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
}

export const fetchUser = user => {
  return $.ajax({
    url: `/api/user/${user.id}`,
    method: "GET",
    data: { user }
  })
}

export const fetchAllUsers = users => {
  return $.ajax({
    url: `/api/users`,
    method: "GET",
    data: { users }
  });
}