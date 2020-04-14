# == Schema Information
#
# Table name: cons
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  image_url   :string           not null
#  author_id   :integer          not null
#  board_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Con < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_one_attached :photo

  
end
