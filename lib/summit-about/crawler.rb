require 'nokogiri'
require 'pry-byebug'
require 'rest-client'
require 'csv'
require 'pg'

query_url = "https://ntuchallenge.com/related.html"

r = RestClient.get(query_url)
doc =  Nokogiri::HTML(r)


companies = []
doc.css('.container:nth-child(6) .block').each do |com|
	imgSrc = com.css('img').attribute('src').value
	url = com.css('a').attribute('href').value

	company = {
		imgSrc: imgSrc,
		url: url
	}
	companies << company

end

CSV.open("related.csv", "w") do |csv|
	csv << ["imgSrc", "url"]
	companies.each do |com|
		csv << [com[:imgSrc], com[:url]]
	end
end