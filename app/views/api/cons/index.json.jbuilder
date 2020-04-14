@cons.each do |con|
    json.set! con.id do
        json.extract! con, :id, :title, :description, :author_id
        json.photoUrl url_for(con.photo)
    end
end