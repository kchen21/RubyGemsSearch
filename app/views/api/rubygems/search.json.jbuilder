@gems.each do |g|
  json.set! g["name"] do
    json.ignore_nil!
    json.extract! g, "name", "project_uri", "info", "dependencies"

    if @favorites.keys.include?(g["name"])
      json.favorited true
      json.favorite_id @favorites[g["name"]]["id"]
    else
      json.favorited false
    end
  end
end
