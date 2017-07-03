@favorites.each do |favorite|
  json.set! favorite.name do
    json.ignore_nil!
    json.extract! favorite, :id, :name, :link
  end
end
