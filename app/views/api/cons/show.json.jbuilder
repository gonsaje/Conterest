json.con do
  json.extract! @con, :title, :author_id, :id, :photo
  json.photo_url url_for(@con.photo)
end