@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :email, :age, :followers, :followings, :boards
  end
end