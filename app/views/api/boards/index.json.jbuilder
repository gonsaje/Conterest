@boards.each do |board|
  json.set! board.id do 
    json.extract! board, :title, :user_id, :id, :cons
  end
end