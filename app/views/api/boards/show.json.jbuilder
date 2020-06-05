json.extract! @board, :name, :author_id, :id, :description
  
json.cons do 
  json.array! @board.cons do |con|
    json.extract! con, :id, :title, :link, :description, :photo
    json.photo_url url_for(con.photo)
  end
end