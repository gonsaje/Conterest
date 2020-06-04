# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer          not null
#  session_token   :string
#
class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  validates :password_digest, :session_token, :age, presence: true
  validates :password, length:{minimum: 6}, allow_nil: true
  

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :cons,
    foreign_key: :author_id

  has_many :received_follows, 
  foreign_key: :followed_user_id, 
  class_name: "Follow"
  
  has_many :followers, 
  through: :received_follows, 
  source: :follower

  has_many :given_follows, 
  foreign_key: :follower_id, 
  class_name: "Follow"

  has_many :followings, 
  through: :given_follows, 
  source: :followed_user

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user && @user.is_password?(password)
    @user
  end

  def is_password?(password)
    bc_pass = BCrypt::Password.new(self.password_digest)
    bc_pass.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token

  end

  def reset_session_token!
    self.update(session_token: self.class.generate_session_token)
    self.session_token
  end
end
