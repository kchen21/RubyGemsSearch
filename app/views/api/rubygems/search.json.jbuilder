@gems.each do |g|
  json.set! g["name"] do
    json.ignore_nil!
    json.extract! g, "name", "project_uri", "info", "dependencies"

    if @favorites.include?(g["name"])
      json.favorited true
    else
      json.favorited false
    end
  end
end
