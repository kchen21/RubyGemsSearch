class Rubygem < ActiveRecord::Base
  def search(keyword)
    Gems.search(keyword)
  end
end
