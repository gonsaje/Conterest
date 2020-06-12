@cons.each do |con|
  json.set! con.id do 
    json.extract! con, :id, :title, :description, :photo, :board_id, :author_id
    if con.photo.attached?
      json.photo_url url_for(con.photo)
    end
  end
end