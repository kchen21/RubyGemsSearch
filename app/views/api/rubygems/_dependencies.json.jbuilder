json.ignore_nil!

dependencies.each do |d|
  json.set! d["name"] do
    json.extract! d, "name"
    json.project_uri "https://rubygems.org/gems/" + d["name"]

    if favorites.keys.include?d["name"]
      json.favorited true
      json.favorite_id favorites[d["name"]]["id"]
    else
      json.favorited false
    end
  end
end
