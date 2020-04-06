# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :session_token, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length:{minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

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
    SecureRandom::urlsafe_base4
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token || self.class.generate_session_token

  end

  def reset_session_token!
    self.update(session_token: self.class.generate_session_token)
    self.session_token
  end
end
