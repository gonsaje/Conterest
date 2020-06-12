json.con do
  json.extract! @con, :title, :author_id, :id, :photo, :board_id
  json.photo_url url_for(@con.photo)
end