# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  link       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ActiveRecord::Base
end
