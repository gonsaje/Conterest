export const fetchAllBoards = () =>
  $.ajax ({
    url: "/api/boards",
    method: 'GET'
  })

export const createBoard = board => {
  return ($.ajax({
    url: "/api/boards",
    method: "POST",
    data: { board },
    }))
  };

  export const fetchBoard = boardId =>
  $.ajax({
    url: `/api/boards/${boardId}`,
    method: "GET",
  });

export const deleteBoard = boardId =>
  $.ajax({
    url: `/api/boards/${boardId}`,
    method: "DELETE",
  });

export const editBoard = (board) =>
  $.ajax({
    url: `/api/boards/${board.id}`,
    method: "PATCH",
    data: { board }
  });