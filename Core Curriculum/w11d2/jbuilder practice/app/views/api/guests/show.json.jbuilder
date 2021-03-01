json.partial! 'guest', guest: @guest
json.gifts @gifts do |gift|
    json.extract! gift, :title, :description
end