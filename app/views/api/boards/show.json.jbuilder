json.extract! @board, :title, :user_id, :id, :cons
  
json.cons do 
  json.array! @board.cons do |con|
    json.extract! con, :id, :title, :photo, 
    json.photo_url url_for(con.photo)
  end
end