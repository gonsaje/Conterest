# == Schema Information
#
# Table name: cons
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  author_id   :integer          not null
#  board_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Con < ApplicationRecord
  validates :id, :title, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board

  has_one_attached :photo
  
end
