# == Schema Information
#
# Table name: rubygems
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rubygem < ActiveRecord::Base
  def search(keyword)
    Gems.search(keyword)
  end
end
