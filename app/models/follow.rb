# == Schema Information
#
# Table name: follows
#
#  id               :bigint           not null, primary key
#  follower_id      :integer
#  followed_user_id :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Follow < ApplicationRecord
    
    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :followed_user, 
    foreign_key: :followed_user_id, 
    class_name: :User
    
end
